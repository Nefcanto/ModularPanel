import { useState } from "react"
import {
    Check,
    DialogForm,
    Image,
    Title,
} from "Form"

const ImageForm = () => {

    const [moreThanOne, setMoreThanOne] = useState(false)

    const inputs = <>
        <Image
            property="Image"
            multiple
            onChange={images => setMoreThanOne(images.length > 1)}
        />
        {
            !moreThanOne &&
            <>
                <Title optional />
                <Check
                    property="IsDefault"
                    placeholder="MediaIsDefault"
                />
            </>
        }
    </>

    return <DialogForm
        title="MediaUploadImage"
        entityType="Image"
        inputs={inputs}
    />
}

export default ImageForm
