import {
    EntityFaqPage,
    EntitySeo,
} from "Seo"
import { ManageImages } from "Media"

const EntityActions = entity => <>
    <ManageImages />
    <EntitySeo />
    <EntityFaqPage />
</>

export default EntityActions
