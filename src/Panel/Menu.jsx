import {
    Fragment,
    useEffect,
    useState,
} from "react"
import { Link } from "react-router"
import { useLocation } from "react-router"
import BiotechIcon from "@mui/icons-material/Biotech"
import ClearIcon from "@mui/icons-material/Clear"
import Collapse from "@mui/material/Collapse"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import {
    getLocale,
    isDevOrSuperAdmin,
    isSuperAdmin,
    t,
} from "App"
import { useLocalStorage } from "Hooks"
import menuItems from "../Menu"
import HolismIcon from "../Components/HolismIcon"

let items = menuItems

const getItems = () => {
    if (isDevOrSuperAdmin()) {
        items = [...menuItems, {
            title: "InfraTest",
            icon: BiotechIcon,
            path: "/test"
        }, {
            title: "InfraSimulation",
            icon: BiotechIcon,
            children: [
                {
                    title: "InfraBigFileUpload",
                    path: "/bigFileUpload"
                }
            ]
        }, {
            title: "InfraSamples",
            icon: BiotechIcon,
            children: [
                {
                    title: "InfraTabs",
                    path: "/tabs"
                }
            ]
        }]
    }
    return items
}

const liStyle = "py-2 hover:bg-gray-50 dark:hover:bg-blue-900 cursor-pointer text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white font-normal relative select-none " + (getLocale().supportsLetterSpacing && " tracking-wide ")
const iconStyle = "fill-gray-600 hover:fill-gray-900"

const isSelected = path => {
    const anchor = document.createElement("a")
    anchor.href = path
    const url = new URL(anchor.href)
    if (url.pathname !== window.location.pathname) {
        return false
    }
    const windowSearchParams = new URLSearchParams(window.location.search)
    for (const [key, value] of url.searchParams.entries()) {
        if (windowSearchParams.get(key) !== value) {
            return false
        }
    }
    return true
}

const leftBlueLine = path => {
    if (isSelected(path).pathname === window.location.pathname) {
        return <span className="w-2 bg-blue-600 h-full absolute top-0 start-0 rounded-se-md rounded-ee-md "></span>
    }
}

const MenuItemWithSubmenu = ({ entity, onClick }) => {
    let location = useLocation()

    const [isSubmenuOpen, setIsSubmenuOpen] = useState(() => {
        let isOpen = entity.children.filter(i => isSelected(i.path)).length > 0
        return isOpen
    })
    const openSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen)
    }
    return (
        <Fragment key={t(entity.title)}>
            <div
                className={liStyle + (
                    isSubmenuOpen
                        ?
                        " pb-0"
                        :
                        ""
                )}
                onClick={openSubmenu}
            >
                <span className="px-9 flex items-center h-full w-full">
                    <span className="flex items-center me-3">
                        {
                            <HolismIcon icon={entity.icon} />
                        }
                    </span>
                    <span className="flex-1">{t(entity.title)}</span>
                    <span className="flex ">
                        <span
                            className={
                                "transition-all "
                                + (isSubmenuOpen ? " transform rotate-180 " : " ")
                            }
                        >
                            <ExpandMoreIcon
                            />
                        </span>
                    </span>
                </span>
                <Collapse in={isSubmenuOpen}>
                    <div className=" pt-2">
                        {
                            entity.children.filter(entity => {
                                if (entity.superAdmin === true) {
                                    return isSuperAdmin()
                                }
                                else {
                                    return true
                                }
                            }).map((child, index) => {
                                return <Link
                                    className={
                                        liStyle
                                        + " flex items-center hover:bg-gray-100"
                                        + (isSelected(child.path) ? " bg-gray-200 text-blue-800 hover:text-blue-800 dark:bg-slate-600 dark:text-slate-200 dark:hover:text-slate-100" : "")
                                    }
                                    key={index}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        onClick()
                                    }}
                                    to={child.path}
                                >
                                    {
                                        leftBlueLine(child.path)
                                    }
                                    <span className="ms-20">{t(child.title)}</span>
                                </Link>
                            })
                        }
                    </div>
                </Collapse>
            </div>

        </Fragment>
    )
}

