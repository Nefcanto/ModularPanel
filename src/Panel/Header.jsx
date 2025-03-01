import {
    useContext,
    useRef,
    useState,
} from "react"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import Collapse from "@mui/material/Collapse"
import MenuItem from "@mui/material/MenuItem"
import ListItemText from "@mui/material/ListItemText"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import {
    isDevOrSuperAdmin,
    isRtl,
} from "App"
import { PanelContext } from "Contexts"
import DarkMode from "./HeaderActions/DarkMode"
import DefineSettings from "./HeaderActions/DefineSettings"
import DevMode from "./DevMode"
import FullScreen from "./HeaderActions/FullScreen"
import HeaderActions from "../HeaderActions"
import Maximize from "./HeaderActions/Maximize"
import PrintMode from "./HeaderActions/PrintMode"
import Reset from "./HeaderActions/Reset"
import Search from "./HeaderActions/Search"
import UnauthorizedRequest from "./HeaderActions/UnauthorizedRequest"
import UpdateCsvs from "./HeaderActions/UpdateCsvs"
// import HeaderActionsProvider from "./HeaderActions/Provider"

const Header = ({
    isSidebarDocked,
    isSidebarOpen,
}) => {

    const { maximized, setMaximized } = useContext(PanelContext)
    const [open, setOpen] = useState(false)
    const anchorRef = useRef(null)

    const closeMenu = () => setOpen(false)

    const actions = <div
        className="flex items-center justify-center gap-4 max-w-screen-xs md:max-w-screen-sm mx-auto md:mx-0"
    >
        <Maximize closeMenu={closeMenu} />
        <FullScreen closeMenu={closeMenu} />
        <DarkMode closeMenu={closeMenu} />
        <PrintMode closeMenu={closeMenu} />
        <Reset closeMenu={closeMenu} />
        <Search closeMenu={closeMenu} />
        {
            isDevOrSuperAdmin &&
            <DefineSettings closeMenu={closeMenu} />
        }
        {
            isDevOrSuperAdmin &&
            <UnauthorizedRequest closeMenu={closeMenu} />
        }
        {
            isDevOrSuperAdmin &&
            <UpdateCsvs closeMenu={closeMenu} />
        }
        {/* <HeaderActionsProvider closeMenu={closeMenu} /> */}
        <HeaderActions closeMenu={closeMenu} />
    </div>

    const actionsMenu = <>
        <IconButton
            onClick={e => setOpen(true)}
            ref={anchorRef}
        >
            <MoreVertIcon />
        </IconButton>

        <Menu
            anchorEl={anchorRef.current}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: isRtl() ? "left" : "right",
            }}
            onClose={e => setOpen(false)}
            open={open}
            transformOrigin={{
                vertical: "top",
                horizontal: isRtl() ? "left" : "right",
            }}
        >
            <Maximize />
            <FullScreen />
            <DarkMode />
            <PrintMode />
            <Reset />
            <Search />
            {
                isDevOrSuperAdmin &&
                <DefineSettings />
            }
            {
                isDevOrSuperAdmin &&
                <UnauthorizedRequest />
            }
            {
                isDevOrSuperAdmin &&
                <UpdateCsvs />
            }
            {/* <HeaderActionsProvider /> */}
            <HeaderActions />
        </Menu>
    </>

    return <div className={`header fixed top-0 end-0 z-40 dark:bg-stone-950 ${isSidebarOpen ? " start-0 lg:start-[20%] 2xl:start-[16.6666%] " : " start-0 "} transition-all duration-300`}>
        <Collapse in={!maximized}>
            <div className="md:hidden non-printable ">
                <div className="flex items-center px-5 md:px-10 justify-between flex-row mt-3 dark:bg-stone-950">
                    <DevMode />
                    {actionsMenu}
                </div>
            </div>
            <div className="hidden md:block non-printable">
                <div className="flex items-center px-5 md:px-10 justify-between h-10 dark:bg-stone-950">
                    <DevMode />
                    {actions}
                </div>
            </div>
        </Collapse>
        <Collapse in={maximized}>
            <div
                className="m-auto absolute top-0 end-0 start-0 h-0 flex justify-center non-printable"
                id="exitMaximize"
                onClick={() => setMaximized(false)}
            >
                <ExpandMoreIcon
                    className="cursor-pointer z-10"
                    style={{ fontSize: 40 }}
                />
            </div>
        </Collapse>
    </div>
}

export default Header
