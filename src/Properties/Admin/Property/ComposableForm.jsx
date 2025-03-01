import {
    Check,
    ComposableForm,
} from "Form"
import { AgentField } from "Properties"
import { PropertyInputs } from "PropertiesCommon"
import { TagsField } from "NewTaxonomy"

const PropertyForm = () => {

    const inputs = <>
        {PropertyInputs}
        <Check
            placeholder="PropertiesIsFeatured"
            property="IsFeatured"
        />
        <Check
            placeholder="PropertiesIsOccasion"
            property="IsOccasion"
        />
        <TagsField
            entityType="Property"
            multi
            property="TagIds"
        />
        <AgentField />
    </>

    const transformResponse = data => ({
        entity: data.guid,
        entityType: "Property",
        module: "Properties"
    })

    return <ComposableForm
        entityType="Property"
        inputs={inputs}
        large
        mainSubmit
        transformResponse={transformResponse}
    />
}

export default PropertyForm
