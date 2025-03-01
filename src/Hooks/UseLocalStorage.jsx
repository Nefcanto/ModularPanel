import {
    useEffect,
    useState,
} from "react"

const useLocalStorage = ({
    defaultValue,
    initialValue,
    key,
}) => {

    const getInitialValue = () => {
        const value = window.localStorage.getItem(key)
        const hasValue = value !== null && value !== "undefined"
        let localStorageValue = initialValue
        if (hasValue) {
            try {
                localStorageValue = JSON.parse(value)
            } catch (e) {
                // console.table({
                //     [key]: {
                //         defaultValue,
                //         initialValue,
                //         value
                //     }
                // })
                localStorageValue = value
            }
        }
        return localStorageValue
    }

    const [value, setValue] = useState(getInitialValue())

    useEffect(() => {
        if (value === null || value === undefined || value === defaultValue) {
            window.localStorage.removeItem(key)
        }
        else {
            if (typeof value === "string") {
                window.localStorage.setItem(key, value)
            }
            else {
                window.localStorage.setItem(key, JSON.stringify(value))
            }
        }
    }, [key, value])

    return [value, setValue]
}

export default useLocalStorage
