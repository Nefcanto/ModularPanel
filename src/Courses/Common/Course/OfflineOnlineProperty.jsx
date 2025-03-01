import { BooleanProperty } from "List"

const OfflineOnlineProperty = ({ entity }) => {

    return <>
        <BooleanProperty
            value={entity.hasOfflineAccess}
            trueLabel="CoursesOnline"
            falseLabel="CoursesOffline"
            actionUrl={`/course/toggleBoolean?id=${entity.id}&property=hasOfflineAccess`}
            className="w-[90px] mx-auto"
        />
    </>
}

export default OfflineOnlineProperty
