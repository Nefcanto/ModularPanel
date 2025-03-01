import { Boolean } from "List"
import { BrandFilter } from "BrandsCommon"
import { CategoryFilter } from "NewTaxonomy"

const filters = <>
    <BrandFilter />
    <CategoryFilter />
    <Boolean
        label="ProductsFeatured"
        nullable
        property="Featured"
    />
    <Boolean
        label="ProductsIntangible"
        nullable
        property="Intangible"
    />
    <Boolean
        label="InfraActive"
        nullable
        property="IsActive"
    />

</>

export default filters
