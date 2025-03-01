import { useState, useEffect } from "react"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import OutlinedInput from "@mui/material/OutlinedInput"
import MenuItem from "@mui/material/MenuItem"
import InputAdornment from "@mui/material/InputAdornment"
import app, {
    camelize,
    filterOperator,
    get,
    t,
} from "App"
import {
    BrowseContext,
    DialogContext,
} from "Contexts"
import {
    useDebounce,
    useFilter,
    useMessage,
} from "Hooks"
import {
    Image,
    Progress,
} from "Panel"
import BrowserDialog from "../../Browse/BrowserDialog"
import BrowserIcons from "../../Browse/BrowserIcons"
import Filter from "./Filter"

const Browse = ({
    autocomplete,
    byGuid,
    byKey,
    choose,
    entityType,
    explicitFilters,
    image,
    loadFrom,
    onChange,
    placeholder,
    property,
    show,
    ...rest
}) => {

    const [progress, setProgress] = useState(false)
    const { error } = useMessage()
    const [items, setItems] = useState([])
    const [open, setOpen] = useState(false)
    const [selectedEntity, setSelectedEntity] = useState(null)
    const [search, setSearch] = useState("")
    const debouncedSearch = useDebounce(search)

    const {
        chosen,
        entity,
        id,
        initialFilter,
        isChanged,
        isDirty,
        isReset,
        label,
        removeFilter,
        setEntity,
        setIsDirty,
        shown,
    } = useFilter({
        choose,
        placeholder,
        property,
        selectedEntity,
        show,
        type: "browse",
        ...rest
    })

    const additionalProps = {}
    if (image && entity) {
        additionalProps.startAdornment = <InputAdornment
            className="me-2"
            position="start"
        >
            <Image
                className="w-8 aspect-square object-cover"
                source={image(entity)}
            />
        </InputAdornment>
    }

    const load = () => {
        setProgress(true)
        const camelizedEntityType = camelize(entityType)
        let url = `/${camelizedEntityType}/get/${initialFilter?.value}`
        if (byKey) {
            url = `/${camelizedEntityType}/getByKey?key=${initialFilter?.value}`
        }
        if (byGuid) {
            url = `/${camelizedEntityType}/getByGuid?Guid=${initialFilter?.value}`
        }
        if (loadFrom) {
            url = `/${loadFrom}?${property}=${initialFilter?.value}`
        }
        get(url)
            .then(data => {
                setEntity(data)
                setProgress(false)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    const loadItems = () => {
        setProgress(true)
        const camelizedEntityType = camelize(entityType)
        let url = `/${camelizedEntityType}/list?search=${debouncedSearch}`
        get(url)
            .then(data => {
                setItems(data.data)
                setProgress(false)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    useEffect(() => {
        if (!entity) {
            setSelectedEntity(null)
        }
    }, [entity])

    useEffect(() => {
        if (initialFilter?.value) {
            load()
        }
    }, [])

    useEffect(() => {
        if (!debouncedSearch) {
            return
        }
        loadItems()
    }, [debouncedSearch])

    useEffect(() => {
        if (isReset) {
            setSearch("")
        }
    }, [isReset])

    const renderInput = params => <TextField
        {...params}
        label={t(label)}
        InputProps={{
            ...additionalProps,
            ...params.InputProps,
            endAdornment: <>
                {
                    progress
                        ?
                        <Progress size={20} />
                        :
                        <BrowserIcons onCleared={() => {
                            removeFilter(property)
                            setSelectedEntity(null)
                        }} />
                }
            </>,
            style: {
                paddingLeft: "8px",
                paddingRight: "8px",
            }
        }}
        onBlur={() => {
            if (!isDirty) {
                setIsDirty(true)
            }
        }}
    />

    const onAutocompleteChange = (e, value) => {
        if (!isDirty) {
            setIsDirty(true)
            return
        }
        if (value) {
            setEntity(value)
            setSelectedEntity(value)
        }
    }

    const onAutocompleteOpen = e => {
        if (!items || items.length === 0) {
            loadItems()
        }
    }

    const renderOption = (props, option) => {
        const { key, ...rest } = props
        return <MenuItem
            key={option.id}
            value={choose(option)}
            {...rest}
        >
            {t(show(option))}
        </MenuItem>
    }

    const componentsProps = {
        clearIndicator: {
            style: { display: "none" },
        },
    }

    const getOptionLabel = option => {
        if (option) {
            return t(show(option)) || "-"
        }
        return ""
    }

    return <Filter
        hideLabel
        id={id}
        label={label}
    >
        <DialogContext.Provider
            value={{
                open,
                setOpen
            }}
        >
            <BrowseContext.Provider
                value={{
                    close: () => setOpen(false),
                    entityType,
                    explicitFilters,
                    onSelected: i => {
                        if (isDirty) {
                            setEntity(i)
                            if (onChange instanceof Function) {
                                onChange(choose(i))
                            }
                        }
                    },
                    selectedEntity,
                    setSelectedEntity,
                    small: true,
                    show,
                    ...rest
                }}
            >
                {open && <BrowserDialog />}
                <Autocomplete
                    componentsProps={componentsProps}
                    getOptionLabel={getOptionLabel}
                    loading={progress}
                    loadingText={t("InfraLoading")}
                    noOptionsText={t("InfraNoItemsFound")}
                    onChange={onAutocompleteChange}
                    onInputChange={(event, value) => setSearch(value)}
                    onOpen={onAutocompleteOpen}
                    options={items}
                    renderInput={renderInput}
                    renderOption={renderOption}
                    size="small"
                    value={items.find(i => choose(i) == entity || choose(i)?.toString() === initialFilter?.value?.toString()) || ""}
                />
            </BrowseContext.Provider>
        </DialogContext.Provider>
    </Filter>
}

export default Browse
