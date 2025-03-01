import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot"
import BubbleChartIcon from "@mui/icons-material/BubbleChart"
import {
    ListAction,
    ListActionsMenu,
} from "List"
import BatchPricingDialog from "./BatchPricingDialog"

const BatchPricingListActions = () => {

    return <ListActionsMenu
        icon={AttachMoneyIcon}
        title="PricingBatchPricing"
    >
        <ListAction
            dialog={BatchPricingDialog}
            icon={ScatterPlotIcon}
            title="InfraHomogenous"
        />
        <ListAction
            icon={BubbleChartIcon}
            onClick={({ toggleState }) => toggleState("PricingBatchPricing")}
            title="InfraHeterogenous"
        />
    </ListActionsMenu>
}

export default BatchPricingListActions
