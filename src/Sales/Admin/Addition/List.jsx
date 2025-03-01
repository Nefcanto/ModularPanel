import {
    BooleanProperty,
    List
} from "List"
import { SetPrice } from "Pricing"
import AdditionForm from "./Form"

const headers = <>
    <th>SalesReductionType</th>
    <th>SalesHasPercent</th>
    <th>PricingAmount</th>
    <th>CurrenciesCurrency</th>
    <th>SalesPercent</th>
</>

const row = entity => <>
    <td>{entity.additionTypeTitle}</td>
    <BooleanProperty
        value={entity?.hasPercent}
    />
    <td>{entity?.hasPercent ? "-" : entity?.pricingPriceAmount?.toLocaleString()}</td>
    <td>{entity?.currenciesCurrencyName} - {entity?.currenciesCurrencySuperUnitName || entity?.currenciesCurrencySubunitName}</td>
    <td>{entity.hasPercent ? entity.percent : "-"}</td>
</>

const entityActions = entity => <>
    {!entity?.hasPercent && <SetPrice />}
</>

const Additions = () => {

    return <List
        create={AdditionForm}
        entityActions={entityActions}
        entityType="Addition"
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="SalesAdditions"
    />
}

export default Additions
