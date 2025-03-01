import { DialogForm } from "Form"
import { PersonField } from "Contacts"

const inputs = <>
    <PersonField byGuid />
</>

const ChangeOwner = <DialogForm
    entityType="Tenant"
    humanReadableEntityType="TenantsChangingOwner"
    inputs={inputs}
/>

export default ChangeOwner
