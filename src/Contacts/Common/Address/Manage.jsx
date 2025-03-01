import HomeIcon from "@mui/icons-material/Home"
import { EntityAction } from "List"

const AddressManage = (props) => {
    return <>
        <EntityAction
            {...props}
            title="ContactsAddresses"
            icon={HomeIcon}

        />
    </>
}

export default AddressManage
