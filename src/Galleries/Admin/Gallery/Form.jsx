import {
    DialogForm,
    IsVital,
    Key,
    LongText,
    Slug,
    Title,
} from "Form"

const inputs = <>
    <Key />
    <Slug />
    <Title />
    <LongText
        placeholder="InfraDescription"
        property="Description"
    />
    <IsVital />
</>

const GalleryForm = () => {
    return <DialogForm
        entityType="Gallery"
        inputs={inputs}
        title="GalleriesGallery"
    />
}

export default GalleryForm
