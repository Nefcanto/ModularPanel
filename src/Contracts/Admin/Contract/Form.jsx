import {
    DateTime,
    DialogForm,
    Numeric,
    Title,
} from "Form"

const inputs = entity => <>
    <Title />
    <Numeric
        placeholder="ContractsDocumentNumber"
        property="DocumentNumber"
    />
    <DateTime
        placeholder="ContractsDate"
        property="Date"
    />
</>

const ContractForm = props => {
    return <DialogForm
        {...props}
        entityType="Contract"
        humanReadableEntityType="ContractsContract"
        inputs={inputs}
    />
}

export default ContractForm
