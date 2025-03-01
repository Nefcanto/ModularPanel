import {
    ComposableForm,
    Image,
} from "Form"

const inputs = <>

    <Image

        property="Image"
        multiple
    />
</>

const ImageComposableForm = () => {

    return <ComposableForm
        entityType="Image"
        inputs={inputs}
        submitTo="/image/upload"
        title="MediaUploadImage"
    />

}

export default ImageComposableForm
