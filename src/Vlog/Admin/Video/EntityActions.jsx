import { UploadVideoAction } from "List"
import { EntitySeo } from "Seo"
import {
    ManageCategories,
    ManageTags,
} from "NewTaxonomy"

const EntityActions = entity => <>
    <ManageCategories />
    <ManageTags />
    <EntitySeo />
    <UploadVideoAction
        title="VlogUploadVideo"
        uploadUrl={`/vlogVideo/setVideo?id=${entity.id}`}
    />
</>

export default EntityActions
