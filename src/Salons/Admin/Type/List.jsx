import {
    Image,
    List,
    Text,
    Title,
    TitleSubtitle,
    ValueWithTitle,
} from "List"
import TypeForm from "./Form"

const filters = <>
    <Title />
    <Text
        property="Slug"
        placeholder="Slug"
    />
</>

const headers = <>
    <th></th>
    <th start>Title</th>
</>

const row = entity => <>
    <Image />
    <TitleSubtitle
        subtitle={entity.slug}
        title={<ValueWithTitle
            value={entity.title.cut(30)}
        />}
    />
</>

const Types = () => {
    return <List
        title="SalonsType"
        entityType="SalonType"
        filters={filters}
        headers={headers}
        create={TypeForm}
        row={row}
        hasEdit
        hasDelete
    />
}

export default Types
