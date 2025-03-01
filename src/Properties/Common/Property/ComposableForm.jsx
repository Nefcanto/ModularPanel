import { ComposableForm } from "Form"
import PropertyInputs from "./Inputs"

const PropertyComposableForm = ({
    entityType,
    inputs,
    returnTo,
    title,
    ...rest
}) => {

    return <ComposableForm
        entityType={entityType ?? "Property"}
        inputs={inputs ?? PropertyInputs}
        returnTo={returnTo ?? "/properties/properties"}
        {...rest}
    />

}

export default PropertyComposableForm
