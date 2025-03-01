import { pascalize } from "App"
import {
    LabelValue,
    MultiCol,
} from "Panel"
import EntityRenderers from "EntityRenderers"
import { EntityAttributesProperty } from "Attributes"
import { EntityStagesProperty } from "Flows"
import { PriceProperty } from "Pricing"

const card = entity => <MultiCol>
    <LabelValue
        label="InfraEntity"
        value={<EntityRenderers
            entity={entity.relatedItems.entity}
            entityType={pascalize(entity.relatedItems.entity?.relatedItems?.entityType)}
            module={pascalize(entity.relatedItems.entity?.relatedItems?.module)}
        />}
        full
    />
    <LabelValue
        label="InfraTrackingNumber"
        value={entity.number}
    />
    <LabelValue
        label="PricingPrice"
        value={<PriceProperty entity={entity.relatedItems.entity} />}
    />
    <EntityAttributesProperty />
    <EntityStagesProperty full />
</MultiCol>

export default card
