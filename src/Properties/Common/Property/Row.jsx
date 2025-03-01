import {
    localizedSiteUrl,
    t,
} from "App"
import {
    BooleanProperty,
    DateTime,
    Image,
    TitleSubtitle,
    ValueWithTitle,
} from "List"

const PropertyRow = entity => {

    const dealTypeKeySegment = entity?.dealType.split("_")[4]
    let majorPriceTranslationKey = "PropertiesMajorPrice"
    let minorPriceTranslationKey = "PropertiesMinorPrice"
    switch (dealTypeKeySegment) {
        case "rent":
            majorPriceTranslationKey = "PropertiesMortgage"
            minorPriceTranslationKey = "PropertiesMonthlyRent"
            break
        case "sale":
            majorPriceTranslationKey = "PropertiesTotalPrice"
            minorPriceTranslationKey = "PropertiesMeterPrice"
            break
        case "prepurchase":
            majorPriceTranslationKey = "PropertiesTotalPaymentPrice"
            minorPriceTranslationKey = "PropertiesInitialMeterPrice"
            break
    }

    return <>
        <Image />
        <TitleSubtitle
            link={`${localizedSiteUrl()}/property/${entity.slug}`}
            subtitle={`${entity.relatedItems.images.length} ${t("InfraImage")}`}
            title={<ValueWithTitle
                value={entity.title?.cut(30)}
            />}
        />
        <td>
            <p>{entity.propertyTypeName}</p>
            <small>{`(${entity.dealTypeName})`}</small>
        </td>
        <td>
            {entity.geoCityDivisionName}
        </td>
        <td>
            {
                entity.majorPrice &&
                <>
                    <small>
                        {t(majorPriceTranslationKey)}
                    </small>
                    <p>{entity.majorPrice?.digitGroup()}</p>
                </>
            }
            {
                entity.minorPrice &&
                <>
                    <small>
                        {t(minorPriceTranslationKey)}
                    </small>
                    <p>{entity.minorPrice?.digitGroup()}</p>
                </>
            }
        </td>
        <BooleanProperty value={entity.isOccasion} />
        <DateTime date={entity.creationUtcDate} />
        <DateTime date={entity.modificationUtcDate || entity.creationUtcDate} />

    </>
}

export default PropertyRow
