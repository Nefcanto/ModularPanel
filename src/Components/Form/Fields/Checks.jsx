import {
    useContext,
    useEffect,
    useState,
} from "react"
import Checkbox from "@mui/material/Checkbox"
import Collapse from "@mui/material/Collapse"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormGroup from "@mui/material/FormGroup"
import TextField from "@mui/material/TextField"
import { FormContext } from "Contexts"
import {
    get,
    t,
} from "App"
import { Progress } from "Panel"
import {
    useField,
    useMessage,
} from "Hooks"

const Checks = ({
    checkedItemsUrl,
    choose,
    hasSearch,
    hierarchical,
    itemKey,
    items,
    itemsUrl,
    property,
    searchMatch,
    set,
    show,
    vertical,
    ...rest
}) => {
    const [internalItems, setInternalItems] = useState(items)
    const [checkedItems, setCheckedItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)
    const [allItemsProgress, setAllItemsProgress] = useState(itemsUrl)
    const [checkedItemsProgress, setCheckedItemsProgress] = useState(checkedItemsUrl)
    const [search, setSearch] = useState("")
    const [filterChecked, setFilterChecked] = useState(false)
    const { error } = useMessage()
    const safeSearchMatch = searchMatch instanceof Function
        ?
        searchMatch
        :
        () => true

    const field = useField({
        doNotChangeOnEntityChange: true,
        property,
        type: "Checks",
        ...rest
    })

    const {
        formMode,
        mode,
    } = useContext(FormContext)

    const {
        chosenValue: chosenValues,
        isDirty,
        progress,
        setChosenValue,
        setDisplayValue,
        setIsDirty,
    } = field

    useEffect(() => {
        const onRunMethod = entityGuid => {
            if (entityGuid === itemKey) {
                loadItems()
                loadCheckedItems()
            }
        }
        setChosenValue([])
    }, [])

    useEffect(() => {
        loadItems()
        loadCheckedItems()
    }, [])

    useEffect(() => {
        setInternalItems(items)
    }, [items])

    const loadItems = () => {
        if (!itemsUrl) {
            return
        }
        setAllItemsProgress(true)
        get(itemsUrl)
            .then(data => {
                if (Array.isArray(data)) {
                    setInternalItems(data)
                }
                else if (data.data) {
                    setInternalItems(data.data)
                }
                else {
                    throw "Return value of the API is not well formatted"
                }
                setAllItemsProgress(false)
            }, e => {
                setAllItemsProgress(false)
                error(e)
            })
    }

    const loadCheckedItems = () => {
        if (!checkedItemsUrl) {
            return
        }
        if (mode == formMode.creation) {
            setCheckedItemsProgress(false)
            return
        }
        setCheckedItemsProgress(true)
        get(checkedItemsUrl)
            .then(data => {
                if (Array.isArray(data)) {
                    setCheckedItems(data)
                }
                else {
                    if (data.data) {
                        setCheckedItems(data.data)
                    }
                    else {
                        throw "Return value of the API is not well formatted"
                    }
                }
                setCheckedItemsProgress(false)
            }, e => {
                setCheckedItemsProgress(false)
                error(e)
            })
    }

    useEffect(() => {
        if (internalItems && internalItems.map && checkedItems && checkedItems.map) {
            let values = checkedItems.map(i => choose(i))
            setChosenValue(values)
            setDisplayValue(values)
        }
    }, [internalItems, checkedItems])

    const handleChange = (entity, isChecked) => {
        if (!isDirty) {
            setIsDirty(true)
        }
        if (!chosenValues) {
            return
        }
        let chosenValue = choose(entity)
        if (isChecked) {
            if (chosenValues.indexOf(chosenValue) > -1) {

            }
            else {
                chosenValues.push(chosenValue)
            }
        }
        else {
            if (chosenValues.indexOf(chosenValue) > -1) {
                chosenValues.splice(chosenValues.indexOf(chosenValue), 1)
            }
        }
        setChosenValue([...chosenValues])
        setDisplayValue([...chosenValues])
    }

    useEffect(() => {
        if (set) {
            set([...new Set(chosenValues)])
        }
    }, [chosenValues])

    const isChosen = entity => chosenValues?.indexOf(choose(entity)) > -1

    const searchNode = entity => {
        let nodeResult = safeSearchMatch(entity, search)
        entity.relatedItems.children?.forEach(child => nodeResult = nodeResult || searchNode(child, search))
        return nodeResult
    }

    const isNodeChosen = entity => {
        let nodeResult = isChosen(entity)
        entity.relatedItems.children?.forEach(child => nodeResult = nodeResult || isNodeChosen(child))
        return nodeResult
    }

    const checkVisibility = (entity, component) => {
        let visibility = true
        if (hasSearch && !searchNode(entity)) {
            visibility = false
        }
        const checkChosen = hierarchical ? isNodeChosen : isChosen
        if (filterChecked && !checkChosen(entity)) {
            visibility = false
        }
        if (visibility === true) {
            return component
        }
        return null
    }

    const flatChecks = <div>
        {
            internalItems && internalItems.length > 0
                ?
                <FormGroup className={vertical ? "flex flex-col" : "grid sm:grid-cols-2 lg:grid-cols-3"}>
                    {
                        internalItems.map(entity => {
                            const check = <FormControlLabel
                                checked={isChosen(entity) || false}
                                className="select-none break-all"
                                control={<Checkbox
                                    disabled={progress}
                                />}
                                key={entity.id}
                                label={<span>{show(entity)}</span>}
                                onChange={(e) => handleChange(entity, e.target.checked)}
                            />
                            return checkVisibility(entity, check)
                        })
                    }
                </FormGroup>
                :
                <div className="dark:text-gray-400">{t("InfraNoItemsFound")}</div>
        }
    </div>

    const node = entity => <li
        key={entity.id}
        className="border-s border-dashed border-slate-400"
    >
        <FormControlLabel
            checked={isChosen(entity)}
            className="select-none break-all"
            control={<Checkbox
                disabled={progress}
            />}
            label={<span>{show(entity)}</span>}
            onChange={(e) => handleChange(entity, e.target.checked)}
        />
        <Collapse in={entity.expanded}>
            {
                entity.relatedItems?.children?.length > 0 &&
                <ul className="ms-16">
                    {
                        entity.relatedItems.children.map(entity => {
                            entity.expanded = true
                            return checkVisibility(entity, node(entity))
                        })
                    }
                </ul>
            }
        </Collapse>
    </li>

    const hierarchicalChecks = <div className="">
        {
            internalItems && internalItems.length > 0
                ?
                <FormGroup className={(vertical || hierarchical) ? "flex flex-col" : "grid sm:grid-cols-2 lg:grid-cols-3"}>
                    <ul className="defaultStyle">
                        {
                            internalItems.map(entity => {
                                entity.expanded = true
                                return checkVisibility(entity, node(entity))
                            })
                        }
                    </ul>
                </FormGroup>
                :
                <div className="dark:text-gray-400">{t("InfraNoItemsFound")}</div>
        }
    </div>

    const addSearch = control => <div className="pt-4">
        <TextField
            className="mb-4"
            disabled={progress}
            fullWidth
            label={t("InfraSearch")}
            onChange={e => setSearch(e.target.value)}
            size="small"
            value={search}
            variant="outlined"
        />
        {control}
    </div>

    const addCheckedFilter = control => <div>
        <FormControlLabel
            checked={filterChecked}
            className="select-none"
            control={<Checkbox
                disabled={progress}
            />}
            label={<span>{t("InfraChosenItems")}</span>}
            onChange={e => setFilterChecked(e.target.checked)}
        />
        {control}
    </div>

    return <div>
        {
            (allItemsProgress || checkedItemsProgress)
                ?
                <Progress />
                :
                hierarchical
                    ?
                    hasSearch
                        ?
                        addCheckedFilter(addSearch(hierarchicalChecks))
                        :
                        hierarchicalChecks
                    :
                    hasSearch
                        ?
                        addCheckedFilter(addSearch(flatChecks))
                        :
                        flatChecks
        }
    </div>
}

export default Checks
