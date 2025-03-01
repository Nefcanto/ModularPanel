import {
    DialogForm,
    Hidden,
    IsVital,
    LongText,
    Slug,
    Text,
    Title,
} from "Form"
import { GranularityField } from "Granularities"

const inputs = entity => <>
    <GranularityField />
    <Title />
    <Text
        placeholder="InfraSubtitle"
        property="Subtitle"
    />
    <Slug />
    <LongText
        placeholder="InfraDescription"
        property="Description"
    />
    <IsVital />
    <Hidden
        property="IsActive"
        value={entity?.isActive}
    />
</>

const CategoryForm = () => {
    return <DialogForm
        entityType="Category"
        humanReadableEntityType="NewTaxonomyCategory"
        inputs={inputs}
    />
}

export default CategoryForm
