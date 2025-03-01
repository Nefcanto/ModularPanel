import {
    Chip,
    List,
    Text,
} from "List"
import RedirectForm from "./Form"

const filters = <>
    <Text
        placeholder="SeoOldUrl"
        property="OldUrl"
    />
    <Text
        placeholder="SeoNewUrl"
        property="NewUrl"
    />
</>

const headers = <>
    <th>SeoOldUrl</th>
    <th>SeoNewUrl</th>
    <th>SeoCode</th>
    <th>SeoIsRegex</th>
</>

const row = entity => <>
    <td dir="ltr">{entity.oldUrl}</td>
    <td dir="ltr">{entity.newUrl}</td>
    <td>{entity.code}</td>
    <td>
        <Chip
            className={entity.isRegex ? "bg-green-300" : "bg-slate-200"}
            text={entity.isRegex ? "InfraYes" : "InfraNo"}
        />
    </td>
</>

const Redirects = <List
    create={RedirectForm}
    entityType="Redirect"
    filters={filters}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
    title="SeoRedirects"
/>

export default Redirects
