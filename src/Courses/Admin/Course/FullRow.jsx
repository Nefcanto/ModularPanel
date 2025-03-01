import {
    BooleanProperty,
    EnumProperty,
    Image,
} from "List"
import { Thumbnails } from "Media"
import { CourseTitle } from "Courses"

const row = entity => {

    const styleProvider = enumKey => {
        switch (enumKey.toLowerCase()) {
            case "approved":
                return "bg-green-300"
            case "new":
            case "edited":
                return "bg-blue-300"
            case "rejected":
            default:
                return "bg-red-300"
        }
    }

    return <>
        <Image />
        {CourseTitle(entity)}
        <Thumbnails />
        <BooleanProperty
            actionUrl={`/course/toggleBoolean?id=${entity.id}&property=Featured`}
            nullForFalse
            value={entity.featured}
        />
        <EnumProperty
            actionUrl={`/course/changeState/${entity.id}`}
            currentKey={entity.state}
            currentKeyTranslation={entity.relatedItems.stateTranslation}
            currentStyle={styleProvider(entity.state)}
            enumeration="CoursesState"
            property="State"
            styleProvider={styleProvider}
        />
    </>
}

export default row
