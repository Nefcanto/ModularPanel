import { useContext } from "react"
import WarningAmberIcon from "@mui/icons-material/WarningAmber"
import {
    camelize,
    parseKey,
} from "App"
import { FormContext } from "Contexts"
import Text from "./Text"

const Key = ({
    noRequired,
    onChange,
    showInEdit,
}) => {

    const keyFormat = /^[a-zA-Z]*$/

    const {
        formMode,
        mode,
    } = useContext(FormContext)

    return (mode === formMode.creation || showInEdit) && <Text
        property="KeySegment"
        propertyAccessor={entity => parseKey(entity.key).entity}
        placeholder="InfraKey"
        regex={keyFormat}
        regexError="InfraKeyFormatIsNotCorrectOnlyEnglishAlphabetIsPermissible"
        required={!noRequired}
        hint={mode === formMode.edition ? "InfraPleaseChangeWithCaution" : ""}
        startIcon={WarningAmberIcon}
        superAdmin
        dir="ltr"
        validate={value => {
            if (value != camelize(value)) {
                return {
                    error: "Invalid key",
                    message: "InfraMakeTheKeyCamelCased"
                }
            }
        }}
        onChange={onChange}
    />
}

export default Key
