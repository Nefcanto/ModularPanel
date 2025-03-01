import { Lookup } from "Form"

const CurrencyPrefixField = props => {
    return <Lookup
        autocomplete
        choose={i => i.guid}
        display={i => i.financialName}
        entityType="CurrencyPrefix"
        placeholder="UnitsPrefix"
        property="Prefix"
        props
    />
}

export default CurrencyPrefixField
