import {
    DialogForm,
    Key,
    Text,
} from "Form"
import { NaturalOrJuridical } from "Contacts"

const inputs = <>
    <NaturalOrJuridical />
    <Key />
    <Text
        placeholder="TenantsDomain"
        property="Domain"
        required
    />
</>

const TenantForm = <DialogForm
    entityType="Tenant"
    humanReadableEntityType="TenantsTenant"
    inputs={inputs}
/>

export default TenantForm
