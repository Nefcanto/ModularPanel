import {
    KeySegmentProperty,
    List,
} from "List"
import { DataTypeProperty } from "DataTypes"
import SectionPartForm from "./Form"

const headers = <>
    <th>InfraKey</th>
    <th>InfraName</th>
    <th>DataTypesType</th>
</>

const row = entity => <>
    <KeySegmentProperty />
    <td>{entity.name}</td>
    <DataTypeProperty />
</>

const SectionParts = ({ isSuperAdmin }) => {
    return <List
        entityType="SectionPart"
        hasDelete={isSuperAdmin}
        hasEdit={isSuperAdmin}
        headers={headers}
        row={row}
        subtitle="ContentsPartsAreNonRepeatingWhileItemsAreRepeating"
        title="ContentsSectionParts"
        upsert={SectionPartForm}
    />
}

export default SectionParts
