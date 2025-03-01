import { Browse } from "Form"
import card from "./Card"

const CodeField = <Browse
    byKey
    choose={entity => entity.key}
    entityType="Code"
    placeholder="InfraCode"
    property="Code"
    card={card}
    required
    show={entity => entity.title}
/>

export default CodeField
