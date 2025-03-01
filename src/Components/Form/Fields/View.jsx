import { useContext } from "react"
import OutlinedInput from "@mui/material/OutlinedInput"
import { t } from "App"
import { FormContext } from "Contexts"
import { useField } from "Hooks"
import Field from "./Field"

const View = props => {

    const { isInsideTable } = useContext(FormContext)

    const {
        placeholder,
        value,
    } = props

    return <Field
        {...props}
        label={placeholder}
    >
        <OutlinedInput
            disabled
            label={t(placeholder)}
            value={value}
            size={isInsideTable ? "small" : ""}
        />
    </Field>
}

export default View
