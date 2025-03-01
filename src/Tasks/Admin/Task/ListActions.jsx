import DirectionsRunIcon from "@mui/icons-material/DirectionsRun"
import { ListAction } from "List"
import {
    DefineCategories,
    DefineTags,
} from "NewTaxonomy"

const ListActions = () => {
    return <>
        <ListAction
            title="TasksDoerManage"
            icon={DirectionsRunIcon}
            url="/doers"
            notApplicableToEntities
        />
        <DefineCategories />
        <DefineTags />
    </>
}

export default ListActions
