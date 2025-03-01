import ImageIcon from "@mui/icons-material/Image"
import EntityAction from "./EntityAction"
import DialogForm from "../../Form/DialogForm"
import Image from "../../Form/Fields/Image"

const DialogUploadImage = ({
    uploadUrl,
    ...rest
}) => {
    return <DialogForm
        title="InfraUploadImage"
        submitTo={uploadUrl}
        inputs={<Image />}
        {...rest}
    />
}

const UploadImageAction = ({
    icon,
    title,
    ...rest
}) => {

    return <>
        <EntityAction
            title={title ?? "InfraUploadImage"}
            dialog={DialogUploadImage}
            icon={icon ?? ImageIcon}
            {...rest}
        />
    </>
}

export default UploadImageAction
