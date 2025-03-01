import React, { useState, useEffect } from "react"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputAdornment from "@mui/material/InputAdornment"
import app, {
    filterOperator,
    get,
} from "App"
import {
    BrowseContext,
    DialogContext,
} from "Contexts"
import {
    useFilter,
    useMessage,
} from "Hooks"
import {
    Image,
    Progress,
} from "Panel"
import BrowserDialog from "../../Browse/BrowserDialog"
import BrowserIcons from "../../Browse/BrowserIcons"
import Filter from "./Filters/Filter"

const Browse = ({
    byKey,
    choose,
    entityType,
    explicitFilters,
    image,
    onChange,
    placeholder,
    property,
    show,
    ...rest
}) => {

    const [progress, setProgress] = useState(false)
    const { error } = useMessage()

    const [open, setOpen] = useState(false)
    const [selectedEntity, setSelectedEntity] = useState(null)

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
                source={image(entity)}
                className="w-8 aspect-square object-cover"
            />
        </InputAdornment>
    }

    const load = () => {
        setProgress(true)
        const camelizedEntityType = app.camelize(entityType)
        let url = `/${camelizedEntityType}/get/${initialFilter?.value}`
        if (byKey) {
            url = `/${camelizedEntityType}/getByKey?key=${initialFilter?.value}`
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

    return <Filter
        label={label}
        id={id}
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
                    ...rest
                }}
            >
                {open && <BrowserDialog />}
                <OutlinedInput
                    {...additionalProps}
                    endAdornment={
                        progress
                            ?
                            <Progress size={20} />
                            :
                            <BrowserIcons onCleared={() => removeFilter(property)} />
                    }
                    label={app.t(label)}
                    onClick={() => {
                        if (!isDirty) {
                            setIsDirty(true)
                        }
                    }}
                    onKeyDown={() => {
                        if (!isDirty) {
                            setIsDirty(true)
                        }
                    }}
                    readOnly
                    size="small"
                    value={shown}
                />
            </BrowseContext.Provider>
        </DialogContext.Provider>
    </Filter>
}

export default Browse
