import {
    BooleanProperty,
    List,
} from "List"
import headers from "./Headers"
import PrefixForm from "./Form"

const row = entity => <>
    <td>{entity.siName}</td>
    <td>{entity.commonName}</td>
    <td>{entity.magnitude?.digitGroup()}</td>
    <BooleanProperty
        actionable
        property="Visible"
    />
</>

const Prefixes = () => {
    return <List
        create={PrefixForm}
        entityType="Prefix"
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="UnitsPrefixes"
    />
}

export default Prefixes
