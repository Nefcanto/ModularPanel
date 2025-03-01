import { Browse } from "Form"
import card from "./Card"

const QueryField = <Browse
    byKey
    choose={entity => entity.key}
    entityType="Query"
    placeholder="InfraQuery"
    property="Query"
    card={card}
    required
    show={entity => entity.title}
/>

export default QueryField
