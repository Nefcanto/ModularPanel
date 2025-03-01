import CachedIcon from "@mui/icons-material/Cached"
import { post } from "App"
import HeaderAction from "./HeaderAction"

const UpdateCsvs = () => {

    const updateCsvs = ({
        setProgress,
        error,
        success,
    }) => {
        setProgress(true)
        post('/csv/update')
            .then(data => {
                setProgress(false)
                success("InfraDone")
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <HeaderAction
        onClick={updateCsvs}
        icon={CachedIcon}
        title="InfraUpdateCsvs"
    />
}

export default UpdateCsvs
