import {
    BooleanProperty,
    Image,
} from "List"
import {
    CategoryProperty,
    TagProperty,
} from "NewTaxonomy"
import { Thumbnails } from "Media"
import {
    NewSetPriceProperty,
    PriceProperty,
} from "Pricing"
import { SetStockQuantity } from "Inventory"
import { SetDiscountProperty } from "Discounts"
import {
    ProductIntangible,
    ProductTitle,
} from "ProductsCommon"

const Row = ({
    entity,
    state,
}) => {

    const idProduct = entity.productsProductId ?? entity.id
    const isReload = entity.relatedItems.entityType != "Product"

    if (state === "PricingBatchPricing") {
        return <>
            <Image />
            <ProductTitle />
            <NewSetPriceProperty />
        </>
    }

    if (state === "InventoryBatchInventoryAdjustment") {
        return <>
            <Image />
            <ProductTitle />
            <SetStockQuantity />
        </>
    }

    if (state === "DiscountsBatchDiscount") {
        return <>
            <Image />
            <ProductTitle />
            <PriceProperty />
            <SetDiscountProperty />
        </>
    }

    return <>
        <Image />
        <ProductTitle />
        <CategoryProperty />
        <TagProperty />
        <PriceProperty />
        <Thumbnails />
        <ProductIntangible />
        <BooleanProperty
            actionUrl={`/product/toggleBoolean?id=${idProduct}&property=Featured`}
            reloadListOnSuccess={isReload}
            value={entity.featured}
        />
        <BooleanProperty
            actionUrl={`/product/toggleBoolean?id=${idProduct}&property=IsActive`}
            reloadListOnSuccess={isReload}
            value={entity.isActive}
        />
    </>
}

export default Row
