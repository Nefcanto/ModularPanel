import {
    BooleanProperty,
    List,
} from "List"
import { SetPrice } from "Pricing"
import ReductionForm from "./Form"

const headers = <>
    <th>SalesReductionType</th>
    <th>SalesHasPercent</th>
    <th>PricingAmount</th>
    <th>CurrenciesCurrency</th>
    <th>SalesPercent</th>
</>

const row = entity => <>
    <td>{entity.reductionTypeTitle}</td>
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

const Reductions = () => {

    return <List
        create={ReductionForm}
        entityActions={entityActions}
        entityType="Reduction"
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="SalesReductions"
    />
}

export default Reductions
