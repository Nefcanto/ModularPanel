import {
    useEffect,
    useMemo,
    useState,
} from "react"
import { useSearchParams } from "react-router"
import app from "App"
import useFilterablesCounter from "./UseFilterablesCounter"
import useLocalStorage from "./UseLocalStorage"
import useListFunctions from "./UseListFunctions"

const useFiltering = props => {

    const [searchParams] = useSearchParams()
    const {
        camelizedEntityType,
        entityType,
        filters: uiFilters,
        ignoreUrl,
        isBrowse,
    } = props

    const {
        extractQueryStringParameters,
        extractQueryStringFilters,
        extractLocalStorageFilters
    } = useListFunctions({
        entityType,
        isBrowse,
    })

    const getInitialFilters = () => {
        const initialQueryParameters = extractQueryStringParameters()
        const initialQueryFilters = extractQueryStringFilters()
        const initialLocalStorageFilters = extractLocalStorageFilters()
        const initialFilters = []
        if (!isBrowse && !ignoreUrl) {
            for (let i = 0; i < initialLocalStorageFilters.length; i++) {
                const localStorageFilter = initialLocalStorageFilters[i]
                const queryParameter = initialQueryParameters.find(i => i.key === localStorageFilter.property)
                const queryFilter = initialQueryFilters.find(i => i.property === localStorageFilter.property)
                if (queryParameter) {
                    initialFilters.push(queryParameter)
                }
                else if (queryFilter) {
                    initialFilters.push(queryFilter)
                } else {
                    initialFilters.push(localStorageFilter)
                }
            }
            for (let i = 0; i < initialQueryFilters.length; i++) {
                const queryFilter = initialQueryFilters[i]
                const localStorageFilter = initialLocalStorageFilters.find(i => i.property === queryFilter.property)
                if (!localStorageFilter) {
                    initialFilters.push(queryFilter)
                }
            }
        }
        else {
            for (let i = 0; i < initialLocalStorageFilters.length; i++) {
                const localStorageFilter = initialLocalStorageFilters[i]
                initialFilters.push(localStorageFilter)
            }
        }
        return initialFilters
    }

    const initialFilters = useMemo(getInitialFilters, [searchParams])

    const [filterables, setFilterables] = useState(null)
    const [filters, setFilters] = useState(initialFilters)
    const [hasFilters, setHasFilters] = useState(initialFilters.length > 0)
    const [isReset, setIsReset] = useState(false)
    const isFilteringOpenLocalStorageKey = `${camelizedEntityType}_${isBrowse ? "browse_" : ""}isFilteringOpen`
    const [isFilteringOpen, setIsFilteringOpen] = useLocalStorage({
        defaultValue: true,
        initialValue: true,
        key: isFilteringOpenLocalStorageKey
    })
    const filterablesCount = useFilterablesCounter(uiFilters)

    const setFilterable = property => {
        if (!property) {
            return
        }
        const camelizedProperty = app.camelize(property)
        for (let i = 0; i < filterables?.length; i++) {
            if (filterables[i].property === camelizedProperty) {
                return
            }
        }
        setFilterables(previousFilterables => {
            if (previousFilterables) {
                return [camelizedProperty, ...previousFilterables].filter((v, i, a) => a.indexOf(v) === i)
            }
            return [camelizedProperty]
        })
    }

    const setFilter = (property, value, operator) => {
        if (!property) {
            return
        }
        setIsReset(false)
        const warning = `Filter ${property}-${operator}-${value} does not have a value. It can not be set.`
        const camelizedProperty = app.camelize(property)
        setFilters(previousFilters => {
            let newFilters = previousFilters
            if (previousFilters && Array.isArray(previousFilters) && previousFilters.length > 0) {
                const otherFilters = previousFilters.filter((v, i) => v.property !== camelizedProperty)
                const thisFilter = previousFilters.find(i => i.property === camelizedProperty)
                if (thisFilter) {
                    if (value) {
                        thisFilter.value = value
                        newFilters = [...otherFilters, thisFilter]
                    } else {
                        newFilters = [...otherFilters]
                    }
                }
                else {
                    if (value) {
                        newFilters = [...otherFilters, {
                            property: camelizedProperty,
                            operator: operator,
                            value: value
                        }]
                    } else {
                        // console.warn(warning)
                        newFilters = [...otherFilters]
                    }
                }
            }
            else {
                if (value) {
                    newFilters = [{
                        property: camelizedProperty,
                        operator: operator,
                        value: value
                    }]
                } else {
                    // console.warn(warning)
                }
            }
            return newFilters
        })
    }

    const removeFilter = property => {
        setFilter(property, null)
    }

    const resetFilters = () => {
        setIsReset(true)
        setFilters([])
    }

    useEffect(() => {
        setHasFilters(filters.length > 0)
    }, [filters])

    return {
        filterables,
        filterablesCount,
        filters,
        hasFilters,
        initialFilters,
        isFilteringOpen,
        isReset,
        removeFilter,
        resetFilters,
        setFilter,
        setFilterable,
        setHasFilters,
        setIsFilteringOpen,
        uiFilters,
        usedFilters: filters,
    }
}

export default useFiltering
