import { List } from "List"
import TemplateForm from "./Form"
import card from "./Card"

const Templates = () => <List
    card={card}
    create={TemplateForm}
    entityType="Template"
    hasDelete
    hasEdit
    title="TemplatesTemplates"
/>

export default Templates
