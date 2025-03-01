import { Tree } from "List"
import { GranularityFilter } from "Granularities"
import { CategoryForm } from "NewTaxonomyCommon"
import {
    EntityFaqPage,
    EntitySeo,
} from "Seo"
import CategoryNode from "./Node"

const filters = <>
    <GranularityFilter />
</>

const entityActions = <>
    <EntitySeo />
    <EntityFaqPage />
</>

const CategoryTree = () => {

    return <Tree
        entityActions={entityActions}
        entityType="Category"
        filters={filters}
        hasActivation
        hasContent
        hasDelete
        hasEdit
        hasKeyChanging
        show={CategoryNode}
        title="NewTaxonomyCategories"
        upsert={CategoryForm}
    />
}

export default CategoryTree
