import PersonAddIcon from "@mui/icons-material/PersonAdd"
import { ListAction } from "List"
import PersonForm from "./Form"

const AddPersonListAction = () => {

    return <ListAction
        title="ContactsAddPerson"
        dialog={PersonForm}
        icon={PersonAddIcon}
    />
}

export default AddPersonListAction
