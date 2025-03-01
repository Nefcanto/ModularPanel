import { useContext } from "react"
import {
    ListContext,
    PanelContext,
} from "Contexts"
import Cards from "./EntitiesCards"
import Table from "./EntitiesTable"
import Tree from "./EntitiesTree"
import BlurredProgress from "../BlurredProgress"
import Graph from "../Graph/Graph"

const Entities = () => {

    const { isSidebarOpen } = useContext(PanelContext)

    const {
        all,
        card,
        data,
        entitiesJsx,
        hasData,
        isBrowse,
        isTree,
        loading,
        viewStyle,
        viewToggle,
    } = useContext(ListContext)

    let entities = null
    if (entitiesJsx) {
        entities = entitiesJsx(data)
    }
    else {
        if (viewToggle) {
            if (viewStyle === "tabular") {
                entities = <Table />
            }
            else if (viewStyle === "graph") {
                return <Graph />
            }
            else if (viewStyle === "cards") {
                entities = <Cards />
            }
        }
        else {
            if (isTree) {
                entities = <Tree />
            }
            else {
                if (card) {
                    entities = <Cards />
                }
                else {
                    entities = <Table />
                }
            }
        }
    }

    return <div
        className={
            "entities relative overflow-x-auto max-w-fit"
            + (!all && " flex flex-col justify-start bg-white dark:bg-stone-900 border border-[1px] border-white/40 transition-colors md:rounded-lg items-center justify-center ")
            + (isBrowse ? (hasData ? " min-h-[98px] " : " min-h-[165px] ") : ` flex-1 overflow-y-auto ${!all && " py-6 "}`)
            + (card && " flex-col")
            + " max-w-full "
        }
    >
        <div className={"w-full h-full flex flex-col " + (loading && " blur-xs ")}>
            {entities}
        </div>
        {
            loading &&
            <BlurredProgress />
        }
    </div>
}

export default Entities
