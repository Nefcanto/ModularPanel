import EditAttributesIcon from "@mui/icons-material/EditAttributes"
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"
import {
    EntityAction,
    Image,
    List,
    Title,
    TitleSubtitle,
} from "List"
import { PriceForm } from "PricingCommon"
import TierForm from "./Form"

const filters = <>
    <Title />
</>

const headers = <>
    <th></th>
    <th start>InfraTitle</th>
    <th>InfraSupertitle</th>
    <th>PricingAmount</th>
    <th>PricingCurrency</th>
</>

const row = entity => <>

    <Image />
    <TitleSubtitle
        title={entity.title}
        subtitle={entity.subtitle}
    />
    <td>
        {entity.supertitle}
    </td>
    <td>
        {entity.pricingPriceAmount}
    </td>
    <td>
        {entity.currenciesCurrencyName} - {entity.currenciesCurrencySuperUnitName}
    </td>
</>

const entityActions = entity => <>
    <EntityAction
        title="SubscriptionsAssignAttributes"
        icon={EditAttributesIcon}
        goTo={`/tier/attribute?entityGuid=${entity.guid}&entityType=Tier`}
    />
    <EntityAction
        title="PricingManagePricing"
        icon={MonetizationOnIcon}
        dialog={<PriceForm hasInterval />}
    />
</>

const Tiers = () => {
    return <List
        title="SubscriptionsTiers"
        entityType="Tier"
        filters={filters}
        headers={headers}
        row={row}
        entityActions={entityActions}
        create={TierForm}
        hasEdit
        hasDelete
    />
}

export default Tiers
