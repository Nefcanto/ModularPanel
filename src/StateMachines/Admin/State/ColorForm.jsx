import { useContext } from "react"
import { EntityContext } from "Contexts"
import {
    Color,
    DialogForm,
} from "Form"

const inputs = entity => <>
    <Color
        property="Color"
        returnHex
    />
</>

const ColorForm = () => {

    const { entity } = useContext(EntityContext || {})

    return <DialogForm
        entityType={entity.relatedItems.entityType}
        inputs={inputs}
        title="InfraSetColor"
    />
}

export default ColorForm
