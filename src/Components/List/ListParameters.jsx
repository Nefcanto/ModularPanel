import { ListContext } from "Contexts"
import { useContext } from "react"
import ShowHideTopPagination from "./ShowHideTopPagination"
import ShowHideFiltering from "./ShowHideFiltering"
import Reload from "./Reload"
import ToggleView from "./ToggleView"
import Resize from "./Resize"
import ShowHideEntityActions from "./ShowHideEntityActions"
import Sorting from "./Sorting"
import RemoveState from "./RemoveState"

const ListParameters = () => {

    const {
        isTree,
        multicolumn,
        resizable,
        viewStyle,
        state,
        viewToggle,
    } = useContext(ListContext)

    return <div
        className={
            " flex items-center justify-end gap-2 lg:my-0 "
        }
    >
        {state && <RemoveState />}
        <ShowHideTopPagination />
        <Sorting />
        <ShowHideFiltering />
        <Reload />
        {/* <ConfigureList /> */}
        {(viewStyle === "tabular") && <ShowHideEntityActions />}
        {viewToggle && <ToggleView />}
        {resizable && <Resize />}
    </div>
}

export default ListParameters
