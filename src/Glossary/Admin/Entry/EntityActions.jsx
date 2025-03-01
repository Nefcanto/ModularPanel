import { ViewComments } from "Social"
import {
    ManageCategories,
    ManageTags,
} from "NewTaxonomy"
import {
    EntityFaqPage,
    EntityLinkGroup,
    EntitySeo,
} from "Seo"

const EntityActions = entity => <>
    <EntitySeo />
    <EntityFaqPage />
    <EntityLinkGroup />
    <ManageCategories />
    <ManageTags />
    <ViewComments />
</>

export default EntityActions