const Menu = ({
    className,
    onClick,
}) => {

    let location = useLocation()
    const [finalItems, setFinalItems] = useState(getItems())
    const [searchTerm, setSearchTerm] = useLocalStorage({
        initialValue: "",
        defaultValue: "",
        key: `panel_menu_search`
    })

    useEffect(() => {
        filterMenu()
    }, [searchTerm])

    const filterMenu = () => {
        const searchChildren = children => {
            const filteredChildren = children?.filter(i => {
                if (i.title?.toLowerCase().includes(searchTerm.toLowerCase().trim())) {
                    return true
                }
                if (t(i.title).includes(searchTerm.toLowerCase().trim())) {
                    return true
                }
                if (i.children) {
                    return searchChildren(i.children).length > 0
                }
            })
            return filteredChildren
        }
        if (searchTerm) {
            const filteredMenuItems = items.filter(i => {
                if (i.title?.toLowerCase().includes(searchTerm.toLowerCase().trim())) {
                    return true
                }
                if (t(i.title).includes(searchTerm.toLowerCase().trim())) {
                    return true
                }
                if (i.children) {
                    return searchChildren(i.children).length > 0
                }
            })
            setFinalItems(filteredMenuItems)
        }
        else {
            setFinalItems(items)
        }
    }

    return <div
        className={"dark:bg-slate-900 max-h-dvh " + (className || "")}
        id="menu"
    >
        {
            window.settings?.HasMenuSearch &&
            <div
                className="w-4/5 mt-8 mx-auto block dark:bg-stone-600 outline-hidden border-none rounded-md flex justify-between items-center"
            >
                <input
                    className="outline-hidden border-none px-2 py-2 dark:bg-stone-600 w-4/5 rounded-md"
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder={t("InfraSearchMenu")}
                    value={searchTerm}
                />
                {
                    searchTerm && <HolismIcon
                        className="cursor-pointer"
                        icon={ClearIcon}
                        onClick={() => setSearchTerm("")}
                    />
                }
            </div>
        }
        {
            finalItems.filter(entity => {
                if (entity.superAdmin === true) {
                    return isSuperAdmin()
                }
                else {
                    return true
                }
            }).map((entity, index) => {
                if (entity.children && entity.children.length > 0) {
                    return <MenuItemWithSubmenu
                        entity={entity}
                        key={index}
                        onClick={onClick}
                    />
                }
                else {
                    if (!entity.children && !entity.path) {
                        throw `Holism way of defining submenu items is via "children" property. Please either provide a "path" property for top-level menu items, or specify their "children" in ${JSON.stringify(entity)}.`
                    }
                    if (entity.children && entity.children.length === 0) {
                        throw "Please remove menu items with zero children. Empty children array is not valid."
                    }
                    return <Fragment key={index}>
                        <Link
                            onClick={onClick}
                            to={entity.path}
                            className={
                                liStyle
                                + " flex items-center relative"
                                + (isSelected(entity.path) ? " bg-gray-200 hover:bg-gray-400 text-blue-800 hover:text-blue-800 dark:bg-slate-700 dark:text-slate-200 dark:hover:text-slate-100" : "")
                            }
                        >
                            <span className="px-9 flex items-center inline-block w-full">
                                <span
                                    className={
                                        iconStyle
                                        + " me-3 "
                                    }
                                >
                                    {
                                        <HolismIcon
                                            className=""
                                            icon={entity.icon}
                                        />
                                    }
                                </span>
                                {
                                    leftBlueLine(entity.path)
                                }
                                <span>{t(entity.title)}</span>
                            </span>
                        </Link>
                    </Fragment>
                }
            })
        }
    </div>
}

export default Menu

/*
todo:
* support groups
* show parent menu vertical bar next to children
* let developers provide color for svg icons if they want
* allow tags for each menu (like "New", or "Pro")
* allow numbers (like notifications count, or unprocessed orders count)
*/
