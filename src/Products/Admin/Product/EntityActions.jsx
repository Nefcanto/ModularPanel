import { EntityPackaging } from "Packaging"
import { NewSetPrice } from "Pricing"
import {
    ManageCategories,
    ManageTags,
} from "NewTaxonomy"
import {
    EntityFaqPage,
    EntitySeo,
} from "Seo"
import {
    AssignAttributes,
    ManageVariants,
} from "Attributes"
import {
    ManageImages,
    ManageVideos
} from "Media"
import { ViewComments } from "Social"
import { BundleWithOtherItems } from "Bundling"
import { ManageUnits } from "Units"
import { ManageEntitySnippets } from "Contents"
import { ManageBrand } from "Brands"
import { ManageEntityQuestions } from "Questions"
import { ManageStock } from "Inventory"
import BundleDialog from "./BundleDialog"

const EntityActions = entity => {

    return <>
        <EntitySeo />
        <ManageCategories />
        <ManageTags />
        <BundleWithOtherItems
            dialog={BundleDialog}
        />
        <EntityPackaging />
        <ManageUnits />
        <ManageBrand />
        <AssignAttributes />
        <ManageVariants />
        <NewSetPrice />
        <ManageImages />
        <ManageVideos />
        <ManageEntitySnippets />
        <EntityFaqPage />
        <ManageEntityQuestions />
        <ViewComments />
        <ManageStock />
    </>
}

export default EntityActions
