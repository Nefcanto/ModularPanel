import {
    Browse,
    DialogForm,
} from "Form"
import {
    filters,
    headers,
    row,
} from "./Browse"

const inputs = <>
    <Browse
        choose={entity => entity.guid}
        entityType="BlogPost"
        filters={filters}
        headers={headers}
        placeholder="BlogPost"
        property="Post"
        row={row}
        show={entity => entity.title}
    />
</>

const SequencePostForm = <DialogForm
    entityType="SequencePost"
    inputs={inputs}
    title="BlogSequencePost"
/>

export default SequencePostForm
