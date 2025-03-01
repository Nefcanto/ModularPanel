import { useContext } from "react"
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"

const ManageSocialProfiles = ({
    goTo,
    ...rest
}) => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        {...rest}
        goTo={goTo ?? `/socialProfiles?contactId=${entity.contactsPersonId || entity.personId || entity.contactsContactId}&pp=${entity.relatedItems.module}&pt=${entity.relatedItems.entityType}&pid=${entity.id}`}
        icon={ConnectWithoutContactIcon}
        title="ContactsSocialProfiles"
    />
}

export default ManageSocialProfiles
