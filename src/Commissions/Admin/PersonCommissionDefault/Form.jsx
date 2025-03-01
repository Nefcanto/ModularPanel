import {
    Check,
    DialogForm,
    Numeric,
} from "Form"
import { PersonField } from "Contacts"

const inputs = entity => <>
    <PersonField />
    <Numeric
        property="DefaultCommissionValue"
        placeholder="CommissionsDefaultCommissionValue"
        required
    />
    <Check
        property="IsPercentageCommission"
        placeholder="CommissionsIsPercentage"
    />
</>

const PersonCommissionDefaultFrom = props => {
    return <DialogForm
        {...props}
        entityType="PersonCommissionDefault"
        humanReadableEntityType="CommissionsPersonCommissionDefault"
        inputs={inputs}
    />
}

export default PersonCommissionDefaultFrom
