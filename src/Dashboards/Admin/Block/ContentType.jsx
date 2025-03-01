import {
    DialogForm,
    Enum,
} from "Form"

const inputs = <>
    <Enum
        byKey
        entityType="ContentType"
        placeholder="InfraType"
        property="ContentType"
        required
    />
</>

const ContentType = () => <DialogForm
    entityType="Block"
    inputs={inputs}
    title="DashboardsContentType"
/>

export default ContentType
