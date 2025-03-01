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

const VideoGalleryForm = () => {
    return <DialogForm
        entityType="VideoGallery"
        inputs={inputs}
        title="GalleriesVideoGallery"
    />
}

export default VideoGalleryForm
