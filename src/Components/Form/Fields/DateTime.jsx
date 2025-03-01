import { useEffect } from "react"
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker"
import OutlinedInput from "@mui/material/OutlinedInput"
import {
    getLocale,
    isNothing,
    t,
} from "App"
import { useField } from "Hooks"
import Field from "./Field"

const DateTime = ({
    nullable,
    ...rest
}) => {

    const field = useField({
        type: "DateTime",
        ...rest
    })
    const {
        currentEntity,
        displayValue,
        initialValue,
        isDirty,
        label,
        progress,
        setChosenValue,
        setDisplayValue,
        setIsDirty,
    } = field

    const normalizedValue = (displayValue && displayValue?.toString()?.endsWith("Z")) ? displayValue : (displayValue + "Z")

    if (isNothing(displayValue)) {
        if (!nullable) {
            setChosenValue(new Date())
            setDisplayValue(new Date())
        }
    }

    const localeKey = getLocale().key
    let formatDate = "MM/dd/yyyy HH:mm"
    if (localeKey == supportedLocales.fa) {
        formatDate = "yyyy/MM/dd HH:mm"
    }

    useEffect(() => {
        if (initialValue) {
            const normalizedDate = (initialValue && initialValue?.toString()?.endsWith("Z")) ? initialValue : (initialValue + "Z")
            setDisplayValue(new Date(normalizedDate))
            setChosenValue(new Date(normalizedDate))
        }
    }, [initialValue, currentEntity])

    return <Field
        {...rest}
        {...field}
        dir="ltr"
    >
        <DateTimePicker
            disabled={progress}
            format={formatDate}
            label={t(label)}
            onBlur={() => {
                if (!isDirty) {
                    setIsDirty(true)
                }
            }}
            onChange={date => {
                if (!isDirty) {
                    setIsDirty(true)
                }
                setDisplayValue(date)
                setChosenValue(date)
            }}
            textField={({
                InputProps,
                inputProps,
                inputRef,
            }) => <OutlinedInput
                    endAdornment={InputProps?.endAdornment}
                    inputProps={inputProps}
                    label={t(label)}
                    ref={inputRef}
                />}
            value={displayValue ? new Date(displayValue) : null}
        />
    </Field>
}

export default DateTime
