import app, { filterOperator } from "App"
import {
    FilterContext,
    ListContext,
} from "Contexts"
import {
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react"
import { useSearchParams } from "react-router"
import useListFunctions from "./UseListFunctions"

const useFilter = ({
    choose,
    operator,
    placeholder,
    property,
    show,
    type,
}) => {

    let internalProperty = ((useContext(FilterContext) || {})).property || property

    const [searchParams] = useSearchParams()
    const camelizedProperty = app.camelize(internalProperty)

    let {
        camelizedEntityType,
        entityType,
        isBrowse,
        isReset,
        removeFilter,
        setFilter,
        setFilterable,
        usedFilters,
    } = useContext(ListContext)

    const {
        extractFilter,
    } = useListFunctions({
        entityType,
        isBrowse,
    })

    const getInitialFilter = () => {
        const initialFilter = extractFilter(camelizedProperty)
        return initialFilter
    }
    const initialFilter = useMemo(getInitialFilter, [searchParams])

    const [id, setId] = useState()
    const [entity, setEntity] = useState(null)
    const [shown, setShown] = useState("")
    const [chosen, setChosen] = useState("")
    const [isDirty, setIsDirty] = useState(false)
    const [isChanged, setIsChanged] = useState(false)
    const label = placeholder || property

    useEffect(() => {
        if (isDirty) {
            setFilter(internalProperty, chosen, operator || filterOperator.equalTo)
            setIsChanged(chosen !== initialFilter?.value)
        }
    }, [chosen])

    useEffect(() => {
        if (entity) {
            setShown(show(entity))
            setChosen(choose(entity))
        }
        else {
            setShown("")
            setChosen("")
        }
    }, [entity])

    useEffect(() => {
        if (!usedFilters || usedFilters.length === 0) {
            setEntity(null)
        }
    }, [usedFilters])

    const internalRemoveFilter = internalProperty => {
        setEntity(null)
    }

    return {
        camelizedEntityType,
        camelizedProperty,
        chosen,
        entity,
        entityType,
        id,
        initialFilter,
        isChanged,
        isDirty,
        isReset,
        label,
        removeFilter: internalRemoveFilter,
        setChosen,
        setEntity,
        setIsDirty,
        setShown,
        shown,
    }
}

export default useFilter
