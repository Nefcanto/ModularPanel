import DynamicFeedIcon from "@mui/icons-material/DynamicFeed"
import { EntityAction } from "List"
import { ManageImages } from "Media"
import {
    ManageCategories,
    ManageTags,
} from "NewTaxonomy"
import { AssignAttributes } from "Attributes"

const EntityActions = entity => <>
    <ManageCategories />
    <ManageTags />
    <ManageImages />
    <AssignAttributes />
    <EntityAction
        goTo={`/serviceVariants?serviceGuid=${entity.guid}&ServiceId=${entity.id}`}
        icon={DynamicFeedIcon}
        title="Manage Variants"
    />
</>

export default EntityActions
