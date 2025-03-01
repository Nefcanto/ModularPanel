import {
    DialogForm,
    Link,
    Title,
} from "Form"

const inputs = <>
    <Title />
    <Link
        property="Url"
        placeholder="InfraUrl"
    />
</>

const LinkForm = <DialogForm
    entityType="Link"
    humanReadableEntityType="SeoLink"
    inputs={inputs}
/>

export default LinkForm
