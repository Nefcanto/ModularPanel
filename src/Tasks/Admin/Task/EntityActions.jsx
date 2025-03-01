import DirectionsRunIcon from "@mui/icons-material/DirectionsRun"
import { EntityAction } from "List"
import {
    ManageCategories,
    ManageTags,
} from "NewTaxonomy"
import { View } from "TasksCommon"
import { EntityStateProperty } from "StateMachines"
import ManageDoers from "./ManageDoers"

const EntityActions = entity => {

    return <>
        <EntityAction
            dialog={ManageDoers}
            icon={DirectionsRunIcon}
            taskId={entity.id}
            title="InfraAssign"
        />
        <ManageTags />
        <ManageCategories />
        <EntityStateProperty />
        <View entity={entity} />
    </>

}


export default EntityActions


