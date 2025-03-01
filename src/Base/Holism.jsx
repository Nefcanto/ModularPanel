const Holism = {
    isSomething: value => {
        return !Holism.isNothing(value)
    },
    isNothing: value => {
        return value === undefined || value === null || (/^\s*$/g.test(value))
    },
    isGuid: value => {
        if (!value) {
            return false
        }
        if (value[0] === "{") {
            value = value.substring(1, value.length - 1)
        }
        let guidRegex = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi
        return guidRegex.test(value)
    },
    randomId: () => {
        return Math.random().toString(36).replace(/[^a-z]+/g, "")
    },
    ensure: items => {
        for (let i = 0; i < items.length; i++) {
            if (!items[i]) {
                throw `Required parameter is not specified`
            }
        }
    },
    ensureFunction: items => {
        Holism.ensure(items)
        for (let i = 0; i < items.length; i++) {
            if (!(items[i] instanceof Function)) {
                throw "Required parameter is not a function"
            }
        }
    },
    breakpoints: {
        xs: 360,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536
    },
    goTo: url => {
        //navigate(url)
    },
    camelize: text => {
        if (!text) {
            return ""
        }
        if (!text.replace) {
            return ""
        }
        text = text.replace(/[^a-zA-Z ]/g, "")
        return text.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase()
        }).replace(/\s+/g, "")
    },
    pascalize: text => {
        const camelized = Holism.camelize(text)
        if (!camelized) {
            return ""
        }
        const pascalized = camelized.charAt(0).toUpperCase() + camelized.slice(1)
        return pascalized
    },
    trim: (text, character) => {
        let start = 0,
            end = text.length

        while (start < end && text[start] === character)
            ++start

        while (end > start && text[end - 1] === character)
            --end

        return (start > 0 || end < text.length) ? text.substring(start, end) : text
    },
    hasEntities: value => {
        if (Array.isArray(value) && value.length > 0) {
            return true
        }
        return false
    },
    openDownloadDialog: data => {
        const {
            file,
            fileName,
        } = data
        const url = window.URL.createObjectURL(file)
        const a = document.createElement("a")
        a.href = url
        a.download = fileName || "DownloadedFile"
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
    },
    getJsonHtml: (obj, level, isDark) => {
        if (!obj) {
            return <span className="ml-2 ml-4 ml-6 ml-8 ml-10"></span>
        }
        return <ul
            className="leading-4"
            dir="ltr"
        >
            <li className={`${isDark ? " text-yellow-100 " : " text-orange-600 "} ml` + level * 2}>{Array.isArray(obj) ? "[" : "{"}</li>
            {
                Object.getOwnPropertyNames(obj).map(propertyName => {
                    const property = obj[propertyName]
                    return <li key={propertyName}>
                        <span className="font-bold text-purple-900 dark:text-yellow-400 font-mono px-2 ml-8 inline-block rounded-sm">{propertyName}<span>:</span> </span>
                        {
                            typeof property === "object" && property != null
                                ?
                                <span className="ml-10 block break-all">
                                    {Holism.getJsonHtml(property, level + 1, isDark)}
                                </span>
                                :
                                <span className="inline-block ml-1 break-all">
                                    {
                                        obj[propertyName] === null
                                            ?
                                            <span className="text-gray-400">null</span>
                                            :
                                            (
                                                typeof property === "string"
                                                    ?
                                                    `"${obj[propertyName]}"`
                                                    :
                                                    (
                                                        typeof property === "boolean"
                                                            ?
                                                            (
                                                                obj[propertyName] === true ? "true" : "false"
                                                            )
                                                            :
                                                            obj[propertyName]
                                                    )
                                            )
                                    }
                                </span>
                        }
                    </li>
                })
            }
            <li className={`${isDark ? " text-yellow-100 " : " text-orange-600 "}`}>{Array.isArray(obj) ? "]" : "}"}</li>
        </ul>
    },
    pathAndQuery: url => {
        try {
            const parsedUrl = new URL(url || document.location.toString())
            const path = parsedUrl.pathname
            const query = parsedUrl.search
            return `${path}${query}`
        } catch (error) {
            console.error("Invalid URL:", error)
            return null
        }
    },
    distinct: (array, property) => {
        if (!array) {
            return []
        }
        if (!array.map) {
            return []
        }
        return array
            .filter(i => i)
            .filter(i => i[property])
            .filter((current, index, originalArray) => index === originalArray.findIndex(element => element[property] === current[property]))
    },
    getPercentColor: percentage => {
        percentage = Math.max(0, Math.min(100, percentage))
        const red = Math.round(255 - (255 * percentage / 100))
        const green = Math.round(255 * percentage / 100)
        return `rgb(${red}, ${green}, 0)`
    }
}

export default Holism
