import { CompositionForm } from "Form"
import { EntityAttributeComposableForm } from "Attributes"
import PropertyForm from "./ComposableForm"

const PropertyCompositionForm = () => {

    return <CompositionForm
        breadcrumbItems={[
            {
                title: "PropertiesProperties",
                link: "/properties/properties"
            }
        ]}
        forms={<>
            <PropertyForm />
            <EntityAttributeComposableForm />
        </>}
        returnTo="/properties/properties"
        title="PropertiesProperties"
    />

}

export default PropertyCompositionForm
