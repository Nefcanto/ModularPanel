import { useContext } from "react"
import DatasetLinkedIcon from "@mui/icons-material/DatasetLinked"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"
import LinkGroupDialog from "./Dialog"

const EntityLinkGroup = () => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        title="SeoLinkGroup"
        icon={DatasetLinkedIcon}
        dialog={<LinkGroupDialog
            entityGuid={entity?.guid}
            entityType={entity?.relatedItems?.entityType}
            module={entity?.relatedItems?.module}
        />}
    />
}

export default EntityLinkGroup
