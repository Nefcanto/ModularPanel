import {
    DialogForm,
    IsVital,
    Slug,
    Title,
} from "Form"

const inputs = <>
    <Title />
    <Slug />
    <IsVital />
</>

const BoardFrom = () => {

    return <DialogForm
        entityType="Board"
        humanReadableEntityType="ForumsBoard"
        inputs={inputs}
    />

}

export default BoardFrom
