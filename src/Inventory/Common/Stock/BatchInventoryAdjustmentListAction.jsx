import FactoryIcon from "@mui/icons-material/Factory"
import { get } from "App"
import { ListAction } from "List"

const BatchInventoryAdjustmentListAction = () => {

    const loadAndToggle = ({
        error,
        setProgress,
        state,
        toggleState,
    }) => {
        if (state === "InventoryBatchInventoryAdjustment") {
            toggleState("InventoryBatchInventoryAdjustment")
            return
        }
        setProgress(true)
        get("/warehouse/all")
            .then(data => {
                setProgress(false)
                window.warehouses = data
                toggleState("InventoryBatchInventoryAdjustment")
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <ListAction
        icon={FactoryIcon}
        title="InventoryBatchInventoryAdjustment"
        onClick={loadAndToggle}
    />
}

export default BatchInventoryAdjustmentListAction
