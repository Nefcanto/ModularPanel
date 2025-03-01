import {
    DialogForm,
    Text,
} from "Form"

const inputs = <>
    <Text
        property="Bank"
        placeholder="ContactsBank"
    />
    <Text
        property="Branch"
        placeholder="ContactsBranch"
    />
    <Text
        property="AccountNumber"
        placeholder="ContactsAccountNumber"
    />
    <Text
        property="Iban"
        placeholder="ContactsIban"
        required="ContactsIbanIsRequired"
    />
</>

const BankAccountForm = () => {
    return <DialogForm
        title="ContactsCreateBankAccount"
        entityType="BankAccount"
        inputs={inputs}
    />

}

export default BankAccountForm
