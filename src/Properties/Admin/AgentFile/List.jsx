import { List } from "List"
import AgentFileForm from "./Form"

const filters = <>

</>

const headers = <>
    <th>PropertiesAgentName</th>
</>

const row = entity => <>
    <td>{entity?.contactsPersonDisplayName}</td>
</>

const AgentFiles = ({
    parentEntity,
    progress
}) => {

    return !progress && <List
        entityType="AgentFile"
        title="PropertiesAgentFiles"
        breadcrumbItems={[
            {
                title: "PropertiesFiles",
                link: "/properties/propertyFiles"
            },
            {
                title: parentEntity?.title,
                link: `/properties/propertyFiles?title=containing_${parentEntity?.title}`
            },
            {
                title: "PropertiesAgentFiles"
            }
        ]}
        headers={headers}
        create={AgentFileForm}
        row={row}
        hasEdit
        hasDelete
    />

}

export default AgentFiles
