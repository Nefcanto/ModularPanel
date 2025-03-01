import {
    useEffect,
    useState,
} from "react"
import { useSearchParams } from "react-router"
import app from "App"
import useWindowSize from "./UseWindowSize"
import useLocalStorage from "./UseLocalStorage"

const usePageSize = ({
    camelizedEntityType,
    ignoreUrl,
    isBrowse,
    multicolumn,
}) => {

    const [searchParams] = useSearchParams()
    const localStorageKey = `${camelizedEntityType}${isBrowse ? "_browse" : ""}_pageSize`
    const queryKey = "pageSize"
    const localStorageValue = window.localStorage.getItem(localStorageKey)
    const queryValue = searchParams.get(queryKey)

    const { width, height } = useWindowSize()

    const {
        zero,
        xs,
        sm,
        md,
        lg,
        xl,
        xxl
    } = app.breakpoints

    const getDefaultValue = () => {
        if (!multicolumn) {
            return window?.defaultPageSize || 5
        }
        if (width > zero && width <= sm) {
            return 5
        }
        if (width > sm && width <= lg) {
            return 10
        }
        if (width > lg && width <= xxl) {
            return 18
        }
        if (width > xxl) {
            return 20
        }
        return null
    }

    const getInitialValue = () => {
        if (!isBrowse && !ignoreUrl) {
            if (queryValue && !isNaN(queryValue)) {
                return queryValue * 1
            }
        }
        if (localStorageValue && !isNaN(localStorageValue)) {
            return localStorageValue * 1
        }
        return getDefaultValue()
    }

    const [initialPageSize] = useState(getInitialValue())
    const [pageSize, setPageSize] = useLocalStorage({
        defaultValue: getDefaultValue(),
        initialValue: initialPageSize,
        key: localStorageKey
    })

    const setPageSizeInQuery = query => {
        if (pageSize === getDefaultValue()) {
            query.delete(queryKey)
        }
        else {
            query.set(queryKey, pageSize)
        }
    }

    useEffect(() => {
        // setPageSize(getDefaultValue({ multicolumn }))
    }, [width])

    return {
        initialPageSize,
        localStorageKey,
        pageSize,
        queryKey,
        setPageSize,
        setPageSizeInQuery,
    }
}

export default usePageSize
