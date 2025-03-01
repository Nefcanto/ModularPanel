import PeopleIcon from "@mui/icons-material/People"
import { ListAction } from "List"
import { ManageComments } from "Social"
import {
    DefineCategories,
    DefineTags,
} from "NewTaxonomy"
import { AssignEntityTypeSettings } from "Settings"

const ListActions = () => {

    return <>
        <DefineCategories />
        <DefineTags />
        <ManageComments />
        <ListAction
            icon={PeopleIcon}
            title="BlogAuthors"
            url="/blog/authors"
        />
        <AssignEntityTypeSettings />
    </>
}

export default ListActions
