import {
    LabelValue,
    MultiCol,
} from "Panel"
import {
    ActivationProperty,
    DateTime,
} from "List"
import GranularityProperty from "GranularityProperty"

const getCurrency = entity => {
    if (entity.isSubunit) {
        return entity.relatedItems.currency?.subUnitName
    }
    if (entity.isSuperUnit) {
        return entity.relatedItems.currency?.superUnitName
    }
    return entity.relatedItems.currency?.baseName
}

const card = entity => <MultiCol>
    <LabelValue
        label="InfraTitle"
        value={entity.title}
    />
    <GranularityProperty />
    {
        entity.startUtcDate &&
        <LabelValue
            label="InfraStartDate"
            value={<DateTime
                date={entity.startUtcDate}
                row
            />}
        />
    }
    {
        entity.endUtcDate &&
        <LabelValue
            label="InfraEndDate"
            value={<DateTime
                date={entity.endUtcDate}
                row
            />}
        />
    }
    {
        entity.quantity > 0 &&
        <LabelValue
            label="InfraQuantity"
            value={
                entity.isPercentage
                    ?
                    <div>%{entity.quantity}</div>
                    :
                    <div>{entity.quantity} {entity.relatedItems.prefix?.commonName} {getCurrency(entity)}</div>
            }
        />
    }
    <LabelValue
        label="InfraIsActive"
        value={<ActivationProperty />}
    />
</MultiCol>

export default card
