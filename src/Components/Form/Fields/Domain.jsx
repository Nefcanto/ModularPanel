import DnsIcon from "@mui/icons-material/Dns"
import Text from "./Text"

const Domain = props => {

    const domainRegex = /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/

    return <Text
        dir="ltr"
        regex={domainRegex}
        regexError="InfraDomainIsNotValid"
        startIcon={DnsIcon}
        {...props}
    />
}

export default Domain
