import { useContext } from "react"
import {
    EntityContext,
    ListContext,
} from "Contexts"
import {
    TitleSubtitle,
    ValueWithTitle,
} from "List"

const LocationProperty = props => {

    const entity = props?.entity || useContext(EntityContext)?.entity
    const { isTable } = useContext(ListContext)

    let jsx = <>
        {
            entity.geoCityDivisionName &&
            <TitleSubtitle
                subtitle={entity.geoLocationLatitude && entity.geoLocationLongitude && `(${entity.geoLocationLatitude},${entity.geoLocationLongitude})`}
                title={<ValueWithTitle
                    title={`${entity.geoCountryName} - ${entity.geoAdministrativeDivisionName} - ${entity.geoCityName}`}
                    value={entity.geoCityDivisionName}
                />}
            />
        }
    </>

    if (isTable) {
        jsx = <td {...props}>
            {jsx}
        </td>
    }

    return jsx
}

export default LocationProperty
