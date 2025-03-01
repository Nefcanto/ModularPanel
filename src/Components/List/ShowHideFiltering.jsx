import { useContext } from "react"
import Tooltip from "@mui/material/Tooltip"
import FilterListIcon from "@mui/icons-material/FilterList"
import app from "App"
import { ListContext } from "Contexts"

const ShowHideFiltering = () => {

    const {
        uiFilters,
        hasFilters,
        isFilteringOpen,
        setIsFilteringOpen,
        listActionIconStyle
    } = useContext(ListContext)

    return (uiFilters && (uiFilters.props?.children?.length > 0 || uiFilters.props?.children?.props)) || app.isDev() || app.isSuperAdmin()
        ?
        <span
            id="showHideFiltering"
            className={"relative " + listActionIconStyle}
            onClick={() => setIsFilteringOpen(!isFilteringOpen)}
        >
            {
                hasFilters &&
                <span className="absolute w-2/3 h-2/3 m-auto top-0 end-0 bottom-0 start-0 bg-green-400 animate-ping rounded-full"></span>
            }
            <Tooltip
                disableInteractive
                className="relative z-10"
                title={app.t(isFilteringOpen ? "InfraHideFilters" : "InfraShowFilters")}
            >
                <FilterListIcon className="dark:fill-white font-light" />
            </Tooltip>
        </span>
        :
        null
}

export default ShowHideFiltering
