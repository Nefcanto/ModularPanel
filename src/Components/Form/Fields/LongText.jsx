import OutlinedInput from "@mui/material/OutlinedInput"
import { t } from "App"
import { useField } from "Hooks"
import Field from "./Field"

const LongText = props => {

    const field = useField({
        type: "LongText",
        ...props
    })
    const {
        displayValue,
        isDirty,
        label,
        progress,
        setChosenValue,
        setDisplayValue,
        setIsDirty,
    } = field

    return <Field
        {...props}
        {...field}
    >
        <OutlinedInput
            disabled={progress}
            label={t(label)}
            minRows={4}
            multiline
            onBlur={() => {
                if (!isDirty) {
                    setIsDirty(true)
                }
            }}
            onChange={(e) => {
                if (!isDirty) {
                    setIsDirty(true)
                }
                setDisplayValue(e.target.value)
                setChosenValue(e.target.value)
            }}
            rows={props.rows}
            value={displayValue}
        />
    </Field>
}

export default LongText
