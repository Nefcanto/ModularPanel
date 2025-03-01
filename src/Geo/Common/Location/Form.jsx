import {
    DialogForm,
    Hidden,
    Text,
} from "Form"
import GeoFields from "../GeoFields"

const LocationForm = ({
    entityGuid,
    entityType,
    module,
}) => {

    const inputs = <>
        <GeoFields
            entityType={entityType}
            module={module}
            required
        />
        <Text
            property="Latitude"
        />
        <Text
            property="Longitude"
        />
        <Hidden
            property="Entity"
            value={entityGuid}
        />
        <Hidden
            property="EntityType"
            value={entityType}
        />
        <Hidden
            property="Module"
            value={module}
        />
    </>

    return <DialogForm
        alwaysEdit
        entityLoadingUrl={`/location/getByEntity?entity=${entityGuid}`}
        entityType="Location"
        inputs={inputs}
        submitTo="/location/upsert"
        title="GeoLocation"
        uniqueIdentifierExtractor={() => entityGuid}
    />
}

export default LocationForm
