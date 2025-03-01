import { useContext } from "react"
import InventoryIcon from "@mui/icons-material/Inventory"
import { EntityAction } from "List"
import { EntityContext } from "Contexts"
import { url } from "App"

const ManageStock = () => {

    const { entity } = useContext(EntityContext || {})

    return <EntityAction
        goTo={url({
            path: "/inventory/stocks",
            granularity: "entity",
            granularityExtractionEntity: entity,
            parent: entity,
        })}
        icon={InventoryIcon}
        title="InventoryStock"
    />
}

export default ManageStock
