import { useContext } from "react"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"
import { PanelContext } from "Contexts"
import HeaderAction from "./HeaderAction"

const DarkMode = () => {

    const { isDark, setIsDark } = useContext(PanelContext)

    return <HeaderAction
        icon={isDark ? LightModeIcon : DarkModeIcon}
        onClick={() => {
            if (isDark) {
                document.documentElement.classList.remove("dark")
            }
            else {
                document.documentElement.classList.remove("dark")
            }
            setIsDark(!isDark)

        }}
        title={isDark ? "InfraLightMode" : "InfraDarkMode"}
    />
}

export default DarkMode
