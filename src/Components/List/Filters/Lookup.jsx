import {
    useEffect,
    useState,
} from "react"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import {
    camelize,
    get,
    t,
} from "App"
import {
    useFilter,
    useMessage,
} from "Hooks"
import Filter from "./Filter"
import Progress from "../../Progress"

const Lookup = ({
    autocomplete,
    choose,
    property,
    display,
    entityType,
    onChange,
    placeholder,
    query,
    ...rest
}) => {

    const [loading, setLoading] = useState()
    const [lookupItems, setLookupItems] = useState([])
    const params = new URLSearchParams()
    if (query) {
        for (const [key, value] of Object.entries(query)) {
            params.append(key, value)
        }
    }
    params.sort()

    const { error } = useMessage()

    const load = () => {
        setLoading(true)
        get(`/${camelize(entityType)}/all?${params.toString()}`).then(data => {
            setLookupItems(data)
            setLoading(false)
        }, e => {
            error(e)
            setLoading(false)
        })
    }

    useEffect(() => {
        if (lookupItems.length !== 0) {
            return
        }
        load()
    }, [entityType])

    useEffect(() => {
        load()
    }, [query])

    const {
        entity,
        id,
        initialFilter,
        isDirty,
        isReset,
        label,
        setEntity,
        setIsDirty,
    } = useFilter({
        choose: i => i,
        property,
        placeholder,
        show: i => i,
        type: "select",
        ...rest
    })

    const extraParams = {}
    if (autocomplete) {
        extraParams.hideLabel = true
    }

    window.initialFilter = initialFilter
    window.entity = entity
    window.lookupItems = lookupItems
    window.choose = choose

    return <Filter
        id={id}
        label={label}
        {...extraParams}
    >
        {
            autocomplete
                ?
                <Autocomplete
                    getOptionLabel={option => t(display(option)) || ""}
                    noOptionsText={t("InfraNoItemsFound")}
                    onChange={(e, value) => {
                        if (!isDirty) {
                            setIsDirty(true)
                        }
                        if (value) {
                            setEntity(e.target.value)
                            if (onChange instanceof Function) {
                                onChange(value)
                            }
                        }
                    }}
                    options={lookupItems}
                    renderInput={(params) => <TextField
                        {...params}
                        label={t(label)}
                        onBlur={() => {
                            if (!isDirty) {
                                setIsDirty(true)
                            }
                        }}
                    />
                    }
                    renderOption={(props, option) => {
                        const { key, ...rest } = props
                        return <MenuItem
                            key={option.id}
                            value={choose(option)}
                            {...rest}
                        >
                            {t(display(option))}
                        </MenuItem>
                    }}
                    componentsProps={{
                        clearIndicator: {
                            style: { display: "none" },
                        },
                    }}
                    size="small"
                    value={lookupItems.find(i => choose(i) == entity || choose(i)?.toString() === initialFilter?.value?.toString()) || ""}
                />
                :
                <Select
                    fullWidth
                    label={t(label)}
                    onChange={e => {
                        if (!isDirty) {
                            setIsDirty(true)
                        }
                        setEntity(e.target.value)
                        if (onChange instanceof Function) {
                            onChange(e.target.value)
                        }
                    }}
                    onClick={e => {
                        if (!isDirty) {
                            setIsDirty(true)
                        }
                    }}
                    size="small"
                    value={entity || ""}
                >
                    {
                        loading
                            ?
                            <Progress />
                            :
                            (
                                lookupItems?.map(entity =>
                                    <MenuItem
                                        key={entity.id}
                                        value={choose(entity)}
                                    >
                                        {t(display(entity))}
                                    </MenuItem>
                                )
                            )
                    }
                </Select>
        }
    </Filter>
}

export default Lookup
