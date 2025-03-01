import { useContext } from "react"
import AccountTreeIcon from "@mui/icons-material/AccountTree"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"
import CategoriesDialog from "./Dialog"

const ManageCategories = props => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        dialog={CategoriesDialog}
        entityGuid={entity.guid}
        entityType={entity.relatedItems?.entityType || entity.type}
        icon={AccountTreeIcon}
        module={entity.relatedItems?.module || entity.part}
        title={props.singleChoice ? "NewTaxonomyChangeCategory" : "NewTaxonomyManageCategories"}
        {...props}
    />
}

export default ManageCategories
