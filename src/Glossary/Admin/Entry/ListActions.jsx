import {
    DefineCategories,
    DefineTags,
} from "NewTaxonomy"
import { ManageComments } from "Social"
import { AssignEntityTypeSettings } from "Settings"

const ListActions = () => {

    return <>
        <DefineCategories />
        <DefineTags />
        <ManageComments />
        <AssignEntityTypeSettings />
    </>

}

export default ListActions
