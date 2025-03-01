import { useState } from "react"
import FullscreenIcon from "@mui/icons-material/Fullscreen"
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit"
import app from "App"
import HeaderAction from "./HeaderAction"

const FullScreen = () => {

    const [isFullScreen, setIsFullScreen] = useState(document.webkitIsFullScreen)

    const toggle = () => {
        if (document.fullscreenEnabled) {
            if (document.webkitIsFullScreen) {
                document.exitFullscreen()
                setIsFullScreen(false)
            } else {
                document.documentElement.requestFullscreen()
                setIsFullScreen(true)
            }
        } else {
            app.warning("Your browser does not support fullscreen.")
        }
    }

    const icon = isFullScreen
        ?
        FullscreenExitIcon
        :
        FullscreenIcon


    return <HeaderAction
        icon={icon}
        onClick={toggle}
        title="InfraFullScreen"
    />
}

export default FullScreen
