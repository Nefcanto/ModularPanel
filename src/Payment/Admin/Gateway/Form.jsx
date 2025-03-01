import {
    DialogForm,
    Key,
    Title,
} from "Form"
import { CurrencyField } from "CurrenciesCommon"
import { PrefixField } from "UnitsCommon"

const inputs = entity => <>
    <Title />
    <Key />
    <CurrencyField />
    <PrefixField />
</>

const GatewayForm = () => {

    return <DialogForm
        entityType="Gateway"
        humanReadableEntityType="PaymentGateway"
        inputs={inputs}
    />
}

export default GatewayForm
