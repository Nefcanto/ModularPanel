import Collapse from "@mui/material/Collapse"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import { Transition } from "@headlessui/react"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import app from "App"
import { useLocalStorage } from "Hooks"
import Branding from "./Branding"
import User from "./User"
import Menu from "./Menu"
import HolismIcon from "../Components/HolismIcon"

const Sidebar = ({
    setIsSidebarOpen,
    isSidebarOpen,
}) => {
    const [open, setOpen] = useLocalStorage({
        initialValue: true,
        defaultValue: true,
        key: "brandingAndMenuIsShown"
    })

    const styles = "dark:text-gray-400"

    const closeMenu = () => {
        if (window.innerWidth < app.breakpoints.lg) {
            setIsSidebarOpen(false)
        }
    }

    return <Transition
        as="div"
        show={isSidebarOpen}
        enter="transition-all duration-300"
        enterFrom={`-ms-72 lg:-ms-[20%] 2xl:-ms-[16.6666%]`}
        enterTo="ms-0"
        leave="transition-all duration-300"
        leaveFrom="ms-0"
        leaveTo={`-ms-72 lg:-ms-[20%] 2xl:-ms-[16.6666%]`}
        className={
            "sidebar fixed w-72 border-b z-50 bg-white dark:bg-slate-900 top-0 bottom-0 non-printable "
            + " border-e lg:border-e-0 "
            +
            "lg:w-1/5 lg:border-b-0 "
            +
            ""
            +
            "2xl:w-1/6"
        }
    >
        <ClickAwayListener onClickAway={closeMenu}>
            <div
                id="thisDivShouldNotBeRemovedToFixRefProblemOfSidebar"
            >
                <div className={"h-screen bg-white dark:bg-slate-900 " + (open && " pt-4 ") + (window.settings?.HasMenuSearch ? " overflow-y-scroll " : " overflow-y-auto ")}>
                    <div className={"cursor-pointer flex justify-center "}
                        onClick={() => setOpen(!open)}>
                        {
                            open
                                ?
                                <HolismIcon className={styles} icon={ExpandLessIcon} />
                                :
                                <HolismIcon className={styles} icon={ExpandMoreIcon} />
                        }
                    </div>
                    <Collapse in={open}>
                        {/* <Branding onClick={closeMenu} /> */}
                        <User onClick={closeMenu} />
                    </Collapse>
                    <Menu
                        onClick={closeMenu}
                        className={open && " mt-5 "}
                    />
                </div>
            </div>
        </ClickAwayListener>
    </Transition>


}

export default Sidebar
