import BusinessIcon from "@mui/icons-material/Business"
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt"
import { ListAction } from "List"
import {
    JuridicalPersonForm,
    NaturalPersonForm,
} from "Contacts"

const ListActions = () => {
    return <>
        <ListAction
            title="ContactsAddingFromNaturalPerson"
            icon={PersonAddAltIcon}
            dialog={
                <NaturalPersonForm
                    entityType="AdvertisementContact"
                />
            }
        />
        <ListAction
            title="ContactsAddingFromJuridicalPerson"
            icon={BusinessIcon}
            dialog={
                <JuridicalPersonForm
                    entityType="AdvertisementContact"
                />
            } />
    </>
}

export default ListActions
