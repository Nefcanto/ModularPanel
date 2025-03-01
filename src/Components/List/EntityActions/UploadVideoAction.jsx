import VideoFileIcon from "@mui/icons-material/VideoFile"
import EntityAction from "./EntityAction"
import DialogForm from "../../Form/DialogForm"
import Video from "../../Form/Fields/Video"

const DialogUploadVideo = ({
    uploadUrl,
    ...rest
}) => {
    return <DialogForm
        title="InfraUploadVideo"
        submitTo={uploadUrl}
        inputs={<Video />}
        {...rest}
    />
}

const UploadVideoAction = ({ title, ...rest }) => {

    return <>
        <EntityAction
            title="InfraUploadVideo"
            dialog={DialogUploadVideo}
            icon={VideoFileIcon}
            {...rest}
        />
    </>
}

export default UploadVideoAction
