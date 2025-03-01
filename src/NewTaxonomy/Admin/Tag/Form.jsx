import {
    DialogForm,
    LongText,
    Slug,
    Title,
} from "Form"
import { GranularityField } from "Granularities"

const inputs = <>
    <GranularityField />
    <Title />
    <Slug />
    <LongText
        placeholder="InfraDescription"
        property="Description"
    />
</>

const TagForm = <DialogForm
    entityType="Tag"
    humanReadableEntityType="NewTaxonomyTag"
    inputs={inputs}
/>

export default TagForm
