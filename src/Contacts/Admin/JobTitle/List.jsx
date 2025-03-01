import {
    List,
} from "List"
import JobTitleForm from "./Form"

const headers = <>
    <th>ContactsJobTitle</th>
</>

const row = entity => <>
    {
        <>
            <div>{entity.text}</div>
        </>
    }
</>

const JobTitles = props => {
    return <List
        title="ContactsJobTitles"
        entityType="JobTitle"
        headers={headers}
        row={row}
        create={JobTitleForm}
        {...props}
    />
}

export default JobTitles
