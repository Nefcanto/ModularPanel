import {
    useContext,
    useEffect,
    useState,
} from "react"
import {
    camelize,
    ensure,
    get,
} from "App"
import { FormContext } from "Contexts"
import {
    useDeepCompareEffect,
    useMessage,
} from "Hooks"

const useLookup = ({
    choose,
    display,
    entityType,
    loadItemsUrl,
    onChange,
    options,
    query,
    ...rest
}) => {

    ensure([entityType])

    const [loading, setLoading] = useState(true)
    const [lookupItems, setLookupItems] = useState(options ?? [])
    const [isSingleItem, setIsSingleItem] = useState()
    const { isInsideTable } = useContext(FormContext)
    const itemsProperty = `${entityType}Items`
    const loadingProperty = `${entityType}ItemsAreLoading`

    const params = new URLSearchParams()
    if (query) {
        for (const [key, value] of Object.entries(query)) {
            params.append(key, value)
        }
    }
    params.sort()

    const { error } = useMessage()

    const setConditionalLoading = state => {
        if (isInsideTable) {
            window[loadingProperty] = state
        }
        else {
            setLoading(state)
        }
    }

    const loadFromApi = () => {
        setConditionalLoading(true)
        let url = `/${camelize(entityType)}/all?${params.toString()}`
        if (loadItemsUrl) {
            url = loadItemsUrl
        }
        get(url)
            .then(data => {
                const filteredData = data
                    .filter(i => choose(i) && display(i))
                setLookupItems(filteredData)
                if (isInsideTable) {
                    window[itemsProperty] = filteredData
                }
                setConditionalLoading(false)
            }, e => {
                error(e)
                setConditionalLoading(false)
            })
    }

    const waitForData = () => {
        console.log("waiting for the other API call ...")
        setTimeout(() => {
            if (window[itemsProperty]) {
                setLookupItems(window[itemsProperty])
            }
            else {
                waitForData()
            }
        }, 1000)
    }

    const load = () => {
        if (isInsideTable) {
            if (window[itemsProperty]) {
                setLookupItems(window[itemsProperty])
            }
            else {
                if (window[loadingProperty] === true) {
                    waitForData()
                }
                else {
                    loadFromApi()
                }
            }
        }
        else {
            loadFromApi()
        }
    }

    useEffect(() => {
        const isSingle = lookupItems && lookupItems.length && lookupItems.length === 1
        setIsSingleItem(isSingle)
    }, [lookupItems])

    useEffect(() => {
        if (isSingleItem) {
            if (onChange instanceof Function) {
                const item = lookupItems[0]
                onChange(choose(item), item)
            }
        }
    }, [isSingleItem])

    useEffect(() => {
        if (lookupItems.length !== 0) {
            return
        }
        load()
        return () => {
            delete window[itemsProperty]
        }
    }, [entityType])

    useDeepCompareEffect(() => {
        if (query) {
            loadFromApi()
        }
    }, [query])

    return {
        choose,
        display,
        isInsideTable,
        isSingleItem,
        loading: isInsideTable ? window[loadingProperty] : loading,
        lookupItems,
        onChange,
        options: lookupItems,
        singleItemValue: isSingleItem ? choose(lookupItems[0]) : null,
        ...rest,
    }
}

export default useLookup
