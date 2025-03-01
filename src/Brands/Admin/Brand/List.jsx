import {
    List,
} from "List"
import { ManageCategories } from "NewTaxonomy"
import { ManageImages } from "Media"
import BrandForm from "./Form"
import { BrandSorts } from "BrandsCommon"
import Row from "./Row"
import Headers from "./Headers"

const entityActions = entity => <>
    <ManageImages />
    <ManageCategories />
</>

const Brands = () => {
    return <List
        create={BrandForm}
        entityActions={entityActions}
        entityType="Brand"
        hasContent
        hasDelete
        hasEdit
        headers={Headers}
        row={Row}
        separateRowForActions
        sorts={BrandSorts}
        title="BrandsBrands"
    />
}

export default Brands
