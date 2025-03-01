import {
    DialogForm,
    LongText,
} from "Form"
import { NaturalPersonField } from "ContactsCommon"
import JuridicalPersonField from "../JuridicalPerson/Field"

const inputs = <>
    <NaturalPersonField />
    <JuridicalPersonField />
    <LongText
        property="Description"
        placeholder="InfraDescription"
    />
</>

const RelationForm = <DialogForm
    title="ContactsRelation"
    entityType="Relation"
    inputs={inputs}
/>

export default RelationForm
