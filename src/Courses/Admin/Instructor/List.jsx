import {
    Image,
    List,
} from "List"
import { AddUserAction } from "Accounts"
import { EditPerson } from "Contacts"
import InstructorForm from "./Form"
import { EntitySeo } from "Seo"

const listActions = () => {
    return <>
        <AddUserAction
            entityType="Instructor"
            title="CoursesInstructor"
        />
    </>
}

const headers = <>
    <th></th>
    <th start>ContactsPerson</th>
</>

const row = entity => <>
    <Image />
    <td>{entity.displayName}</td>
</>

const entityActions = entity => <>
    <EntitySeo />
    <EditPerson entity={entity} />
</>

const Instructors = () => {

    return <List
        create={InstructorForm}
        entityActions={entityActions}
        entityType="Instructor"
        hasDelete
        headers={headers}
        listActions={listActions}
        row={row}
        title="CoursesInstructors"
    />
}

export default Instructors
