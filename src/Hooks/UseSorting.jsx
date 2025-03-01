import { useState } from "react"
import { useSearchParams } from "react-router"
import app from "App"

const useSorting = ({
    camelizedEntityType,
    isBrowse,
    sorts: uiSorts,
}) => {

    const [searchParams] = useSearchParams()
    const localStorageKey = `${camelizedEntityType}_${isBrowse ? "browse_" : ""}sort`
    const queryKey = "sort"
    const localStorageValue = window.localStorage.getItem(localStorageKey)
    const queryValue = searchParams.get(queryKey)

    const parseSort = sortString => {
        const parts = sortString.split("_")
        const sort = {
            property: parts[0],
            direction: parts[1]
        }
        return sort
    }

    const serializeSort = sort => {
        const camelizedKey = app.camelize(sort.key || sort.property)
        const value = `${camelizedKey}${sort.direction ? "_" : ""}${sort.direction || ""}`
        return value
    }

    const getInitialSort = () => {
        if (queryValue) {
            return [parseSort(queryValue)]
        }
        if (localStorageValue) {
            return [parseSort(localStorageValue)]
        }
        return null
    }

    const [initialSort] = useState(getInitialSort())

    const [sorts, setSorts] = useState(initialSort ? [...initialSort] : [])

    return {
        localStorageKey,
        queryKey,
        serializeSort,
        setSorts,
        sorts,
        uiSorts,
    }
}

export default useSorting
