import WarningAmberIcon from "@mui/icons-material/WarningAmber"
import Text from "./Text"

const Key = () => {

    const keyFormat = /^[a-zA-Z]*$/

    return <Text
        property="Key"
        placeholder="InfraKey"
        startIcon={WarningAmberIcon}
        superAdmin
        dir="ltr"
    />
}

export default Key
