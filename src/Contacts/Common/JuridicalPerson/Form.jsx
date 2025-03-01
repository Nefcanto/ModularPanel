import { DialogForm } from "Form"
import { JuridicalPersonInputs } from "ContactsCommon"

const JuridicalPersonForm = ({
    entityType,
    inputs,
    ...rest
}) => {

    const mergedInputs = <>
        {
            JuridicalPersonInputs
        }
        {
            inputs && inputs
        }
    </>

    return <DialogForm
        title="ContactsJuridicalPerson"
        entityType={entityType || "JuridicalPerson"}
        inputs={mergedInputs}
        {...rest}
    />
}

export default JuridicalPersonForm
