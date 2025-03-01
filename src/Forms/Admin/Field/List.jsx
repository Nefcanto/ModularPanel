import {
    BooleanProperty,
    KeySegmentProperty,
    List,
    ValueWithTitle,
} from "List"
import {
    DataTypeFilter,
    DataTypeProperty,
} from "DataTypes"
import ManageChoices from "../Choice/Manage"

const filters = <>
    <DataTypeFilter />
</>

const headers = <>
    <th>InfraKey</th>
    <th>InfraType</th>
    <th>InfraLabel</th>
    <th>FormsPlaceholder</th>
    <th>InfraIsRequired</th>
    <th>InfraIsRtl</th>
</>

const row = entity => <>
    <KeySegmentProperty />
    <td>
        <DataTypeProperty />
    </td>
    <td>{entity.label}</td>
    <td>
        <ValueWithTitle
            title={entity.hint}
            value={entity.placeholder}
        />
    </td>
    <BooleanProperty
        actionUrl={`/field/toggleIsRequired/${entity.id}`}
        value={entity.isRequired}
    />
    <BooleanProperty
        actionUrl={`/field/toggleDirection/${entity.id}`}
        value={entity.direction === "rtl"}
    />
</>

const entityActions = entity => <>
    <ManageChoices />
</>

const Fields = ({
    isSuperAdmin,
    query,
}) => {

    return <List
        create={isSuperAdmin && `/forms/field?${query}`}
        edit={({ entity }) => `/forms/field?${query}&id=${entity.id}`}
        entityActions={entityActions}
        entityType="field"
        filters={filters}
        hasDelete
        headers={headers}
        row={row}
        separateRowForActions
        title="FormsFields"
    />
}

export default Fields
