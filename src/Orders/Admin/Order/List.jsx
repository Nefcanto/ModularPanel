import ListAltIcon from "@mui/icons-material/ListAlt"
import { t } from "App"
import {
    EntityAction,
    List,
} from "List"
import {
    ManageAddition,
    ManageReduction,
} from "Sales"
import { AssignAttributes } from "Attributes"
import { ManageEntityStages } from "Flows"
import {
    DefineCategories,
    DefineTags,
    ManageCategories,
    ManageTags,
} from "NewTaxonomy"
import headers from "./Headers"
import row from "./Row"
import card from "./Card"
import OrderForm from "./Form"
import filters from "./Filters"

const listActions = <>
    <DefineCategories />
    <DefineTags />
</>

const sorts = [
    {
        caption: "InfraNewest",
        direction: "desc",
        property: "UtcDate"
    },
    {
        caption: "InfraOldest",
        direction: "asc",
        property: "UtcDate"
    },
    {
        caption: "MonetaryValuesHighestValue",
        direction: "desc",
        property: "TotalValue"
    },
    {
        caption: "MonetaryValuesLowestValue",
        direction: "asc",
        property: "TotalValue"
    },
    {
        caption: "DiscountsHighestDiscount",
        direction: "desc",
        property: "TotalDiscounts"
    },
    {
        caption: "DiscountsLowestDiscount",
        direction: "asc",
        property: "TotalDiscounts"
    },
    {
        caption: "OrdersMostItems",
        direction: "desc",
        property: "ItemsCount"
    },
    {
        caption: "OrdersFewestItems",
        direction: "asc",
        property: "ItemsCount"
    }
]

const entityActions = entity => <>
    <ManageCategories />
    <ManageTags />
    <EntityAction
        goTo={`/orders/orderItems?order=${entity.guid}`}
        icon={ListAltIcon}
        title="OrdersOrderItems"
    />
    <ManageEntityStages />
    <AssignAttributes />
    <ManageReduction />
    <ManageAddition />
</>

const Orders = ({
    progress,
    relatedItem,
}) => {

    const getTitle = () => {
        if (relatedItem) {
            if (Array.isArray(relatedItem)) {
                return `${t("OrdersOrders")} - ${relatedItem.map(i => i.title).join(" - ")}`
            }
            else {
                return `${t("OrdersOrders")} - ${relatedItem.title}`
            }
        }
        return "OrdersOrders"
    }

    return !progress && <List
        card={card}
        create={OrderForm}
        entityActions={entityActions}
        entityType="Order"
        filters={filters}
        hasDelete
        hasSearch
        headers={headers}
        listActions={listActions}
        menuForActions
        module="Orders"
        resizable
        row={row}
        separateRowForActions
        sorts={sorts}
        title={getTitle()}
    />
}

export default Orders
