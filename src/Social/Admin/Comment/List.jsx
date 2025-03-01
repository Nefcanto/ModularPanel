import { pascalize } from "App"
import { List } from "List"
import EntityRenderers from "EntityRenderers"
import { AssignEntityTypeSettings } from "Settings"
import StateChip from "./StateChip"
import entityActions from "./EntityActions"
import filters from "./Filters"

const listActions = <>
    <AssignEntityTypeSettings />
</>

const headers = <>
    <th>InfraName</th>
    <th>InfraEmail</th>
    <th>SocialBody</th>
    <th>InfraState</th>
    <th>InfraEntity</th>
</>

const row = entity => <>
    <td>{entity.name}</td>
    <td>{entity.email}</td>
    <td>{entity.body}</td>
    {StateChip(entity)}
    <EntityRenderers
        entity={entity.relatedItems.entity}
        entityType={pascalize(entity.relatedItems.entity?.relatedItems?.entityType)}
        module={pascalize(entity.relatedItems.entity?.relatedItems?.module)}
    />
</>

const Comments = () => {
    return <List
        entityActions={entityActions}
        entityType="Comment"
        filters={filters}
        hasDelete
        headers={headers}
        listActions={listActions}
        row={row}
        title="SocialComments"
    />
}

export default Comments
