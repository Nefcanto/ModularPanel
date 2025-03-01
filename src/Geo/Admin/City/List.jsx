import LocationCityIcon from "@mui/icons-material/LocationCity"
import { url } from "App"
import {
    EntityAction,
    List,
} from "List"
import CityForm from "./Form"

const headers = <>
    <th>InfraName</th>
    <th>InfraSlug</th>
</>

const row = entity => <>
    <td>{entity?.name}</td>
    <td>{entity?.slug}</td>
</>

const entityActions = (parent, grandparent) => entity => <>
    <EntityAction
        goTo={url({
            path: "/geo/cityDivisions",
            parent: entity,
            grandparent: parent,
            greatGrandparent: grandparent,
            query: {
                city: entity.key
            }
        })}
        icon={LocationCityIcon}
        title="GeoManagementOfCityDivisions"
    />
</>

const Cities = ({
    parent,
    grandparent,
}) => {
    return <List
        create={CityForm}
        entityActions={entityActions(parent, grandparent)}
        entityType="City"
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="GeoCities"
    />
}

export default Cities
