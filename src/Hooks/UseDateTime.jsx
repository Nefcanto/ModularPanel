import app from "App"

const useDateTime = () => {

    const shamsiMonths = [
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
        "دی",
        "بهمن",
        "اسفند"
    ]

    const dayOfMonth = date => {

    }

    const getMonthName = month => {
        const date = new Date()
        date.setMonth(month - 1)
        const name = date.toLocaleString(app.getLocale().key, { month: "long" })
        return name
    }

    const getShortMonthName = month => {
        const date = new Date()
        date.setMonth(month - 1)
        const name = date.toLocaleString(app.getLocale().key, { month: "short" })
        return name
    }

    const getLocaleMonthName = month => {
        if (app.getLocale().key == supportedLocales.fa) {
            return shamsiMonths[(month * 1) - 1]
        }
        return getMonthName(month)
    }

    return {
        getLocaleMonthName,
        getMonthName,
        getShortMonthName,
    }
}

export default useDateTime
