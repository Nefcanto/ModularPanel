import {
    useEffect,
    useState
} from "react"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputAdornment from "@mui/material/InputAdornment"
import {
    isSomething,
    t,
} from "App"
import {
    useDebounce,
    useField,
} from "Hooks"
import Field from "./Field"
import HolismIcon from "../../HolismIcon"

const Text = ({
    currentValue,
    endAdornmentText,
    initialValue,
    onChange,
    onDebouncedChange,
    placeholder,
    refElement,
    regex,
    regexError,
    startIcon,
    type,
    validate,
    ...rest
}) => {

    const textValidate = ({ displayValue }) => {
        if (validate && typeof validate === "function") {
            return validate(displayValue)
        }
        if (regex && regex.test && isSomething(displayValue)) {
            if (displayValue.match(regex)) {
                return true
            }
            else {
                return {
                    error: "regex",
                    message: regexError
                }
            }
        }
        return true

    }

    const field = useField({
        currentValue,
        initialValue,
        placeholder,
        type: type || "Text",
        validate: textValidate,
        ...rest
    })
    const {
        chosenValue,
        displayValue,
        isDirty,
        isInsideTable,
        label,
        progress,
        setChosenValue,
        setDisplayValue,
        setIsDirty,
        shown,
    } = field

    const extraParams = {}
    if (isInsideTable) {
        extraParams.size = "small"
    }

    return <Field
        {...rest}
        {...field}
    >
        <OutlinedInput
            disabled={progress}
            endAdornment={
                endAdornmentText &&
                <InputAdornment position="end">
                    {t(endAdornmentText)}
                </InputAdornment>
            }
            inputRef={refElement}
            label={t(label)}
            onBlur={() => {
                if (!isDirty) {
                    setIsDirty(true)
                }
            }}
            onChange={(e) => {
                if (!isDirty) {
                    setIsDirty(true)
                }
                let canBeChanged = true
                if (onChange instanceof Function) {
                    canBeChanged = onChange(e.target.value)
                }
                if (canBeChanged) {
                    setDisplayValue(e.target.value)
                    setChosenValue(e.target.value)
                }
            }}
            required={rest.required ? true : false}
            startAdornment={
                startIcon &&
                <InputAdornment
                    disablePointerEvents={progress}
                    disableTypography={progress}
                    position="start"
                >
                    <HolismIcon
                        icon={startIcon}
                        progress={progress}
                    />
                </InputAdornment>
            }
            type={type?.toLowerCase()}
            value={shown || displayValue || ""}
            {...extraParams}
        />

    </Field>
}

export default Text
