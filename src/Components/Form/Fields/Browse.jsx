import {
    useContext,
    useEffect,
    useState,
} from "react"
import OutlinedInput from "@mui/material/OutlinedInput"
import {
    camelize,
    get,
    t,
} from "App"
import {
    BrowseContext,
    DialogContext,
    FormContext,
} from "Contexts"
import { useMessage } from "Hooks"
import { useField } from "Hooks"
import BrowserDialog from "../../Browse/BrowserDialog"
import BrowserIcons from "../../Browse/BrowserIcons"
import Field from "./Field"

const Browse = ({
    byGuid,
    byKey,
    choose,
    disableInEdit,
    entityType,
    identifyingProperty,
    isTree,
    list,
    onChange,
    show,
    ...rest
}) => {

    const [open, setOpen] = useState(false)
    const [selectedEntity, setSelectedEntity] = useState(null)
    const [loading, setLoading] = useState(false)

    const { error } = useMessage()

    const {
        currentEntity,
        formMode,
        mode,
    } = useContext(FormContext)

    const field = useField({
        choose,
        entityType,
        list,
        show,
        type: "Browse",
        ...rest
    })

    const internalChoose = choose || (entity => entity.id)

    const {
        chosenValue,
        displayValue,
        isDirty,
        label,
        progress,
        setChosenValue,
        setDisplayValue,
        setIsDirty,
    } = field

    useEffect(() => {
        if (selectedEntity) {
            return
        }
        if (!displayValue && !chosenValue) {
            return
        }
        if (mode == formMode.edition) {
            let identifyingValue = displayValue
            if (identifyingProperty) {
                identifyingValue = currentEntity[identifyingProperty]
            }
            setLoading(true)
            const camelizedEntityType = camelize(entityType)
            let url = `/${camelizedEntityType}/get/${identifyingValue}`
            if (byKey) {
                url = `/${camelizedEntityType}/getByKey?key=${identifyingValue}`
            }
            if (byGuid) {
                url = `/${camelizedEntityType}/getByGuid?Guid=${identifyingValue}`
            }
            get(url)
                .then(entity => {
                    setSelectedEntity(entity)
                    setChosenValue(internalChoose(entity))
                    setDisplayValue(show(entity))
                    setLoading(false)

                }, e => {
                    setLoading(false)
                    error(e)
                })
        }

    }, [displayValue, chosenValue, selectedEntity])

    useEffect(() => {
        if (mode == formMode.edition) {
            if (selectedEntity) {
                setDisplayValue(show(selectedEntity))
            }
        }
    }, [mode, formMode, selectedEntity])

    return <Field
        {...field}
        {...rest}
        loading={loading}
    >

        {
            disableInEdit && mode == formMode.edition
                ?
                <OutlinedInput
                    disabled
                    label={t(label)}
                    readOnly
                    value={() => {
                        return displayValue || ""
                    }}
                />
                :
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
                            isTree,
                            list,
                            onSelected: entity => {
                                if (entity) {
                                    setChosenValue(internalChoose(entity))
                                    setDisplayValue(show(entity))
                                    if (onChange instanceof Function) {
                                        onChange(internalChoose(entity), entity)
                                    }
                                }
                                setIsDirty(true)
                            },
                            progress,
                            selectedEntity,
                            setSelectedEntity,
                            small: true,
                            show,
                            ...rest
                        }}
                    >
                        {open && <BrowserDialog />}
                        <OutlinedInput
                            disabled={progress}
                            endAdornment={<BrowserIcons
                                onCleared={() => {
                                    setChosenValue("")
                                    setDisplayValue("")
                                    setSelectedEntity(null)
                                    if (onChange instanceof Function) {
                                        onChange("", null)
                                    }
                                    setIsDirty(true)
                                }}
                            />}
                            label={t(label)}
                            onBlur={() => {
                                if (!isDirty) {
                                    setIsDirty(true)
                                }
                            }}
                            readOnly
                            value={displayValue || ""}
                        />
                    </BrowseContext.Provider>
                </DialogContext.Provider>
        }
    </Field>
}

export default Browse
