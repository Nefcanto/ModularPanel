import LocationCityIcon from "@mui/icons-material/LocationCity"
import { url } from "App"
import {
    EntityAction,
    List,
} from "List"
import AdministrativeDivisionForm from "./Form"

const headers = <>
    <th>InfraName</th>
    <th>InfraSlug</th>
</>

const row = entity => <>
    <td>{entity?.name}</td>
    <td>{entity?.slug}</td>
</>

const entityActions = parent => entity => <>
    <EntityAction
        goTo={url({
            path: "/geo/cities",
            parent: entity,
            grandparent: parent,
            query: {
                administrativeDivision: entity.key,
                country: entity.country,
            }
        })}
        icon={LocationCityIcon}
        title="GeoManagementOfCities"
    />
</>

const AdministrativeDivisions = ({ parent }) => {

    return <List
        create={AdministrativeDivisionForm}
        entityActions={entityActions(parent)}
        entityType="AdministrativeDivision"
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="GeoAdministrativeDivisions"
    />
}

export default AdministrativeDivisions
