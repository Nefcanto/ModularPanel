import {
    DialogForm,
    LongText,
    Title,
} from "Form"

const inputs = <>
    <Title />
    <LongText
        property="Description"
        placeholder="InfraDescription"
    />
</>

const TaskForm = () => {
    return <DialogForm
        entityType="Task"
        humanReadableEntityType="TasksCreateTasks"
        inputs={inputs}
    />
}

export default TaskForm
