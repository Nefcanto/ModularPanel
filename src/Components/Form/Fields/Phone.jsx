import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Text from "./Text";

const Phone = (props) => {

    const phoneFormat = /^[\d\(\)-\. +]*$/

    return <Text
        dir="ltr"
        regex={phoneFormat}
        regexError="InfraPhoneIsNotValid"
        startIcon={LocalPhoneIcon}
        {...props}
    />
}

export default Phone
