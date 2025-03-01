import {
    BooleanProperty,
    List,
} from "List"

const headers = <>
    <th>CommissionsIsDebtor</th>
    <th>CommissionsIsCreditor</th>
    <th>PricingAmount</th>
    <th>CurrenciesCurrency</th>
</>

const row = entity => <>
    <BooleanProperty
        value={entity.isDebtor}
    />
    <BooleanProperty
        value={entity.isCreditor}
    />
    <td>{entity?.pricingPriceAmount?.toLocaleString()}</td>
    <td>{entity?.currenciesCurrencySuperUnitName || entity?.currenciesCurrencyName}</td>
</>

const CommissionTotals = props => {
    return <List
        {...props}
        title="CommissionsCommissionsTotals"
        entityType="CommissionTotal"
        headers={headers}
        row={row}
    />
}

export default CommissionTotals
