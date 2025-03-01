import Holism from "./Holism"
import Globalization from "./Globalization"

const Env = {
    env: key => {
        if (!key) {
            return `Key is undefined`
        }
        const value = window.settings[key]
        if (!value) {
            console.error("Non existing key in the environment", key)
            return ""
        }
        return Holism.trim(value, "/")
    },
    isDev: () => {
        return window.settings.IsDeveloping || false
    },
    localizedSiteUrl: () => {
        const { isDefault, key } = Globalization.getLocale()
        let url = `${window.settings.SiteUrl}/${isDefault ? "" : `${key}`}`
        url = url.replace("//", "/").replace(":/", "://")
        if (url.endsWith("/")) {
            url = url.slice(0, -1)
        }
        return url
    }
}

export default Env
