import {
    LabelValue,
    MultiCol,
} from "Panel"
import { List } from "List"
import EntityRenderer from "EntityRenderer"
import { DataTypeProperty } from "DataTypes"
import { ScopeProperty } from "Scopes"
import GranularityProperty from "GranularityProperty"

const card = entity => <>
    <MultiCol>
        <GranularityProperty />
        <LabelValue
            label="InfraTitle"
            value={entity.title}
        />
        <DataTypeProperty />
        <ScopeProperty />
        <LabelValue
            full
            label="InfraEntity"
            value={<EntityRenderer entity={entity.relatedItems.entity} />}
        />
        <LabelValue
            full
            label="InfraValue"
            value={entity.value}
            expandable
        />
    </MultiCol>
</>

const EntitySettings = () => {
    return <List
        card={card}
        entityType="EntitySetting"
        title="SettingsAppliedSettings"
    />
}

export default EntitySettings
