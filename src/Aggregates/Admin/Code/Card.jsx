import {
    LabelValue,
    MultiCol,
} from "Panel"

const card = entity => <MultiCol>
    <LabelValue
        label="InfraTitle"
        value={entity.title}
    />
    <LabelValue
        expandable
        full
        label="InfraCode"
        ltr
        value={entity.snippet}
    />
</MultiCol>

export default card
