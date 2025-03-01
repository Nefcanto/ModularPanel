import app from "./App"

const nonTranslatedTexts = []

const Globalization = {
    translations: [],
    supportedLocales: {},

    setTranslations: translations => {
        Globalization.translations = translations
        window.translations = translations
    },
    getTranslations: () => {
        return Globalization.translations
    },
    t: text => {
        if (!text) {
            return text
        }
        if (app.pascalize(text) != text) {
            // console.warn(`Non pascalized text for translation: ${text}`)
        }
        if (Globalization.translations.hasOwnProperty(text)) {
            return Globalization.translations[text]
        }
        let camelizedText = app.camelize(text)
        if (Globalization.translations.hasOwnProperty(camelizedText)) {
            return Globalization.translations[camelizedText]
        }
        if (!nonTranslatedTexts.includes(text)) {
            nonTranslatedTexts.push(text)
        }
        return text
    },
    getNonTranslatedTexts: () => {
        return nonTranslatedTexts
    },
    locale: {},
    setLocale: locale => {
        Globalization.locale = locale
    },
    getLocale: () => {
        return Globalization.locale
    },
    setSupportedLocales: locales => {
        const supportedLocales = locales?.reduce((locales, currentLocale) => {
            locales[currentLocale.key] = currentLocale.key
            return locales
        }, {})
        Globalization.supportedLocales = supportedLocales
        window.supportedLocales = supportedLocales
    },
    getSupportedLocales: () => {
        return Globalization.supportedLocales
    },
    isRtl: () => {
        return Globalization.locale.isRtl || Globalization.locale.rtl
    },
    browserLocale: {
        date: Intl.DateTimeFormat().resolvedOptions(),
        number: Intl.NumberFormat().resolvedOptions()
    },
    now: () => {
        return {
            local: new Date().toLocaleString(),
            utc: new Date().toUTCString()
        }
    }
}

export default Globalization
