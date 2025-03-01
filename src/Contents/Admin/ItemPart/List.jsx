import {
    KeySegmentProperty,
    List,
} from "List"
import { DataTypeProperty } from "DataTypes"
import ItemPartForm from "./Form"

const headers = <>
    <th>InfraKey</th>
    <th>InfraName</th>
    <th>DataTypesDataType</th>
</>

const row = entity => <>
    <KeySegmentProperty />
    <td>{entity.name}</td>
    <DataTypeProperty />
</>

const ItemParts = ({ isSuperAdmin }) => {

    return <List
        entityType="ItemPart"
        hasDelete={isSuperAdmin}
        hasEdit={isSuperAdmin}
        headers={headers}
        row={row}
        subtitle="ContentsPartsAreNonRepeatingWhileItemsAreRepeating"
        title="ContentsItemParts"
        upsert={ItemPartForm}
    />
}

export default ItemParts
