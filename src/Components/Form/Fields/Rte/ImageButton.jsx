import { useSlate } from "slate-react"
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto"
import { upload } from "App"
import { useMessage } from "Hooks"
import HolismIcon from "../../../HolismIcon"
import insertImage from "./InsertImage"
import UploadButton from "./UploadButton"

const ImageButton = ({ title }) => {
    const editor = useSlate()
    const { success, error } = useMessage()

    const handleButtonClick = (e) => {
        e.preventDefault()

        let form = new FormData()
        form.append("file", e.target.files[0])

        upload("/fileManager/upload", form)
            .then(data => {
                const embedFile = {
                    url: data,
                    alt: "",
                    title: ""
                }

                success("InfraImageUploadedSuccessfully")
                // insertEmbed(editor, embedFile, format)
                insertImage(editor, embedFile)
            }, e => {
                // insertEmbed(editor, embedFile, format)
                error(e)
            })
    }
    return (
        <UploadButton
            onChange={handleButtonClick}
            format="image"
            type="image"
            editor={editor}
            title={title}
        >
            <HolismIcon icon={InsertPhotoIcon} />
        </UploadButton>
    )
}

export default ImageButton
