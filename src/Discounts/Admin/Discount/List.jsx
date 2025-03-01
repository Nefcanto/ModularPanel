import CategoryIcon from "@mui/icons-material/Category"
import DateRangeIcon from "@mui/icons-material/DateRange"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import {
    EntityAction,
    List,
    ListAction,
} from "List"
import { GranularityFilter } from "Granularities"
import DiscountForm from "./Form"
import QuantityDialog from "./Quantity"
import DateRangeDialog from "./DateRange"
import card from "./Card"

const filters = <>
    <GranularityFilter />
</>

const listActions = <>
    <ListAction
        icon={CategoryIcon}
        title="InfraTypes"
        url="/discountTypes"
    />
</>

const entityActions = <>
    <EntityAction
        dialog={DateRangeDialog}
        icon={DateRangeIcon}
        title="InfraDateRange"
    />
    <EntityAction
        dialog={QuantityDialog}
        icon={AttachMoneyIcon}
        title="InfraQuantity"
    />
</>

const Discounts = () => {
    return <List
        card={card}
        create={DiscountForm}
        entityActions={entityActions}
        entityType="Discount"
        filters={filters}
        hasActivation
        hasDelete
        hasEdit
        listActions={listActions}
        title="DiscountsDiscounts"
    />
}

export default Discounts
