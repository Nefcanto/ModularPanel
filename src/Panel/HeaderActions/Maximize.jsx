import { useContext } from "react"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import { PanelContext } from "Contexts"
import HeaderAction from "./HeaderAction"

const Maximize = () => {

    const { setMaximized } = useContext(PanelContext)

    return <HeaderAction
        icon={ExpandLessIcon}
        onClick={() => setMaximized(true)}
        title="InfraMaximize"
    />
}

export default Maximize
