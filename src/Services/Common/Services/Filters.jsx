import {
    Enum,
    Text,
} from "List"

const filters = <>
    <Text
        property="title"
        placeholder="Title"
    />
    <Enum
        property="serviceStateId"
        placeholder="Service State"
        entityType="ServiceState"
    />
</>

export default filters
