import {
    useContext,
    useEffect,
    useState,
} from "react"
import { useSearchParams } from "react-router"
import {
    camelize,
    parseQueryAsArray,
    pascalize,
} from "App"
import { PanelContext } from "Contexts"
import useLocalStorage from "./UseLocalStorage"
import useListApi from "./UseListApi"
import useEntityType from "./UseEntityType"
import useSorting from "./UseSorting"
import useFiltering from "./UseFiltering"
import usePageNumber from "./UsePageNumber"
import usePageSize from "./UsePageSize"

const useList = props => {

    const [searchParams] = useSearchParams()
    const [initialized, setInitialized] = useState(false)
    const {
        locale,
        tenant,
    } = useContext(PanelContext)

    const {
        card,
        entityType,
        graph,
        headers,
        ignoreUrl,
        isBrowse,
        isTree,
        module,
        notUpdatingQuery,
        restoreScrollPosition,
        row,
    } = props

    const pascalizedModule = pascalize(module)
    const camelizedModule = camelize(module)
    const pascalizedEntityType = pascalize(entityType)
    const camelizedEntityType = camelize(entityType)

    const [selectedEntities, setSelectedEntities] = useState([])
    const [state, setState] = useLocalStorage({
        defaultValue: "",
        initialValue: "",
        key: `${camelizedEntityType}_state`
    })
    const [scrollPosition, setScrollPosition] = useLocalStorage({
        defaultValue: 0,
        initialValue: 0,
        key: `${camelizedEntityType}_scrollPosition`
    })
    const [viewStyle, setViewStyle] = useLocalStorage({
        defaultValue: "tabular",
        initialValue: "tabular",
        key: `${camelizedEntityType}_viewStyle`
    })
    const tabular = headers && row instanceof Function
    const multiView = (card ? 1 : 0) + (tabular ? 1 : 0)
    let viewToggle = multiView > 1
    const isTable = (viewToggle && viewStyle === "tabular") || (!isTree && !card && !graph && tabular)
    if (isTable === undefined) {
        window.viewToggle = viewToggle
        window.viewStyle = viewStyle
        window.isTree = isTree
        window.card = card
        window.headers = headers
        window.row = row
    }

    const {
        localStorageKey: pageNumberLocaleStorageKey,
        pageNumber,
        queryKey: pageNumberQueryKey,
        setPageNumber,
    } = usePageNumber({
        camelizedEntityType,
        ...props,
    })

    const {
        localStorageKey: pageSizeLocaleStorageKey,
        pageSize,
        queryKey: pageSizeQueryKey,
        setPageSize,
    } = usePageSize({
        camelizedEntityType,
        ...props,
    })

    const filtering = useFiltering({
        ...props,
        camelizedEntityType,
    })
    const {
        filterables,
        filterablesCount,
        filters,
        initialFilters,
    } = filtering

    const sorting = useSorting({
        ...props,
        camelizedEntityType,
    })
    const {
        localStorageKey: sortLocalStorageKey,
        queryKey: sortQueryKey,
        serializeSort,
        sorts,
    } = sorting

    const listApi = useListApi({
        ...props,
        camelizedEntityType,
        filters,
        pageNumber,
        pageNumberLocaleStorageKey,
        pageNumberQueryKey,
        pageSize,
        pageSizeLocaleStorageKey,
        pageSizeQueryKey,
        serializeSort,
        setPageNumber,
        sortLocalStorageKey,
        sortQueryKey,
        sorts,
    })
    const {
        data,
        hasData,
        load,
        reload,
        initialized: listApiInitialized
    } = listApi

    // console.table({
    //     [camelizedEntityType]: {
    //         filterables,
    //         filterablesCount,
    //         filters,
    //         hasData,
    //         initialFilters,
    //         initialized,
    //         pageNumber,
    //         pageSize,
    //         sorts,
    //     }
    // })

    const usedEntityType = useEntityType({ data })
    const {

    } = usedEntityType

    const pagination = {
        pageNumber,
        pageSize,
        setPageNumber,
        setPageSize,
    }

    useEffect(() => {
        reload()
    }, [locale, tenant])

    useEffect(() => {
        if (listApiInitialized) {
            setInitialized(true)
        }
    }, [listApiInitialized])

    useEffect(() => {
        if (initialized) {
            reload()
        }
    }, [pageNumber])

    useEffect(() => {
        if (initialized) {
            if (pageNumber != 1) {
                setPageNumber(1)
            }
            else {
                reload()
            }
        }
    }, [pageSize])

    useEffect(() => {
        if (initialized) {
            if (!hasData && pageNumber > 1) {
                setPageNumber(1)
            }
        }
    }, [hasData])

    useEffect(() => {
        if (!restoreScrollPosition) {
            return
        }
        const handleScroll = () => {
            setScrollPosition(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll)

        const cleanUp = () => {
            window.removeEventListener("scroll", handleScroll)
        }

        return cleanUp
    }, [])

    useEffect(() => {
        let queryParameters = parseQueryAsArray()
        let queryFilters = queryParameters.filter(i => {
            if (filterables && filterables.filter) {
                const result = filterables.filter(x => x && x.toLowerCase && i.key && i.key.toLowerCase && x.toLowerCase() === i.key?.toLowerCase())
                return result ? result.length > 0 : false
            }
            return false
        })
        const log = {
            filterables: {
                value: JSON.stringify(filterables)
            },
            filterablesCount: {
                value: filterablesCount
            },
            queryParameters: {
                value: JSON.stringify(queryParameters)
            },
            queryFilters: {
                value: JSON.stringify(queryFilters)
            },
            filters: {
                value: JSON.stringify(filters)
            },
            sorts: {
                value: JSON.stringify(sorts)
            },
            pageSize: {
                value: pageSize
            },
            pageNumber: {
                value: pageNumber
            }
        }
        window.filters = filters
        // console.table(log)
        if (filterablesCount === 0) {
            load()
        }
        else {
            if (filterables && filterables.length === filterablesCount) {
                load()
            }
        }

    }, [filterables, sorts, pageNumber])

    useEffect(() => {
        if (initialized) {
            if (pageNumber != 1) {
                setPageNumber(1)
            }
            else {
                reload()
            }
        }
    }, [filters])

    useEffect(() => {
        if (initialized) {
            reload()
        }
    }, [sorts])

    useEffect(() => {
        if (initialized) {
            reload()
        }
    }, [searchParams])

    const selectEntity = id => {
        if (!id) {
            return
        }
        if (selectedEntities.indexOf(id) > -1) {
            return
        }
        setSelectedEntities(previousSelectedEntities => {
            const all = [id, ...previousSelectedEntities]
            const unique = [...new Set(all)].sort()
            return unique
        })
    }

    const selectEntities = entities => {
        if (!entities || entities.length === 0) {
            return
        }
        if (!entities[0].id) {
            return
        }
        setSelectedEntities(previousSelectedEntities => {
            let newItems = entities.map(i => i.id)
            const all = [...previousSelectedEntities, ...newItems]
            const unique = [...new Set(all)].sort()
            return unique
        })
    }

    const deselectEntity = id => {
        if (!id) {
            return
        }
        if (selectedEntities.indexOf(id) === -1) {
            return
        }
        setSelectedEntities(previousSelectedEntities => {
            selectedEntities.splice(selectedEntities.indexOf(id), 1)
            return [...selectedEntities]
        })
    }

    const deselectEntities = entities => {
        if (!entities || entities.length === 0) {
            return
        }
        if (!entities[0].id) {
            return
        }
        setSelectedEntities(previousSelectedEntities => {
            let entitiesToBeDeleted = entities.map(i => i.id)

            return previousSelectedEntities.filter(i => !entitiesToBeDeleted.includes(i))
        })
    }

    const toggleState = newState => {
        if (newState === state) {
            setState("")
        }
        else {
            setState(newState)
        }
    }

    return {
        ...props,
        camelizedEntityType,
        camelizedModule,
        deselectEntities,
        deselectEntity,
        isTable,
        pascalizedEntityType,
        pascalizedModule,
        selectedEntities,
        selectEntities,
        selectEntity,
        setViewStyle,
        viewStyle,
        viewToggle,
        state,
        setState,
        toggleState,
        ...filtering,
        ...sorting,
        ...usedEntityType,
        ...listApi,
        ...pagination,
    }
}

export default useList
