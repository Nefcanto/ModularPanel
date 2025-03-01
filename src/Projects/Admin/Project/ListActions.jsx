import { DefineAttributes } from "Attributes"
import { QueryParametersListActions } from "Seo"
import {
    DefineCategories,
    DefineTags,
} from "NewTaxonomy"
import { ManageComments } from "Social"
import { AssignEntityTypeSettings } from "Settings"

const ListActions = () => <>
    <QueryParametersListActions
        entityType="Project"
        module="Projects"
        returnTo="/projects"
    />
    <DefineAttributes />
    <DefineCategories />
    <DefineTags />
    <ManageComments />
    <AssignEntityTypeSettings />
</>

export default ListActions
