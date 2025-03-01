import { List } from "List"
import LevelForm from "./Form"

const headers = <>
    <th>InfraKey</th>
    <th>InfraSlug</th>
    <th>InfraTitle</th>
</>

const row = entity => <>
    <td>{entity.key}</td>
    <td>{entity.slug}</td>
    <td>{entity.title}</td>
</>

const Levels = <List
    create={LevelForm}
    entityType="CourseLevel"
    headers={headers}
    row={row}
    title="CoursesLevels"
/>

export default Levels
