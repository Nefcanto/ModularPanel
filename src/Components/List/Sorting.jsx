import {
    useContext,
    useEffect,
    useState,
} from "react"
import Menu from "@mui/material/Menu"
import ShuffleOutlinedIcon from "@mui/icons-material/ShuffleOutlined"
import MenuItem from "@mui/material/MenuItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import Tooltip from "@mui/material/Tooltip"
import IconButton from "@mui/material/IconButton"
import ImportExportIcon from "@mui/icons-material/ImportExport"
import CloseIcon from "@mui/icons-material/Close"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import { ListContext } from "Contexts"
import app, { t } from "App"
import HolismIcon from "../HolismIcon"

const Sorting = () => {

    const {
        hasShuffleSort,
        uiSorts,
    } = useContext(ListContext)

    const mergedSorts = [...(uiSorts || [])]

    if (hasShuffleSort) {
        mergedSorts.push({
            caption: "Shuffle",
            icon: ShuffleOutlinedIcon,
            key: "Shuffle",
        })
    }

    if (!mergedSorts || !Array.isArray(mergedSorts) || mergedSorts.length === 0) {
        return null
    }

    for (let i = 0; i < mergedSorts.length; i++) {
        const { caption, property, direction, key } = mergedSorts[i]
        app.ensure(caption)
        if (key) {
            app.ensure(key)
        }
        else {
            app.ensure([property, direction])
        }
    }

    const [anchorEl, setAnchorEl] = useState(null)
    const [currentSort, setCurrentSort] = useState({})
    const {
        isBrowse,
        listActionIconStyle,
        setSorts,
    } = useContext(ListContext)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = (sort) => {
        if (sort) {
            if (sort.caption) {
                setCurrentSort(sort)
            }
        }
        setAnchorEl(null)
    }

    const resetSort = () => {
        setCurrentSort({})
    }

    useEffect(() => {
        if (currentSort.caption) {
            setSorts([currentSort])
        }
        else {
            setSorts([])
        }
    }, [currentSort])

    return mergedSorts.length > 0 && <>
        <div
            id="sorting"
            className={"flex items-center cursor-pointer " + listActionIconStyle}
        >
            <div
                id="currentSort"
                className="uppercase text-xs text-gray-500 font-light tracking-wider flex items-center"
            >
                {currentSort.caption
                    ?
                    <span onClick={resetSort}>
                        <Tooltip
                            disableInteractive
                            title={t("InfraRemoveSort")}
                        >
                            <CloseIcon fontSize="small" />
                        </Tooltip>
                    </span>
                    :
                    null
                }
                {t(currentSort.caption)}
            </div>
            <div
                className="flex items-center"
                onClick={handleClick}
            >
                {
                    isBrowse
                        ?
                        <Tooltip
                            disableInteractive
                            title={t("InfraSorts")}
                        >
                            <IconButton>
                                <ImportExportIcon />
                            </IconButton>
                        </Tooltip>
                        :
                        <Tooltip
                            disableInteractive
                            title={t("InfraSorts")}
                        >
                            <ImportExportIcon />
                        </Tooltip>
                }
            </div>
        </div>
        <Menu
            id="sortsMenu"
            anchorEl={anchorEl}
            keepMounted
            PaperProps={{
                className: "dark:bg-stone-900"
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: app.isRtl() ? "left" : "right",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: app.isRtl() ? "left" : "right",
            }}
        >
            {
                mergedSorts.map((sort, index) => <MenuItem
                    key={index}
                    onClick={(event) => {
                        handleClose(sort)
                        event.preventDefault()
                    }}
                >
                    <ListItemIcon>
                        {
                            sort.direction === "asc"
                            &&
                            <ArrowDownwardIcon />
                        }
                        {
                            sort.direction === "desc"
                            &&
                            <ArrowUpwardIcon />
                        }
                        {
                            sort.icon && <HolismIcon icon={sort.icon} />
                        }
                    </ListItemIcon>
                    <ListItemText>{t(sort.caption)}</ListItemText>

                </MenuItem>)
            }
        </Menu>
    </>
}

export default Sorting
