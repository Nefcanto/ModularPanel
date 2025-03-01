import { PersonProperty } from "Contacts"
import { EntityAttributesProperty } from "Attributes"

const row = entity => <>
    <PersonProperty start />
    <td>{entity.number}</td>
    <td>
        {entity?.relatedItems?.typeKeyTranslation}
    </td>
    <td>
        {entity?.monetaryValuesMonetaryValueQuantity?.toLocaleString()}
    </td>

    <EntityAttributesProperty />
</>

export default row
