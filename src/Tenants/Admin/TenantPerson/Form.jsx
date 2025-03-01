import { DialogForm } from "Form"
import { PersonField } from "Contacts"

const inputs = <>
    <PersonField property="Person" />
</>

const TenantPersonForm = <DialogForm
    entityType="TenantPerson"
    humanReadableEntityType="TenantsTenantPerson"
    inputs={inputs}
/>

export default TenantPersonForm
