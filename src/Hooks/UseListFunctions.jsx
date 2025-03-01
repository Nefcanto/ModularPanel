import { useSearchParams } from "react-router"
import app, { filterOperator } from "App"

const useListFunctions = ({
    entityType,
    ignoreUrl,
    isBrowse,
}) => {

    const camelizedEntityType = app.camelize(entityType)
    const [searchParams] = useSearchParams()

    const getFilterLocalStorageKey = ({
        camelizedEntityType,
        isBrowse,
        property,
    }) => {
        let key = `${camelizedEntityType}_`
        if (isBrowse) {
            key += `_browse_`
        }
        if (property) {
            key += `_${property}`
        }
        key = key.replaceAll("__", "_")
        return key
    }
    const localStorageFilterPrefix = getFilterLocalStorageKey({
        camelizedEntityType,
        isBrowse
    })

    const extractFilters = array => array
        .filter(([key, value]) => {
            const operator = value && value.split("_")[0]
            return operator && Object.keys(filterOperator).map(i => i.toLowerCase()).includes(operator?.toLowerCase())
        })
        .map(([key, value]) => {
            return {
                property: app.camelize(key),
                operator: value && value.split("_")[0],
                value: value && value.split("_")[1]
            }
        })

    const extractQueryStringParameters = () => {
        if (isBrowse || ignoreUrl) {
            return []
        }
        return Array.from(new URLSearchParams(document.location.search))
            .filter(([key, value]) => {
                const operator = value && value.split("_")[0]
                return !Object.keys(filterOperator).map(i => i.toLowerCase()).includes(operator?.toLowerCase())
            })
            .map(([key, value]) => {
                return {
                    key,
                    value,
                }
            })
    }

    const extractQueryStringFilters = () => {
        if (isBrowse || ignoreUrl) {
            return []
        }
        return extractFilters(Array.from(new URLSearchParams(document.location.search)))
    }

    const extractLocalStorageFilters = () => {
        const ignoreStoredListParameters = searchParams.get("ignoreStoredListParameters")
        if (ignoreStoredListParameters) {
            return []
        }
        const entries = Array.from(Object.entries(window.localStorage))
            .filter(i => {
                let isValid = i[0].startsWith(localStorageFilterPrefix)
                if (!isValid) {
                    return false
                }
                else {
                    if (!isBrowse) {
                        isValid = !i[0].includes("_browse_")
                        return isValid
                    }
                    return isValid
                }
            })
            .map(i => [i[0].replace(localStorageFilterPrefix, ""), i[1]])
        return extractFilters(entries)
    }

    const extractQueryStringFilter = property => extractQueryStringFilters().find(i => i.property === property)

    const extractLocalStorageFilter = property => extractLocalStorageFilters().find(i => i.property === property)

    const extractFilter = property => {
        const camelizedProperty = app.camelize(property)
        const queryFilter = extractQueryStringFilter(camelizedProperty)
        if (queryFilter) {
        }
        if (!isBrowse && !ignoreUrl) {
            if (queryFilter) {
                return queryFilter
            }
        }
        const localStorageFilter = extractLocalStorageFilter(camelizedProperty)
        if (localStorageFilter) {
            return localStorageFilter
        }
        return null
    }

    return {
        extractFilter,
        extractFilters,
        extractLocalStorageFilter,
        extractLocalStorageFilters,
        extractQueryStringFilter,
        extractQueryStringFilters,
        extractQueryStringParameters,
        getFilterLocalStorageKey,
    }
}

export default useListFunctions
