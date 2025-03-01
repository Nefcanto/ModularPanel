import {
    List,
    Title,
} from "List"
import AnnouncementForm from "./Form"

const filters = <>
    <Title />
</>

const headers = <>
    <th>InfraTitle</th>
    <th>Text</th>
</>

const row = entity => <>
    <td>{entity.title}</td>
    <td>{entity.text.cut(30)}</td>
</>

const Announcements = () => {
    return <List
        title="AnnouncementsAnnouncements"
        entityType="Announcement"
        filters={filters}
        headers={headers}
        row={row}
        create={AnnouncementForm}
        hasDelete
    />
}

export default Announcements
