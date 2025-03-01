import { ManageImages } from "Media"
import { ManageTags } from "NewTaxonomy"
import {
    EntityFaqPage,
    EntitySeo,
} from "SeoCommon"

const EntityActions = entity => <>
    <EntitySeo
        entityGuid={entity.guid}
        entityType="Place"
        module="Place"
    />
    <EntityFaqPage
        entityGuid={entity.guid}
        entityType="Place"
        module="Place"
    />
    <ManageImages />
    <ManageTags
        entityGuid={entity.guid}
        entityType="Place"
        module="Place"
    />
</>

export default EntityActions
