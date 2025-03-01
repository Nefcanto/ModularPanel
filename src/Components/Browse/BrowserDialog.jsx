import {
    forwardRef,
    useContext,
} from "react"
import IconButton from "@mui/material/IconButton"
import Slide from "@mui/material/Slide"
import Tooltip from "@mui/material/Tooltip"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import CachedIcon from "@mui/icons-material/Cached"
import DialogTitle from "@mui/material/DialogTitle"
import Collapse from "@mui/material/Collapse"
import CloseIcon from "@mui/icons-material/Close"
import FilterListIcon from "@mui/icons-material/FilterList"
import CheckIcon from "@mui/icons-material/Check"
import app, { t } from "App"
import {
    useFilterablesCounter,
    useList,
    useLocalStorage,
} from "Hooks"
import {
    BrowseContext,
    DialogContext,
    ListContext,
} from "Contexts"
import Pagination from "../List/Pagination"
import Filtering from "../List/Filtering"
import Sorting from "../List/Sorting"
import Entities from "../List/Entities"
import EntityAction from "../List/EntityActions/EntityAction"
import HolismIcon from "../HolismIcon"
import Reload from "../List/Reload"

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide
        direction="up"
        ref={ref}
        {...props}
    />
})

const BrowserDialog = () => {

    const listActionIconStyle = "cursor-pointer"
    const {
        open,
        setOpen,
    } = useContext(DialogContext)

    const browseContext = useContext(BrowseContext)
    const {
        card,
        close,
        entityType,
        explicitFilters,
        filters,
        hasSearch,
        headers,
        isTree,
        onSelected,
        row,
        selectedEntity,
        setSelectedEntity,
        sorts,
    } = browseContext

    const filterablesCount = useFilterablesCounter(filters)

    const list = useList({
        ...browseContext,
        filterablesCount,
        isBrowse: true,
    })

    const {
        isFilteringOpen,
        reload,
        setIsFilteringOpen,
    } = list

    const entityActions = <>
        <EntityAction
            icon={<CheckIcon />}
            onClick={({ entity }) => {
                setSelectedEntity(entity)
                if (onSelected instanceof Function) {
                    onSelected(entity)
                }
                if (close instanceof Function) {
                    close()
                }
            }}
            title="Select"
        />
    </>

    return open && <ListContext.Provider value={{
        ...list,
        ...browseContext,
        entityActions,
        listActionIconStyle,
    }}
    >
        <Dialog
            fullScreen
            onClose={() => setOpen(false)}
            open={open}
            TransitionComponent={Transition}
        >
            <DialogTitle
                className="bg-gray-100 dark:bg-gray-800"
            >
                <div className="flex items-center justify-between">
                    <div
                        className="flex gap-4 items-center "
                    >
                        <IconButton
                            onClick={() => setOpen(false)}
                        >
                            <CloseIcon />
                        </IconButton>
                        <span>{t("InfraFind")}</span>
                    </div>
                    <div
                        className="listActions flex-1 flex gap-4 ltr:justify-end rtl:justify-start"
                        dir="ltr"
                    >
                        <Tooltip
                            disableInteractive
                            title={t("InfraReload")}
                        >
                            <IconButton
                                onClick={reload}
                            >
                                <CachedIcon />
                            </IconButton>
                        </Tooltip>
                        {
                            sorts
                            &&
                            <Sorting sorts={sorts} />
                        }
                        <Tooltip
                            disableInteractive
                            title={t(isFilteringOpen ? "InfraHideFilters" : "InfraShowFilters")}
                        >
                            <IconButton
                                onClick={() => setIsFilteringOpen(!isFilteringOpen)}
                            >
                                <FilterListIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </DialogTitle>
            <DialogContent
                className="px-0 dark:bg-stone-950"
            >
                <div
                    className="flex flex-col lg:flex-row"
                >
                    <Collapse
                        in={isFilteringOpen}
                        orientation="horizontal"
                    >
                        <div
                            className="w-72 p-5 hidden lg:block"
                        >
                            <Filtering filters={filters} />
                        </div>
                    </Collapse>
                    <Collapse in={isFilteringOpen}>
                        <div
                            className="w-full sm:w-2/3 md:w-1/2 mx-auto p-5 lg:hidden"
                        >
                            <Filtering filters={filters} />
                        </div>
                    </Collapse>
                    <div
                        className="flex-1 px-5 pt-6"
                    >
                        <Entities />
                    </div>
                </div>
            </DialogContent>
            {
                !isTree &&
                <DialogActions>
                    <Pagination />
                </DialogActions>
            }
        </Dialog>
    </ListContext.Provider>
}

export default BrowserDialog
