import {
    Enum,
    Text,
    Title,
} from "List"

const filters = <>
    <Title />
    <Text
        property="Slug"
        placeholder="InfraSlug"
    />
    <Text
        property="Term"
        placeholder="GlossaryEntry"
    />
    <Enum
        property="State"
        placeholder="GlossaryState"
        entityType="GlossaryState"
    />
</>

export default filters
