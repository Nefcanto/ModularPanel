// todo: https://stackoverflow.com/questions/73017619/axios-not-respecting-content-type-header

import { renderToStaticMarkup } from "react-dom/server"
import axios from "axios"
import Account from "./Account"
import app from "./App"
import getSettings from "./GetSettings"
import unauthorizedJsx from "./UnauthorizedHtml"

const requestConfig = {
    onUploadProgress: function (progressEvent) {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        console.log(percentCompleted)
    }
}

const createNodeApiHost = host => {
    const [subdomain, ...rest] = host.split('.')
    return `api.${subdomain}postgres.${rest.join('.')}`
}

let baseUrl
let axiosApi

const requestInterceptor = async config => {
    config.headers["X-Client"] = "React"
    if (localStorage.getItem("locale")) {
        config.headers["Locale"] = localStorage.getItem("locale")
    }
    await Account.updateToken()
    config.headers.Authorization = `Bearer ${app.token()}`
    return config
}

const errorInterceptor = async error => {
    if (error.code === "ERR_NETWORK") {
        return Promise.reject("The network is not connected, or the API is down, or the API is not configured for CORS.")
    }
    if (error.response === undefined) {
        return Promise.reject(error.message ? error.toString() : "Unknown error")
    }
    if (error.response.status === 401 || (error.response.status === 500 && error.response.data === "An error occurred processing your authentication.")) {
        let url = new URL(app.createSignOutUrl())
        url.search = app.checkSignInUrl()
        window.newUrl = url
        app.checkSignIn()
        return Promise.reject("You need to sign-in again.")
    }
    if (error.response.status === 403) {
        const signOutUrl = app.createSignOutUrl()
        const unauthorizedHtml = renderToStaticMarkup(unauthorizedJsx(signOutUrl))
        document.body.innerHTML = unauthorizedHtml
    }
    if (error.response.status === 404) {
        return Promise.reject("404\nService does not exist")
    }
    if (error.response.status === 400 || error.response.status === 500) {
        let messages = ""
        let data = error.response.data
        if (data instanceof Blob) {
            if (data.type === "application/json") {
                data = JSON.parse(await data.text())
            }
            else if (data.type == "text/plain") {
                data = await data.text()
            }
            else {
                data = data.type
            }
        }
        if (typeof data !== "string") {
            if (data.stack || data.problems) {
                return Promise.reject(
                    {
                        message: data.text || data.message || data.code,
                        data: data.data,
                        description: <div>
                            {
                                data.stack?.filter(i => i !== data.text).map(i => <div
                                    className="my-2"
                                    key={i}
                                >
                                    {i}
                                </div>)
                            }
                            {
                                data.problems?.filter(i => i !== data.text).map(i => <div
                                    className="my-2"
                                    key={i}
                                >
                                    {i}
                                </div>)
                            }
                        </div>
                    }
                )
            }
            else {
                for (let entity in error.response.data) {
                    if (entity.toLowerCase && entity.toLowerCase() === "type") {
                        continue
                    }
                    if (Array.isArray(data[entity])) {
                        for (let i = 0; i < data[entity].length; i++) {
                            messages += data[entity][i] + "\n"
                        }
                    }
                    else if (typeof data[entity] === "object") {
                        if (entity === "data") {
                            messages += JSON.stringify(data[entity])
                        }
                        else {
                            console.log(data[entity])
                        }
                    }
                    else {
                        messages += data[entity] + "\n"
                    }
                }
            }
        }
        else {
            messages = data
        }
        if (messages.indexOf("IDX10223") > -1) {
            app.checkSignIn()
            return Promise.reject("You need to sign-in again.")
            //app.updateToken()
        }
        console.error(messages)
        return Promise.reject(messages)
    }
}

const getApiUrl = settings => {
    if (settings?.ApiUrl) {
        return settings?.ApiUrl
    }
    if (settings?.NodeApi) {
        if (settings?.IsDeveloping) {
            let apiUrl = createNodeApiHost(document.location.hostname)
            apiUrl = apiUrl.replace("postgres", "")
            return apiUrl
        }
        return createNodeApiHost(document.location.hostname)
    }
    return `api.${document.location.hostname}`
}

const createAxios = async () => {
    const settings = await getSettings()
    baseUrl = getApiUrl(settings)
    axiosApi = axios.create({
        baseURL: `https://${baseUrl}`
    })
    axiosApi.interceptors.request.use(requestInterceptor, error => Promise.reject(error))
    axiosApi.interceptors.response.use(response => response, errorInterceptor)
}

const get = async (url) => {
    if (!axiosApi) {
        await createAxios()
    }
    return await
        axiosApi
            .get(url, {
                crossDomain: true
            })
            .then(response => {
                return response?.data
            })
            .catch(error => {
                throw error
            })
}

const post = async (url, data) => {
    if (!axiosApi) {
        await createAxios()
    }
    return await axiosApi
        .post(url, Array.isArray(data) ? [...data] : { ...data })
        .then(response => response?.data)
        .catch(error => {
            throw error
        })
}

const form = async (url, data) => {
    if (!axiosApi) {
        await createAxios()
    }
    return await axiosApi
        .post(url, new URLSearchParams(data))
        .then(response => response?.data)
        .catch(error => {
            throw error
        })
}

const upload = async (url, data) => {
    if (!axiosApi) {
        await createAxios()
    }
    return await axiosApi
        .post(url, data, {
            ...requestConfig,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then(response => response?.data)
        .catch(error => {
            throw error
        })
}

const getFileNameFromContentDisposition = contentDisposition => {
    let fileName = '';
    const fileNameUtf8 = contentDisposition.match(/filename\*\s*=\s*UTF-8''(.+?)(?:;|$)/);
    if (fileNameUtf8 && fileNameUtf8[1]) {
        fileName = decodeURIComponent(fileNameUtf8[1]);
    } else {
        const fileNameNormal = contentDisposition.match(/filename\s*=\s*["']?([^;]+?)["']?(?:;|$)/);
        if (fileNameNormal && fileNameNormal[1]) {
            fileName = fileNameNormal[1];
        }
    }
    return fileName;
}

const download = async (url) => {
    if (!axiosApi) {
        await createAxios()
    }
    return await
        axiosApi
            .get(url, {
                crossDomain: true,
                responseType: "blob"
            })
            .then(response => {
                const contentDisposition = response.headers["content-disposition"]
                const fileName = contentDisposition ? getFileNameFromContentDisposition(contentDisposition) : url.split("/").reverse()[0]
                return {
                    file: new File([response?.data], "File"),
                    fileName,
                }
            })
            .catch(error => {
                throw error
            })
}

const downloadExternal = async (url) => {
    if (!axiosApi) {
        await createAxios()
    }
    return await
        axios
            .get(url)
            .then(response => {
                const contentDisposition = response.headers["content-disposition"]
                const fileName = contentDisposition ? getFileNameFromContentDisposition(contentDisposition) : url.split("/").reverse()[0]
                return {
                    file: new File([response?.data], "File"),
                    fileName,
                }
            })
            .catch(error => {
                throw error
            })
}

export { axios }
export { download }
export { downloadExternal }
export { errorInterceptor }
export { form }
export { get }
export { post }
export { requestInterceptor }
export { upload }
