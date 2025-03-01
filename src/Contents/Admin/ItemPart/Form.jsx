import {
    DialogForm,
    Key,
    Text,
} from "Form"
import { DataTypeField } from "DataTypes"

const inputs = <>
    <Key />
    <Text
        property="Name"
        placeholder="InfraName"
        required
    />
    <DataTypeField />
</>

const ItemPartForm = () => {
    return <DialogForm
        entityType="ItemPart"
        humanReadableEntityType="ContentsItemPart"
        inputs={inputs}
    />
}

export default ItemPartForm
