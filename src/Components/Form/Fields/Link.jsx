import LinkIcon from "@mui/icons-material/Link"
import Text from "./Text"

const Link = props => {

    const validate = url => {
        if (!url) {
            return true
        }
        if (url.startsWith("/")) {
            return true
        }
        try {
            let temp = new URL(url)
            return true
        } catch (error) {
            return {
                error: "url",
                message: "InfraUrlValidation"
            }
        }
    }

    return <Text
        validate={validate}
        startIcon={LinkIcon}
        dir="ltr"
        {...props}
    />
}

export default Link
