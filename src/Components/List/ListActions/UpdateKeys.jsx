import { useContext } from "react"
import SyncLockIcon from "@mui/icons-material/SyncLock"
import { ListContext } from "Contexts"
import ListAction from "./ListAction"

const UpdateKeysAction = () => {

    const { camelizedEntityType } = useContext(ListContext)

    return <>
        <ListAction
            icon={SyncLockIcon}
            post={`/${camelizedEntityType}/updateKeys`}
            title="InfraUpdateKeys"
        />
    </>
}

export default UpdateKeysAction
