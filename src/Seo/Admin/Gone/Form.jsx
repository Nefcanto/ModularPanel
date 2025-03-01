import {
    DialogForm,
    Link,
} from "Form"

const inputs = <>
    <Link
        property="Url"
        placeholder="InfraUrl"
        required
    />
</>

const GoneForm = <DialogForm
    entityType="Gone"
    humanReadableEntityType="SeoGone"
    inputs={inputs}
/>

export default GoneForm
