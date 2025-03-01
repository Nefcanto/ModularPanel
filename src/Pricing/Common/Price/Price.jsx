const price = entity => <div className="price">
    <span className="flex gap-0.5 md:gap-2 justify-center items-center">
        <span className="value font-bold block text-lg">{(entity.pricingPriceAmount || entity.monetaryValuesMonetaryValueQuantity || "").digitGroup()}</span>
        <span className="text-xs flex gap-0.5 md:gap-1 justify-center">
            {
                entity.unitsPrefixKey && entity.unitsPrefixVisible && <span className="prefix ">{entity.unitsPrefixCommonName}</span>
            }
            {
                !entity.pricingPriceIsSuperUnit &&
                !entity.pricingPriceIsSubunit &&
                !entity.monetaryValuesMonetaryValueIsSuperUnit &&
                !entity.monetaryValuesMonetaryValueIsSubunit &&
                <span className="unit">{entity.currenciesCurrencyUnitName}</span>
            }
            {
                (entity.pricingPriceIsSuperUnit || entity.monetaryValuesMonetaryValueIsSuperUnit) && <span className="superUnit">{entity.currenciesCurrencySuperUnitName}</span>
            }
            {
                (entity.pricingPriceIsSubunit || entity.monetaryValuesMonetaryValueIsSubunit) && <span className="subunit">{entity.currenciesCurrencySubunitName}</span>
            }
        </span>
    </span>
    {
        entity.currenciesCurrencyName &&
        <span className="currency block flex justify-center items-center">
            <span>{"("}</span>
            <span className="name text-[10px] md:text-[12px]">{entity.currenciesCurrencyName}</span>
            <span className="character ms-1 text-[10px]">{entity.currenciesCurrencyIsoCode}</span>
            <span>{")"}</span>
        </span>
    }
</div>

export default price
