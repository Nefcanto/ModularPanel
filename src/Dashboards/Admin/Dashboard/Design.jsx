// todo: use react-resizable
import StraightenIcon from "@mui/icons-material/Straighten"
import CategoryIcon from "@mui/icons-material/Category"
import { EntityContext } from "Contexts"
import {
    EntityAction,
    List,
} from "List"
import { AssignSettings } from "Settings"
import { ChooseSource } from "Aggregates"
import { useDashboard } from "DashboardsCommon"
import BlockForm from "../Block/Form"
import Dimensions from "../Block/Dimensions"
import ContentType from "../Block/ContentType"
import Block from "./Block"

const entityActions = entity => <>
    <EntityAction
        dialog={Dimensions}
        icon={StraightenIcon}
        title="DashboardsDimensions"
    />
    <ChooseSource />
    <EntityAction
        dialog={ContentType}
        icon={CategoryIcon}
        title="DashboardsContentType"
    />
    <AssignSettings />
</>

const entitiesJsx = dashboardStyle => data => <div className={`${dashboardStyle} pt-2`} >
    {
        data?.map(entity => <EntityContext.Provider
            key={entity.id}
            value={{
                entity: entity
            }}
        >
            <Block block={entity} />
        </EntityContext.Provider>)
    }
</div>

const Design = () => {

    const { dashboardStyle } = useDashboard()

    return <List
        all
        create={BlockForm}
        entitiesJsx={entitiesJsx(dashboardStyle)}
        entityActions={entityActions}
        entityType="Block"
        hasDelete
        hasEdit
        title="DashboardsDesign"
    />
}

export default Design
