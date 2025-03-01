import {
    EntityFaqPage,
    EntitySeo,
} from "Seo"
import { ManageImages } from "Media"
import { ManageLocation } from "Geo"
import { ViewComments } from "Social"
import { ViewChanges } from "ChangeLog"
import {
    ManageCategories,
    ManageTags,
} from "NewTaxonomy"
import { AssignAttributes } from "Attributes"

const EntityActions = entity => <>
    <EntitySeo />
    <EntityFaqPage />
    <ManageCategories />
    <ManageTags />
    <ManageImages />
    <AssignAttributes />
    <ManageLocation />
    <ViewChanges />
    <ViewComments />
</>

export default EntityActions
