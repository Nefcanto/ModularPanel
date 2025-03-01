import { EntityAttributesProperty } from "Attributes"

const row = entity => <>
    <td>{entity.number}</td>
    <td>
        {entity?.totalPrice?.toLocaleString()}
    </td>
    <EntityAttributesProperty />
</>

export default row
