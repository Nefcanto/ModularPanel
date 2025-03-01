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
        title="TasksCreateTasks"
        entityType="Task"
        inputs={inputs}
    />
}

export default TaskForm
