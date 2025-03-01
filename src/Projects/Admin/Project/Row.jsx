import {
    BooleanProperty,
    Image,
} from "List"
import { LocationProperty } from "Geo"
import { ProjectTitle } from "ProjectsCommon"

const Row = entity => <>
    <Image />
    {ProjectTitle(entity)}
    <LocationProperty />
    <BooleanProperty
        actionUrl={`/project/toggleBoolean?id=${entity.id}&property=IsActive`}
        value={entity.isActive}
    />
    <BooleanProperty
        actionUrl={`/project/toggleBoolean?id=${entity.id}&property=IsRecommended`}
        value={entity.isRecommended}
    />
</>

export default Row
