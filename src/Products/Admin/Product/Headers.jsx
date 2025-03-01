const headers = ({ state }) => {

    if (state === "PricingBatchPricing") {
        return <>
            <th></th>
            <th start>InfraTitle</th>
            <th>PricingPrice</th>
        </>
    }

    if (state === "InventoryBatchInventoryAdjustment") {
        return <>
            <th></th>
            <th start>InfraTitle</th>
            <th>InventoryStock</th>
        </>
    }

    if (state === "DiscountsBatchDiscount") {
        return <>
            <th></th>
            <th start>InfraTitle</th>
            <th>PricingPrice</th>
            <th>DiscountsDiscount</th>
        </>
    }

    return <>
        <th></th>
        <th start>InfraTitle</th>
        <th>NewTaxonomyCategories</th>
        <th>NewTaxonomyTags</th>
        <th>PricingPrice</th>
        <th>ProductsImages</th>
        <th>ProductsIntangible</th>
        <th>ProductsFeatured</th>
        <th>InfraIsActive</th>
    </>
}

export default headers
