import {
    LabelValue,
    MultiCol,
} from "Panel"
import { EntityActions } from "List"
import { AssignedSettingsProperty } from "Settings"
import { SourceProperty } from "Aggregates"
import {
    ContentTypeProperty,
    useDashboard,
} from "DashboardsCommon"

const Block = ({ block }) => {

    const { getColsAndRows } = useDashboard()

    return <div className={`block bg-white dark:bg-stone-800 md:rounded-md p-4 ${getColsAndRows(block)} flex flex-col justify-between`}>
        <LabelValue
            label="InfraTitle"
            value={<h1 className="flex-1">{block.title}</h1>}
        />
        <SourceProperty />
        <LabelValue
            label="DashboardsContentType"
            value={<ContentTypeProperty />}
        />
        <AssignedSettingsProperty />
        <div>
            <EntityActions />
        </div>
    </div>
}

export default Block
