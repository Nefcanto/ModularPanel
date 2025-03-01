import { List } from "List"
import { UnitProperty } from "UnitsCommon"
import ConversionForm from "./Form"

const headers = <>
    <th>InfraFrom</th>
    <th>InfraTo</th>
    <th>UnitsFormula</th>
</>

const row = entity => <>
    <UnitProperty entity={entity.relatedItems.fromUnit} />
    <UnitProperty entity={entity.relatedItems.toUnit} />
    <td>{entity.formula}</td>
</>

const Conversions = () => {
    return <List
        create={ConversionForm}
        entityType="Conversion"
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="UnitsConversions"
    />
}

export default Conversions
