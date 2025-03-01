import { Boolean } from "List"
import { CategoryFilter } from "NewTaxonomy"

const filters = <>
    <CategoryFilter />
    <Boolean
        label="AdvertisementsFeatured"
        nullable
        property="isFeatured"
    />
</>

export default filters
