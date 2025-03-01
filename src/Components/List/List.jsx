import { useState } from "react"
import Collapse from "@mui/material/Collapse"
import { camelize } from "App"
import { ListContext } from "Contexts"
import {
    useList,
    useLocalStorage,
    useTop,
} from "Hooks"
import Filtering from "./Filtering"
import Entities from "./Entities"
import ListParameters from "./ListParameters"
import ListActions from "./ListActions/ListActions"
import ErrorBoundary from "../ErrorBoundary"

const List = props => {

    const {
        breadcrumbItems,
        entityType,
        filters,
        subtitle,
        title,
    } = props

    // todo: useMemo and count the number of `property` in this filters. Then set that as filterablesCount. And in useList wait for filterables to become that number and then load. If there are not filterables, then load.

    const listActionIconStyle = "text-gray-700 hover:text-blue-500 dark:text-white cursor-pointer"
    const [hiddenEntityActions, setHiddenEntityActions] = useLocalStorage({
        initialValue: false,
        defaultValue: false,
        key: `${camelize(entityType)}_isEntityActionsHidden`
    })
    const [showTopPagination, setTopPaginationVisibility] = useLocalStorage({
        initialValue: true,
        defaultValue: true,
        key: `${camelize(entityType)}_isTopPaginationShown`
    })
    const [hasEntitySelection, setHasEntitySelection] = useState(false)
    const [dialogProps, setDialogProps] = useState({})
    const [width, setWidth] = useLocalStorage({
        initialValue: null,
        defaultValue: null,
        key: `${camelize(entityType)}_width`
    })

    const listProps = useList(props)
    window.listProps = listProps

    useTop({
        breadcrumbItems,
        subtitle,
        title,
    })

    return <ErrorBoundary>
        <ListContext.Provider value={{
            ...props,
            ...listProps,
            dialogProps,
            hasEntitySelection,
            hiddenEntityActions,
            listActionIconStyle,
            setDialogProps,
            setHasEntitySelection,
            setHiddenEntityActions,
            setTopPaginationVisibility,
            setWidth,
            showTopPagination,
            width,
        }}>

            <div className="list flex-1 flex flex-col">
                <div
                    className="lg:flex items-center justify-between px-6 py-2 lg:h-14 "
                    onScroll={() => {
                        setScrollPosition(window.scrollY)
                        console.log(window.scrollY)
                    }}
                >
                    <ListActions />
                    <ListParameters />
                </div>

                <Collapse
                    className="filteringWrapper"
                    in={listProps.isFilteringOpen}
                >
                    <div className="mb-2">
                        <Filtering filters={filters} />
                    </div>
                </Collapse>

                <Entities />
            </div>

        </ListContext.Provider>
    </ErrorBoundary>
}

export default List
