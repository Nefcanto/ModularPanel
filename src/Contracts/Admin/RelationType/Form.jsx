import {
    DialogForm,
    Title,
} from "Form"

const inputs = entity => <>
    <Title />
</>

const RelationTypeForm = props => {
    return <DialogForm
        {...props}
        entityType="RelationType"
        humanReadableEntityType="ContractsRelationType"
        inputs={inputs}
    />
}

export default RelationTypeForm
