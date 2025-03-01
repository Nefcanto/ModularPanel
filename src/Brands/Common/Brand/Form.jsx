import {
    DialogForm,
    Key,
    Slug,
    Text,
} from "Form"

const inputs = <>
    <Text
        property="OriginalName"
        placeholder="BrandsOriginalName"
    />
    <Text
        property="LocalizedName"
        placeholder="BrandsLocalizedName"
    />
    <Slug />
    <Key />
</>

const BrandForm = <DialogForm
    title="BrandsBrand"
    entityType="Brand"
    inputs={inputs}
/>

export default BrandForm
