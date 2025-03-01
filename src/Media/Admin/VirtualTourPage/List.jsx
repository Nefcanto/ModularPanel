import {
    Image,
    List,
} from "List"
import {
    EntityFaqPage,
    EntitySeo,
} from "Seo"
import VirtualTourPageForm from "./Form"

const headers = <>
    <th></th>
    <th>InfraTitle</th>
</>

const row = entity => <>
    <Image />
    <td>{entity.title}</td>
</>

const entityActions = entity => <>
    <EntitySeo />
    <EntityFaqPage />
</>

const VirtualTourPages = () => {
    return <List
        entityActions={entityActions}
        entityType="VirtualTourPage"
        hasContent
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="MediaVirtualTourPages"
        upsert={VirtualTourPageForm}
    />
}

export default VirtualTourPages
