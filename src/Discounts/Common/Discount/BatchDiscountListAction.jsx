import DiscountIcon from "@mui/icons-material/Discount"
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot"
import BubbleChartIcon from "@mui/icons-material/BubbleChart"
import {
    ListAction,
    ListActionsMenu,
} from "List"
import BatchDiscountDialog from "./BatchDiscountDialog"

const BatchDiscountListAction = () => {

    return <ListActionsMenu
        icon={DiscountIcon}
        title="DiscountsBatchDiscount"
    >
        <ListAction
            dialog={BatchDiscountDialog}
            icon={ScatterPlotIcon}
            title="InfraHomogenous"
        />
        <ListAction
            icon={BubbleChartIcon}
            onClick={({ toggleState }) => toggleState("DiscountsBatchDiscount")}
            title="InfraHeterogenous"
        />
    </ListActionsMenu>
}

export default BatchDiscountListAction
