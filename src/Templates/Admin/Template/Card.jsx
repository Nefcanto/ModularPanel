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
        value={entity.code}
    />
</MultiCol>

export default card
