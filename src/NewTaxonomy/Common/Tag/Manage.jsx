import { useContext } from "react"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"
import TagsDialog from "./Dialog"

const ManageTags = props => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        dialog={TagsDialog}
        entityGuid={entity.guid}
        entityType={entity.relatedItems?.entityType || entity.type}
        icon={LocalOfferIcon}
        module={entity.relatedItems?.module || entity.part}
        title="NewTaxonomyManageTags"
        {...props}
    />
}

export default ManageTags
