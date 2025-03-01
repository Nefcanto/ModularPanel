import {
    KeySegmentProperty,
    List,
    TitleSort,
    ValueWithTitle,
} from "List"
import { EntitySeo } from "Seo"
import Form from "./Form"
import ManageField from "../Field/Manage"
import ManageSavedForm from "../SavedForm/Manage"

const sorts = [
    ...TitleSort,
    {
        caption: "FormsMostFields",
        property: "FieldsCount",
        direction: "desc"
    },
    {
        caption: "FormsFewestFields",
        property: "FieldsCount",
        direction: "asc"
    }
]

const headers = <>
    <th superAdmin>InfraKey</th>
    <th>InfraTitle</th>
    <td>FormsFieldsCount</td>
</>

const row = entity => <>
    <KeySegmentProperty />
    <td>
        <ValueWithTitle
            title={entity.description}
            value={entity.title}
        />
    </td>
    <td>{entity.fieldsCount}</td>
</>

const entityActions = entity => <>
    <EntitySeo />
    <ManageSavedForm />
    <ManageField />
</>

const Forms = ({ isSuperAdmin }) => {
    return <List
        create={isSuperAdmin && Form}
        entityActions={entityActions}
        entityType="Form"
        hasContent
        hasDelete={isSuperAdmin}
        hasEdit={isSuperAdmin}
        headers={headers}
        row={row}
        separateRowForActions
        sorts={sorts}
        title="FormsForms"
    />
}

export default Forms
