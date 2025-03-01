import { ViewComments } from "Social"
import {
    ManageCategories,
    ManageTags,
} from "NewTaxonomy"
import {
    EntityFaqPage,
    EntitySeo,
} from "Seo"

const EntityActions = entity => <>
    <EntitySeo />
    <EntityFaqPage />
    <ManageCategories />
    <ManageTags />
    <ViewComments />
</>

export default EntityActions
