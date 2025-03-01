import { useContext } from "react"
import PersonIcon from "@mui/icons-material/Person"
import HomeIcon from "@mui/icons-material/Home"
import ContactPhoneIcon from "@mui/icons-material/ContactPhone"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"
import { ManageSocialProfiles } from "ContactsCommon"
import JuridicalPersonEditForm from "../JuridicalPerson/Edit"
import NaturalPersonEditForm from "../NaturalPerson/Edit"

const EditPerson = ({
    addresses,
    icon,
    phones,
    profileEdit = true,
    social,
    ...rest
}) => {

    const { entity } = useContext(EntityContext)

    return <div className="flex items-center">
        {
            profileEdit &&
            <EntityAction
                dialog={(entity.contactsPersonIsJuridical || entity.isJuridical) ? JuridicalPersonEditForm : NaturalPersonEditForm}
                entity={entity}
                icon={icon ?? PersonIcon}
                title="InfraEdit"
                {...rest}
            />
        }
        {
            addresses &&
            <EntityAction
                goTo={`/addresses?contactId=${entity.contactsPersonId || entity.contactsContactId}&pp=${entity.relatedItems.module}&pt=${entity.relatedItems.entityType}&pid=${entity.id}`}
                icon={HomeIcon}
                title="ContactsAddresses"
            />
        }
        {
            phones &&
            <EntityAction
                goTo={`/phones?contactId=${entity.contactsPersonId || entity.contactsContactId}&pp=${entity.relatedItems.module}&pt=${entity.relatedItems.entityType}&pid=${entity.id}`}
                icon={ContactPhoneIcon}
                title="ContactsPhones"
            />
        }

        {
            social &&
            <ManageSocialProfiles />
        }
    </div>
}

export default EditPerson
