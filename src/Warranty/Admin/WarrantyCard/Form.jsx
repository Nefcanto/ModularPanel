import {
    DateTime,
    DialogForm,
    Numeric,
} from "Form"
import { PersonField } from "Contacts"

const inputs = <>
    <Numeric
        property="WarrantyNumber"
        placeholder="WarrantyWarrantyNumber"
        required
    />
    <DateTime
        placeholder="InfraStartDate"
        property="StartDate"
        required
    />
    <DateTime
        placeholder="InfraEndDate"
        property="EndDate"
        required
    />
    <PersonField
        byGuid
        identifyingValue="PersonGuid"
        required
    />
</>

const ContractForm = props => {
    return <DialogForm
        {...props}
        entityType="WarrantyCard"
        humanReadableEntityType="WarrantyWarrantyCard"
        inputs={inputs}
    />
}

export default ContractForm
