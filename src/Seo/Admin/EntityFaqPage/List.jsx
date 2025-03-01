import { List } from "List"
import EntityFaqPageForm from "./Form"

const headers = <>
    <th>Question</th>
    <th>Answer</th>
</>

const row = entity => <>
    <td>{entity.question?.cut(50)}</td>
    <td>{entity.answer?.cut(50)}</td>
</>

const EntityFaqPages = () => {
    return <List
        title="SEO FAQ Pages"
        entityType="EntityFaqPage"
        headers={headers}
        row={row}
        create={EntityFaqPageForm}
        hasEdit
        hasDelete
    />
}

export default EntityFaqPages
