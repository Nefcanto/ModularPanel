import { List } from "List"
import { PersonImage } from "Contacts"

const headers = <>
    <th></th>
    <th>InfraName</th>
</>

const row = entity => <>
    <PersonImage
        person={entity}
    />
    <td>
        {entity.displayName}
    </td>
</>

const RangeManagerAgents = ({ parentEntity }) => {
    return <List
        breadcrumbItems={[
            {
                title: "PropertiesRangeManagers",
                link: "/properties/rangeManagers"
            },
            {
                title: parentEntity?.contactsPersonDisplayName
            }
        ]}
        entityType="Agent"
        hasDelete
        headers={headers}
        row={row}
        title="PropertiesRangeManagerAgents"
    />
}

export default RangeManagerAgents
