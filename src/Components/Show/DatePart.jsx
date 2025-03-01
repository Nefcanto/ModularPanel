// total mess: https://en.wikipedia.org/wiki/List_of_calendars
import { format } from "date-fns-jalali"
import { getLocale } from "App"

const DatePart = ({
    className,
    date,
}) => {

    if (!date) {
        return null
    }
    const normalizedValue = (date && date.endsWith("Z")) ? date : (date + "Z")
    const localeKey = getLocale().key
    if (localeKey === "fa") {
        return <div className={className || ""}> {format(new Date(normalizedValue), "yyyy/MM/dd")} </div>
    }
    if (localeKey === "ar") {
        return <div className={className || ""}> {new Intl.DateTimeFormat("ar-SA-u-ca-islamic", {
            day: "numeric",
            month: "numeric",
            year: "numeric"
        }).format(Date.now())}
        </div>
    }
    return <div className={className || ""}> {new Date(normalizedValue).toDateString()}</div >
}

export default DatePart
