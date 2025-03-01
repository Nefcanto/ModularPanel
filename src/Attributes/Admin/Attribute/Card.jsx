import {
    pascalize,
    t,
} from "App"
import {
    MultiCol,
    LabelValue,
    LabelValues,
} from "Panel"
import {
    BooleanProperty,
    Image,
    TitleSubtitle,
} from "List"
import GranularityProperty from "GranularityProperty"
import { EntityUnitsProperty } from "Units"
import { DataTypeProperty } from "DataTypes"

const card = fixedGranularity => entity => {

    const booleanProperties = [
        "filterable",
        "createsVariant",
        "affectsValue",
        "comparable",
        "isMain",
        "hasUnits",
    ]
    return <MultiCol>
        <LabelValue
            label="AttributesAttribute"
            value={
                <div className="flex flex-row items-center gap-4">
                    <Image
                        url={entity.relatedItems.imageUrl ?? entity.relatedItems.attributeImageUrl}
                        uploadUrl={`/attribute/setImage?id=${entity.attributesAttributeId || entity.id}`}
                        deletionUrl={`/attribute/deleteImage?id=${entity.attributesAttributeId || entity.id}`}
                    />
                    <div>
                        <TitleSubtitle
                            title={entity.title}
                        />
                    </div>
                </div>
            }
        />
        {
            !fixedGranularity &&
            <GranularityProperty />
        }
        <DataTypeProperty />
        {entity.hasUnits && <EntityUnitsProperty />}
        <LabelValue
            label={t("AttributesDisplayOnly")}
            value={entity.displayOnly}
        />
        {
            booleanProperties.map(property => <LabelValue
                key={property.id}
                label={t(`Attributes${pascalize(property)}`)}
                value={<BooleanProperty
                    actionable
                    property={property}
                />}
            />)
        }
    </MultiCol>
}

export default card
