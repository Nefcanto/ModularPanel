import {
    Image,
    List,
    Text,
} from "List"
import SocialProfileForm from "./Form"

const filters = <>
    <Text
        property="SocialNetworkTitle"
        placeholder="InfraType"
    />
</>

const headers = <>
    <th></th>
    <th>ContactsSocialProfile</th>
    <th>InfraTitle</th>
    <th>InfraValue</th>

</>

const row = entity => <>
    <Image
        url={entity.relatedItems.socialNetworkImageUrl}
    />
    <td>{entity.socialNetworkTitle}</td>
    <td>{entity.title}</td>
    <td>{entity.value}</td>
</>

const SocialProfiles = props => {
    return <List
        title="ContactsSocialProfiles"
        entityType="SocialProfile"
        filters={filters}
        headers={headers}
        row={row}
        create={SocialProfileForm}
        hasEdit
        hasDelete
        {...props}
    />
}

export default SocialProfiles
