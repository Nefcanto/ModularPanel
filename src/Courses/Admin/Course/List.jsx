import {
    Boolean,
    BooleanProperty,
    Chip,
    Image,
    List,
    Title,
    TitleSort,
} from "List"
import {
    CourseTitle,
    DeliveryFilter,
    Images,
    PricingFilter,
    StateFilter,
    StateProperty,
} from "CoursesCommon"
import CourseForm from "./Form"
import entityActions from "./EntityActions"
import listActions from "./ListActions"

const filters = <>
    <Title />
    {StateFilter}
    <Boolean
        label="CoursesFeatured"
        property="Featured"
    />
    {PricingFilter}
    {DeliveryFilter}
</>

const sorts = [
    ...TitleSort
]

const headers = <>
    <th></th>
    <th start>InfraTitle</th>
    <th>CoursesImages</th>
    <th>CoursesFeatured</th>
    <th>CoursesDelivery</th>
    <th>CoursesState</th>
</>

const row = entity => <>
    <Image />
    {CourseTitle(entity)}
    {Images(entity)}
    <BooleanProperty
        actionUrl={`/course/toggleBoolean?id=${entity.id}&property=Featured`}
        nullForFalse
        value={entity.featured}
    />
    <td>
        <Chip
            className="bg-slate-200"
            text={entity.hasOfflineAccess ? "CoursesOffline" : "CoursesOnline"}
        />
    </td>
    {StateProperty(entity)}
</>

const Courses = ({
    entityType,
    title,
}) => {
    return <List
        edit={CourseForm}
        entityActions={entityActions}
        entityType="Course"
        filters={filters}
        headers={headers}
        listActions={listActions}
        row={row}
        separateRowForActions
        sorts={sorts}
        title="CoursesCourses"
    />
}

export default Courses
