import {
    Boolean,
    List,
    Title,
} from "List"
import CourseForm from "./FullForm"
import entityActions from "./FullEntityActions"
import row from "./FullRow"
import listActions from "./ListActions"

const filters = <>
    <Title />
    <Boolean
        label="CoursesFeatured"
        property="Featured"
    />
</>

const headers = <>
    <th></th>
    <th start>InfraTitle</th>
    <th>CoursesImages</th>
    <th>CoursesFeatured</th>
</>

const FullCourses = () => {
    return <List
        entityActions={entityActions}
        entityType="Course"
        filters={filters}
        hasContent
        headers={headers}
        listActions={listActions}
        row={row}
        separateRowForActions
        title="CoursesCourses"
        upsert={CourseForm}
    />
}

export default FullCourses
