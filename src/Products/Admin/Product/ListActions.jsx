import RouteIcon from "@mui/icons-material/Route"
import { ListAction } from "List"
import { ManageComments } from "Social"
import {
    DefineCategories,
    DefineTags,
} from "NewTaxonomy"
import { DefineAttributes } from "Attributes"
import { AssignEntityTypeSettings } from "Settings"
import { NewBatchPricingListActions } from "Pricing"
import { BatchInventoryAdjustmentListAction } from "Inventory"
import { BatchDiscountListAction } from "Discounts"

const ListActions = () => {

    return <>
        <DefineCategories />
        <DefineTags />
        <DefineAttributes />
        <ManageComments />
        <AssignEntityTypeSettings />
        <ListAction
            icon={RouteIcon}
            title="FlowsFlows"
            url="/flows/flows?entityType=product"
        />
        <NewBatchPricingListActions />
        <BatchInventoryAdjustmentListAction />
        <BatchDiscountListAction />
    </>
}

export default ListActions
