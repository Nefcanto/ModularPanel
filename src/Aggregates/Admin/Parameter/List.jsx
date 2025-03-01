import { List } from "List"
import { DataTypeProperty } from "DataTypes"
import ParameterForm from "./Form"

const headers = <>
    <th>InfraName</th>
    <th>InfraTranslation</th>
    <th>DataTypesDataType</th>
</>

const row = entity => <>
    <td>{entity.name}</td>
    <td>{entity.translation}</td>
    <DataTypeProperty />
</>

const Parameters = () => {
    return <List
        create={ParameterForm}
        entityType="AggregateParameter"
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="InfraParameters"
    />
}

export default Parameters
