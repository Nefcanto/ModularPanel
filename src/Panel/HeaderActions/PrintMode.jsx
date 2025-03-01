import { useContext } from "react"
import PrintIcon from '@mui/icons-material/Print'
import PrintDisabledIcon from '@mui/icons-material/PrintDisabled';
import { PanelContext } from "Contexts"
import HeaderAction from "./HeaderAction"

const DarkMode = () => {

    const { print, setPrint } = useContext(PanelContext)

    return <HeaderAction
        icon={print ? PrintIcon : PrintDisabledIcon}
        onClick={() => setPrint(!print)}
        title={print ? "InfraNonPrintingModel" : "InfraPrintingMode"}
    />
}

export default DarkMode
