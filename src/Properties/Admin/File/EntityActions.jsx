import CollectionsIcon from "@mui/icons-material/Collections"
import { EntityAction } from "List"
import { ManageTags } from "NewTaxonomy"
import ManageAgentFiles from "../AgentFile/Manage"

const EntityActions = entity => <>

    <EntityAction
        goTo={`/properties/property/images?entityType=property&entityGuid=${entity?.guid}&pp=properties&pt=property&pid=${entity.id}`}
        icon={CollectionsIcon}
        title="Manage images"
    />
    <ManageTags />
    <ManageAgentFiles />
</>

export default EntityActions
