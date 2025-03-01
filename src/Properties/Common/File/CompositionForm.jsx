import { CompositionForm } from "Form"
import { EntityAttributeComposableForm } from "AttributesCommon"
import PropertyFileComposableForm from "./ComposableForm"

const PropertyFileCompositionForm = () => {

    return <CompositionForm
        title="PropertiesFile"
        breadcrumbItems={[
            {
                title: "PropertiesFiles",
                link: "/propertyFiles"
            }
        ]}
        forms={<>
            <PropertyFileComposableForm />
            <EntityAttributeComposableForm />
        </>}
        returnTo="/propertyFiles"
    />

}

export default PropertyFileCompositionForm
