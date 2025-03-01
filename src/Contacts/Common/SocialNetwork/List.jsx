import {
    Image,
    List,
    Text,
} from "List"
import SocialNetworkForm from "./Form"

const filters = <>
    <Text
        property="Name"
        placeholder="InfraName"
    />
</>

const headers = <>
    <th></th>
    <th>InfraTitle</th>
    <th>InfraKey</th>
    <th>InfraSlug</th>
</>

const row = entity => {

    return <>
        <Image />
        <td>{entity.key}</td>
        <td>{entity.slug}</td>
        <td>{entity.title}</td>
    </>
}

const SocialNetworks = () => {
    return <List
        title="ContactsSocialNetworks"
        entityType="SocialNetwork"
        create={SocialNetworkForm}
        headers={headers}
        row={row}
        hasEdit
        hasDelete
    />
}

export default SocialNetworks
