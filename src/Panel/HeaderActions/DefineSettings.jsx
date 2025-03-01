import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest"
import { post } from "App"
import HeaderAction from "./HeaderAction"

const DefineSettings = () => {

    const defineSettings = ({
        setProgress,
        error,
        success,
    }) => {
        setProgress(true)
        post("/setting/define")
            .then(data => {
                setProgress(false)
                success("InfraDone")
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <HeaderAction
        icon={SettingsSuggestIcon}
        onClick={defineSettings}
        title="SettingsDefineSettings"
    />
}

export default DefineSettings
