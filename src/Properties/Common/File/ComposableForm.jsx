import { ComposableForm } from "Form"
import { TagsField } from "NewTaxonomy"
import PropertyInputs from "../Property/Inputs"

const PropertyFileComposableForm = () => {

    const inputs = <>
        {PropertyInputs}
        <TagsField
            entityType="Property"
            multi
            property="TagIds"
        />
    </>

    return <ComposableForm
        entityType="PropertyFile"
        returnTo="/propertyFiles"
        breadcrumbItems={[
            {
                title: "PropertiesFiles",
                link: "/propertyFiles"
            }
        ]}
        inputs={inputs}
        mainSubmit
        transformResponse={data => ({
            entityGuid: data.guid,
            entityType: "Property",
            module: "Properties"
        })}
        large
    />
}

export default PropertyFileComposableForm
