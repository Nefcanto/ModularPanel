import {
    useContext,
    useState,
} from "react"
import Tooltip from "@mui/material/Tooltip"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import {
    isRtl,
    t,
} from "App"
import { ListContext } from "Contexts"
import HolismIcon from "../../HolismIcon"
import Unify from "../../Unify"

const ListActionsMenu = ({
    children,
    icon,
    minCardinality,
    title,
}) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [open, setOpen] = useState(false)

    const handleMenuIconClick = (e) => {
        if (!anchorEl) {
            setAnchorEl(e.currentTarget)
        }
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const {
        hasData,
        selectedEntities,
    } = useContext(ListContext)
    const disabled =
        (minCardinality && !hasData) ||
        (minCardinality && minCardinality > selectedEntities.length)
    const listActionClass = `me-2 mt-2 lg:mt-0 `

    const iconButton = <IconButton
        disabled={disabled}
        onClick={handleMenuIconClick}
        className={listActionClass}
    >
        <HolismIcon icon={icon} />
    </IconButton>

    return <div>
        <span className="listActionMenu relative">
            {
                title
                    ?
                    <Tooltip
                        disableInteractive
                        title={t(title || "")}
                    >
                        <span>
                            {iconButton}
                        </span>
                    </Tooltip>
                    :
                    iconButton
            }
        </span>
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: isRtl() ? "right" : "left",
            }}
            onClose={handleClose}
            open={open}
            transformOrigin={{
                vertical: "top",
                horizontal: isRtl() ? "right" : "left",
            }}
        >

            {
                children.map
                    ?
                    children.map((listAction, index) => <Unify
                        key={index}
                        component={listAction}
                        menuItem
                        isInsideMenu
                        closeMenu={handleClose}
                    />)
                    :
                    <Unify
                        component={children}
                        menuItem
                    />
            }
        </Menu>
    </div>
}

export default ListActionsMenu
