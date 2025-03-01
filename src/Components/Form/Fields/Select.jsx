import {
    useContext,
    useEffect,
    useState,
} from "react"
import MenuItem from "@mui/material/MenuItem"
import Chip from "@mui/material/Chip"
import MuiSelect from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import InputAdornment from "@mui/material/InputAdornment"
import Box from "@mui/material/Box"
import { t } from "App"
import {
    FieldContext,
    FormContext,
} from "Contexts"
import { useField } from "Hooks"
import Field from "./Field"

const Select = ({
    autocomplete,
    choose,
    csv,
    display,
    hasEmpty,
    loadInitialValue,
    multi,
    onChange,
    options,
    refElement,
    ...rest
}) => {

    if (rest.label) {
        throw "Do not use label. Use placeholder"
    }

    const { currentEntity } = useContext(FormContext)
    const { forGranularSelection } = useContext(FieldContext) || {}
    const [selectedItems, setSelectedItems] = useState([])
    const [chosenValueObjectItems, setChosenValueObjectItems] = useState([])
    const [pendingValue, setPendingValue] = useState(null);

    const internalIsMulti = !forGranularSelection && multi

    const field = useField({
        initialValue: rest.initialValue || (internalIsMulti ? [] : ""),
        type: "Select",
        ...rest
    })

    const {
        chosenValue,
        displayValue,
        id,
        initialValue,
        isDirty,
        isInsideTable,
        label,
        programmaticChange,
        progress,
        resetField,
        setChosenValue,
        setDisplayValue,
        setInitialValue,
        setIsDirty,
    } = field

    useEffect(() => {
        if (internalIsMulti) {
            setChosenValueObjectItems(
                options?.map(option => {
                    return {
                        id: option.id,
                        value: choose(option),
                        label: display(option)
                    }
                })
            )
        }
    }, [options])

    useEffect(() => {
        if (currentEntity && internalIsMulti && initialValue) {
            setSelectedItems(
                chosenValueObjectItems.filter(i =>
                    initialValue?.includes(i.value)
                )
            )
        }
    }, [initialValue, chosenValueObjectItems])

    useEffect(() => {
        if (currentEntity) {
            typeof loadInitialValue == "function" && loadInitialValue({
                entity: currentEntity,
                setChosenValue,
                setDisplayValue,
                setInitialValue
            })
        }
    }, [currentEntity])

    useEffect(() => {
        if (csv && initialValue && initialValue?.split) {
            const csvToArray = initialValue?.split(",").map(item => item.trim())
            setInitialValue(csvToArray)
        }
    }, [csv, initialValue])

    useEffect(() => {
        if (isDirty && pendingValue !== null) {
            if (autocomplete) {
                setForAutoComplete(pendingValue)
            }
            else {
                setForSelect(pendingValue)
            }
            setPendingValue(null);
        }
    }, [isDirty, pendingValue])

    useEffect(() => {
        if (onChange instanceof Function) {
            const chosenEntity = options.find(i => choose(i) == chosenValue)
            onChange(chosenValue || "", chosenEntity)
        }
    }, [chosenValue])

    const setForAutoComplete = value => {
        if (value) {
            setDisplayValue(t(display(value)))
            setChosenValue(choose(value))
        }
        else {
            setDisplayValue("")
            setChosenValue("")
        }
    }

    const handleAutocompleteChange = (e, value) => {
        if (programmaticChange) {
            return
        }
        if (!isDirty) {
            setIsDirty(true)
            setPendingValue(value);
        }
        else {
            setForAutoComplete(value)
        }
    }

    const handleSelectChange = newValue => {
        if (programmaticChange) {
            return
        }
        if (!isDirty) {
            setIsDirty(true)
            setPendingValue(newValue);
        }
        else {
            setForSelect(newValue)
        }
    }

    const setForSelect = newValue => {
        if (internalIsMulti) {
            const uniqueValues = newValue.filter(value => {
                const existingIdenticalValuesCount = newValue.filter(item => item.value == value.value).length
                const isAlreadySelected = existingIdenticalValuesCount > 1
                if (!isAlreadySelected) {
                    return true
                }
                return false
            })

            setSelectedItems(uniqueValues)
            setChosenValue(uniqueValues.map(item => item.value))

            if (csv) {
                const csvString = uniqueValues.map(item => item.value).join(",")
                setDisplayValue(csvString)
                setChosenValue(csvString)
            }

        }
        else {
            setDisplayValue(newValue)
            setChosenValue(newValue)
        }
    }

    const commonProps = {
        disabled: progress
    }
    const commonSelectProps = {
        ...commonProps,
        label: t(label),
        onChange: e => handleSelectChange(e.target.value),
        size: isInsideTable ? "small" : ""
    }
    const commonAutoCompleteProps = {
        ...commonProps
    }

    const extraParams = {}
    if (autocomplete) {
        extraParams.hideLabel = true
    }

    return <Field
        {...field}
        {...rest}
        {...extraParams}
    >
        {
            internalIsMulti
                ?
                autocomplete
                    ?
                    <div>auto complete and multi</div>
                    :
                    <MuiSelect
                        {...commonSelectProps}
                        multiple
                        renderValue={selected => (
                            <Box sx={
                                {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 0.5
                                }}
                            >
                                {selected.map(item => (
                                    <Chip
                                        key={item.value}
                                        label={item.label}
                                    />
                                ))}
                            </Box>
                        )}
                        value={selectedItems}
                    >
                        {
                            chosenValueObjectItems.map(option => <MenuItem
                                key={option.id}
                                value={option}
                            >
                                {option.label}
                            </MenuItem>)
                        }
                    </MuiSelect>
                :
                autocomplete
                    ?
                    <Autocomplete
                        {...commonProps}
                        getOptionLabel={(option) => t(display(option)) || ""}
                        noOptionsText={t("InfraNoItemsFound")}
                        onChange={handleAutocompleteChange}
                        options={options}
                        renderInput={(params) => <TextField
                            {...params}
                            endAdornment={
                                <InputAdornment position="end">
                                    Hi
                                </InputAdornment>
                            }
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
                                key={key}
                                value={choose(option)}
                                {...rest}
                            >
                                {t(display(option))}
                            </MenuItem>
                        }}
                        size={isInsideTable ? "small" : ""}
                        value={
                            isDirty
                                ?
                                options?.find(i => choose(i) == chosenValue) || ""
                                :
                                options?.find(i => choose(i)?.toString() === initialValue?.toString())
                        }
                    />
                    :
                    <MuiSelect
                        {...commonSelectProps}
                        onBlur={() => {
                            if (!isDirty) {
                                setIsDirty(true)
                            }
                        }}
                        value={chosenValue || ""}
                    >
                        {
                            hasEmpty
                                ?
                                <MenuItem value="">
                                    <em>{t("InfraPleaseChoose")}</em>
                                </MenuItem>
                                :
                                null
                        }
                        {
                            options.map(option => <MenuItem
                                key={option.id}
                                value={choose(option)}
                            >
                                {t(display(option))}
                            </MenuItem>)
                        }
                    </MuiSelect>
        }
    </Field>
}

export default Select
