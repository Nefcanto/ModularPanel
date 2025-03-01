import { useState } from "react"
import { useSearchParams } from "react-router"
import useLocalStorage from "./UseLocalStorage"

const usePageNumber = ({
    camelizedEntityType,
    ignoreUrl,
    isBrowse,
}) => {

    const [searchParams] = useSearchParams()
    const localStorageKey = `${camelizedEntityType}${isBrowse ? "_browse" : ""}_pageNumber`
    const queryKey = "pageNumber"
    const localStorageValue = window.localStorage.getItem(localStorageKey)
    const queryValue = searchParams.get(queryKey)

    const getDefaultPageNumber = () => {
        if (!isBrowse && !ignoreUrl) {
            if (queryValue && !isNaN(queryValue)) {
                return queryValue * 1
            }
        }
        if (localStorageValue && !isNaN(localStorageValue)) {
            return localStorageValue * 1
        }
        return 1
    }

    const [initialPageNumber] = useState(getDefaultPageNumber())
    const [pageNumber, setPageNumber] = useLocalStorage({
        defaultValue: 1,
        initialValue: initialPageNumber,
        key: localStorageKey
    })

    const setPageNumberInQuery = query => {
        if (pageNumber > 1) {
            query.set(queryKey, pageNumber)
        }
        else {
            query.delete(queryKey)
        }
    }

    return {
        initialPageNumber,
        localStorageKey,
        pageNumber,
        queryKey,
        setPageNumber,
        setPageNumberInQuery,
    }
}

export default usePageNumber
