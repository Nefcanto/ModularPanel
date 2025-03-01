import {
    BooleanProperty,
    List,
} from "List"
import StructureForm from "./Form"

const headers = <>
    <th>InfraProperty</th>
    <th>InfraType</th>
    <th>AggregatesTranslation</th>
</>

const row = entity => <>
    <td>{entity.property}</td>
    <BooleanProperty
        actionUrl={`/structure/toggleBoolean?id=${entity.id}&property=IsDimension`}
        className="w-[90px] mx-auto"
        falseLabel="AggregatesFact"
        trueLabel="AggregatesDimension"
        value={entity.isDimension}
    />
    <td>{entity.translation}</td>
</>

const Structure = () => {

    return <List
        edit={StructureForm}
        entityType="Structure"
        headers={headers}
        row={row}
        title="AggregatesStructure"
    />
}

export default Structure
