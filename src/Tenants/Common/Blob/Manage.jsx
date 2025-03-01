import AttachFileIcon from "@mui/icons-material/AttachFile"
import { EntityAction } from "List"

const BlobEntityAction = ({
    goTo,
    personGuid,
}) => {

    return <EntityAction
        title="TenantsBlobs"
        icon={AttachFileIcon}
        goTo={goTo ?? `/blob?personGuid=${personGuid}`}
    />
}

export default BlobEntityAction
