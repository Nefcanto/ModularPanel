import {
    BooleanProperty,
    List,
    Text,
} from "List"
import LocaleCurrencyForm from "./Form"

const filters = <>
    <Text
        placeholder="CurrenciesName"
        property="Name"
    />
    <Text
        property="IsoCode"
        placeholder="CurrenciesIsoCode"
    />
</>

const headers = <>
    <th>CurrenciesName</th>
    <th>CurrenciesIsoCode</th>
    <th>CurrenciesIsDefault</th>
</>

const row = entity => {
    return <>
        <td>
            {entity?.currenciesCurrencyName}
        </td>
        <td>
            {entity?.currenciesCurrencyIsoCode}
        </td>
        <BooleanProperty
            value={entity?.isDefault}
        />
    </>
}

const LocaleCurrencies = () => {
    return <List
        title="CurrenciesLocaleCurrencies"
        entityType="LocaleCurrency"
        breadcrumbItems={[
            {
                title: "CurrenciesLocaleCurrencies"
            }
        ]}
        filters={filters}
        headers={headers}
        row={row}
        create={LocaleCurrencyForm}
        hasEdit
        hasDelete
    />
}

export default LocaleCurrencies
