import { Browse } from "Form"
import card from "./Card"

const TemplateField = <Browse
    byKey
    choose={entity => entity.key}
    entityType="Template"
    placeholder="TemplatesTemplate"
    property="Template"
    card={card}
    required
    show={entity => entity.title}
/>

export default TemplateField
