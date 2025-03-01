import ContactPhoneIcon from "@mui/icons-material/ContactPhone"
import { EntityAction } from "List"

const PhoneManage = (props) => {
    return <>
        <EntityAction
            {...props}
            title="ContactsPhone"
            icon={ContactPhoneIcon}
        />
    </>
}

export default PhoneManage
