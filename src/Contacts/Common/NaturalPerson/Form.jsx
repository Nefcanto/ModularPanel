import { DialogForm } from "Form"
import { NaturalPersonInputs } from "ContactsCommon"

const NaturalPersonForm = ({
    entityType,
    augmentInputs,
    ...rest
}) => {

    const mergedInputs = <>
        {
            NaturalPersonInputs
        }
        {
            augmentInputs && augmentInputs
        }
    </>

    return <DialogForm
        title="ContactsNaturalPerson"
        entityType={entityType || "NaturalPerson"}
        inputs={mergedInputs}
        {...rest}
    />
}

export default NaturalPersonForm
