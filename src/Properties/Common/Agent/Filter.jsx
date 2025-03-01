import {
    Browse,
    Text,
} from "List"

const headers = <>
    <td>InfraName</td>
</>

const filters = <>
    <Text
        placeholder="InfraName"
        property="DisplayName"
    />
</>

const row = entity => <>
    <td>{entity?.displayName}</td>
</>

const AgentFilter = () => {
    return <Browse
        choose={entity => entity.person}
        entityType="Agent"
        filters={filters}
        headers={headers}
        loadFrom="/agent/getByPerson"
        placeholder="PropertiesAgent"
        property="Agent"
        row={row}
        show={entity => entity.displayName || entity.contactsPersonDisplayName || entity.accountsUserUserName}
    />
}

export default AgentFilter
