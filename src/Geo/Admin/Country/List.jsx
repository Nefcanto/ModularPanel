import FlagCircleIcon from "@mui/icons-material/FlagCircle"
import {
    equalTo,
    url,
} from "App"
import {
    EntityAction,
    List,
} from "List"
import CountryForm from "./Form"

const headers = <>
    <th>InfraName</th>
    <th>GeoCapital</th>
    <th>GeoOfficialName</th>
    <th>GeoAlternativeName</th>
    <th>GeoCctld</th>
</>

const row = entity => <>
    <td>{entity?.name}</td>
    <td>{entity?.capital}</td>
    <td>{entity?.officialName}</td>
    <td>{entity?.alternativeName}</td>
    <td ltr>{entity?.cctld}</td>
</>

const entityActions = entity => <>
    <EntityAction
        goTo={url({
            parent: entity,
            path: "/geo/administrativeDivisions",
            query: {
                country: entity.key
            },
        })}
        icon={FlagCircleIcon}
        title="GeoManagementOfAdministrativeDivisions"
    />
</>

const Countries = ({ isSuperAdmin }) => {
    return <List
        create={isSuperAdmin && CountryForm}
        entityActions={entityActions}
        entityType="Country"
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="GeoCountries"
    />
}

export default Countries
