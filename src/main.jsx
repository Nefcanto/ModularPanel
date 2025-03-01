import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import { initializeFileTypeIcons } from '@fluentui/react-file-type-icons'
import Panel from "./Panel/Panel"
import NewPanel from "./Panel/NewPanel"
import {
    checkSignIn,
    get,
    getSettings,
    setLocale,
    setSupportedLocales,
    setTranslations,
} from "App"
import "./index.css"
import { dependencies } from "./Dependencies.jsx"

initializeFileTypeIcons()

getSettings()
    .then(data => {
        window.settings = data
        const setData = data => {
            let mergedTranslations = {}
            data.translations.map(i => mergedTranslations = { ...mergedTranslations, ...i })
            setTranslations(mergedTranslations)
            setLocale(data.locale || data.requestLocale)
            setSupportedLocales(data.locales || data.supportedLocales)
            document.dir = (data.locale || data.requestLocale)?.isRtl ? "rtl" : "ltr"
        }

        const render = () => {
            const container = document.getElementById("root")
            const root = createRoot(container)
            get("/globalization/data?scopesCsv=all,panel&interfacesCsv=all,panel")
                .then(data => {
                    setData(data)
                    root.render(
                        <StrictMode>
                            <BrowserRouter>
                                {
                                    // window.settings.NewPanel
                                    false
                                        ?
                                        <NewPanel />
                                        :
                                        <Panel />
                                }
                            </BrowserRouter>
                        </StrictMode>
                    )
                }, error => {
                    console.log(error)
                    alert(error)
                })
        }

        window.enums = {}
        window.dependencies = dependencies

        if (window.settings.DefaultPersonType) {
            window.defaultPersonType = window.settings.DefaultPersonType
        }

        if (window.settings.Role) {
            window.role = window.settings.Role
        }

        if (window.settings.Security?.toLowerCase() === "off") {
            render()
        }
        else {
            const renderingInterval = setInterval(() => {
                clearInterval(renderingInterval)
                checkSignIn(
                    () => {
                        render()
                    }
                )
            }, 50)
        }
    })
