import {
    KeySegmentProperty,
    List,
} from "List"
import Layout from "./Form"
import ManageSections from "../Section/Manage"

const headers = <>
    <th>InfraKey</th>
</>

const row = entity => <>
    <KeySegmentProperty />
</>

const entityActions = entity => <>
    <ManageSections layout={entity.key} />
</>

const Layouts = () => {
    return <List
        entityActions={entityActions}
        entityType="Layout"
        hasDelete
        headers={headers}
        row={row}
        title="ContentsLayouts"
        upsert={Layout}
    />
}

export default Layouts
