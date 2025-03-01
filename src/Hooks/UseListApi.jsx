import {
    useEffect,
    useState,
} from "react"
import { useSearchParams } from "react-router"
import app, {
    camelize,
    filterOperator,
    get,
} from "App"
import useMessage from "./UseMessage"
import useListFunctions from "./UseListFunctions"

const useListApi = ({
    all,
    camelizedEntityType,
    defaultPageSize,
    entityLoadingUrl,
    entityType,
    explicitFilters,
    filters,
    getFrom,
    ignoreUrl,
    isBrowse,
    isTree,
    notUpdatingQuery,
    pageNumber,
    pageNumberLocaleStorageKey,
    pageNumberQueryKey,
    pageSize,
    pageSizeLocaleStorageKey,
    pageSizeQueryKey,
    part,
    serializeSort,
    setPageNumber,
    sortLocalStorageKey,
    sortQueryKey,
    sorts,
    type,
}) => {

    const [searchParams] = useSearchParams()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [metadata, setMetadata] = useState({})
    const [relatedItems, setRelatedItems] = useState({})
    const [initialized, setInitialized] = useState(false)
    const { error } = useMessage()

    const {
        extractLocalStorageFilters,
        extractQueryStringFilters,
        getFilterLocalStorageKey,
    } = useListFunctions({
        entityType,
        isBrowse,
    })

    const setQuery = goToFirstPage => {
        if (notUpdatingQuery) {
            return
        }
        if (pageNumber > 1) {
            if (goToFirstPage) {
                searchParams.delete(pageNumberQueryKey)
            }
            else {
                searchParams.set(pageNumberQueryKey, pageNumber)
            }
        } else {
            searchParams.delete(pageNumberQueryKey)
        }
        if (pageSize === defaultPageSize) {
            searchParams.delete(pageSizeQueryKey)
        } else {
            searchParams.set(pageSizeQueryKey, pageSize)
        }
        for (let i = 0; i < filters.length; i++) {
            const filter = filters[i]
            if (filter.value) {
                searchParams.set(filter.property, `${filter.operator}_${filter.value}`)
            } else {
                searchParams.delete(filter.property)
            }
        }
        if (filters.length === 0) {
            searchParams.delete("ignoreStoredListParameters")
        }
        const queryFilters = extractQueryStringFilters()
        for (let i = 0; i < queryFilters.length; i++) {
            const filter = queryFilters[i]
            if (!filters.find(i => i.property?.toLowerCase() === filter.property?.toLowerCase())) {
                searchParams.delete(filter.property)
            }
        }
        if (sorts && sorts.length > 0) {
            const sort = sorts[0]
            const value = serializeSort(sort)
            searchParams.set(sortQueryKey, value)
        }
        else {
            searchParams.delete(sortQueryKey)
        }
        searchParams.sort()
        window.history.replaceState(null, "", searchParams.size > 0 ? "?" + searchParams.toString() : "")
    }

    const setLocalStorage = goToFirstPage => {
        const ignoreStoredListParameters = searchParams.get("ignoreStoredListParameters")
        if (ignoreStoredListParameters) {
            return []
        }
        if (pageNumber > 1) {
            if (goToFirstPage) {
                window.localStorage.removeItem(pageNumberLocaleStorageKey)
            }
            else {
                window.localStorage.setItem(pageNumberLocaleStorageKey, pageNumber)
            }
        } else {
            window.localStorage.removeItem(pageNumberLocaleStorageKey)
        }
        if (pageSize === defaultPageSize) {
            window.localStorage.removeItem(pageSizeLocaleStorageKey)
        } else {
            window.localStorage.setItem(pageSizeLocaleStorageKey, pageSize)
        }
        const localStorageFilters = extractLocalStorageFilters()
        for (let i = 0; i < localStorageFilters.length; i++) {
            const filter = localStorageFilters[i]
            window.localStorage.removeItem(getFilterLocalStorageKey({
                camelizedEntityType,
                isBrowse,
                property: filter.property,
            }))
        }
        for (let i = 0; i < filters.length; i++) {
            const filter = filters[i]
            if (filter.value) {
                window.localStorage.setItem(getFilterLocalStorageKey({
                    camelizedEntityType,
                    isBrowse,
                    property: filter.property,
                }), `${filter.operator}_${filter.value}`)
            }
        }

        if (sorts && sorts.length > 0) {
            const sort = sorts[0]
            const value = serializeSort(sort)
            window.localStorage.setItem(sortLocalStorageKey, value)
        }
        else {
            window.localStorage.removeItem(sortLocalStorageKey)
        }
    }

    const normalizeUrl = url => {
        if (url.indexOf("?") > -1) {
            url += "&"
        }
        else {
            url += "?"
        }
        return url
    }

    const load = goToFirstPage => {
        setLoading(true)
        let url = window.settings?.NodeApi
            ?
            `${camelize(part)}/${camelize(type)}/`
            :
            `${camelize(entityType)}/`
        if (isTree) {
            url += "tree"
        }
        else if (all) {
            url += "all"
        }
        else {
            url += `list`
        }
        if (getFrom) {
            url = getFrom
        }
        if (explicitFilters) {
            url = normalizeUrl(url)
            url += explicitFilters
        }
        if (pageNumber) {
            url = normalizeUrl(url)
            url += `pageNumber=${goToFirstPage ? 1 : pageNumber}`
        }
        if (pageSize) {
            url = normalizeUrl(url)
            url += `pageSize=${pageSize}`
        }
        if (filters) {
            url = normalizeUrl(url)
            const filtersQuery = filters
                .filter(i => i.value)
                .map(i => `${i.property}=${i.operator}_${i.value}`).join("&")
            url += filtersQuery
        }
        if (sorts && sorts.length > 0) {
            url = normalizeUrl(url)
            const sort = sorts[0]
            const value = `sort=${serializeSort(sort)}`
            url += value
        }
        if (!isBrowse && !ignoreUrl) {
            url = normalizeUrl(url)
            const currentQueryParams = Array.from(searchParams.entries())
            const toBeAdded = []
            for (let i = 0; i < currentQueryParams.length; i++) {
                const queryParam = currentQueryParams[i]
                const [key, value] = queryParam
                if (url.includes(`${key}=`)) {
                    continue
                }
                if (key === pageSizeQueryKey || key === pageNumberQueryKey) {
                    continue
                }
                if (Object.values(filterOperator).find(i => value.startsWith(i) && value.includes("_"))) {
                    continue
                }
                toBeAdded.push(queryParam)
            }
            url += toBeAdded.map(i => `${i[0]}=${i[1]}`).join("&")
        }
        url = url.replace("&&", "&")
        url = app.trim(url, "&")
        get(url).then(result => {
            let goToFirstPage = false
            if (!result) {
                return
            }
            if (isTree || all) {
                setData(result)
            }
            else {
                const {
                    data,
                    metadata,
                    relatedItems,
                } = result
                setData(data)
                setMetadata(metadata)
                setRelatedItems(relatedItems)
                if (metadata.totalCount > 0 && data.length === 0) {
                    goToFirstPage = true
                    setPageNumber(1)
                    load(true)
                    return
                }
            }
            setLoading(false)
            setInitialized(true)
            if (!isBrowse && !ignoreUrl) {
                setQuery(goToFirstPage)
            }
            setLocalStorage(goToFirstPage)
        }, e => {
            error(e)
            setLoading(false)
        })
    }

    const reload = entity => {
        load()
    }

    const reloadEntity = entity => {
        setEntityProgress(entity, true)
        let url = ""
        if (entityLoadingUrl instanceof Function) {
            url = entityLoadingUrl(entity)
        }
        else {
            if (window.settings?.NodeApi) {
                url = `${camelize(part)}/${camelize(type)}/get?id=${entity.id}`
            }
            else {
                url = `${camelize(entityType)}/get/${entity.id}`
            }
        }
        get(url)
            .then(result => {
                setEntityProgress(entity, false)
                setEntity(result)
            }, e => {
                setEntityProgress(entity, false)
                error(e)
            })
    }

    const setEntityActionProgress = (entity, progress) => {
        setData(data => {
            for (let i = 0; i < data.length; i++) {
                const item = data[i]
                if (item.id === entity.id) {
                    item.actionProgress = progress
                }
                if (item.relatedItems.hasChildren) {
                    setEntityActionProgressInChildren(item.relatedItems.children, entity, progress)
                }
            }
            return [...data]
        })
    }

    const setEntityActionProgressInChildren = (children, entity, progress) => {
        for (let i = 0; i < children.length; i++) {
            const item = children[i]
            if (item.id === entity?.id) {
                item.actionProgress = progress
            }
            if (item.relatedItems.hasChildren) {
                setEntityActionProgressInChildren(item.relatedItems.children, entity, progress)
            }
        }
    }

    const setEntityProgress = (entity, progress) => {
        setData(data => {
            for (let i = 0; i < data.length; i++) {
                const item = data[i]
                if (item.id === entity?.id) {
                    item.progress = progress
                }
                if (item.relatedItems.hasChildren) {
                    setEntityProgressInChildren(item.relatedItems.children, entity, progress)
                }
            }
            return [...data]
        })
    }

    const setEntityProgressInChildren = (children, entity, progress) => {
        for (let i = 0; i < children.length; i++) {
            const item = children[i]
            if (item.id === entity?.id) {
                item.progress = progress
            }
            if (item.relatedItems.hasChildren) {
                setEntityProgressInChildren(item.relatedItems.children, entity, progress)
            }
        }
    }

    const setEntity = entity => {

        const setEntityInChildren = (childEntities, entity) => {
            for (let i = 0; i < childEntities.length; i++) {
                if (childEntities[i].id === entity.id) {
                    childEntities[i] = entity
                }
                else if (childEntities[i].relatedItems?.hasChildren) {
                    setEntityInChildren(childEntities[i].relatedItems?.children, entity)
                }
            }
        }

        setData(data => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].id === entity.id) {
                    data[i] = entity
                }
                else if (data[i].relatedItems?.hasChildren) {
                    setEntityInChildren(data[i].relatedItems?.children, entity)
                }
            }
            return [...data]
        })
    }

    return {
        data,
        entities: data,
        hasData: metadata.hasData,
        initialized,
        load,
        loading,
        metadata,
        relatedItems,
        reload,
        reloadEntity,
        setEntity,
        setEntityActionProgress,
        setEntityProgress,
        setLoading,
    }
}

export default useListApi
