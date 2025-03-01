import DatasetLinkedIcon from "@mui/icons-material/DatasetLinked"
import {
    EntityAction,
    List,
} from "List"
import LinkGroupForm from "./Form"
import filters from "./Filters"
import headers from "./Headers"
import row from "./Row"

const entityActions = entity => <>
    <EntityAction
        goTo={`/seo/links?linkGroup=${entity.guid}&pp=Seo&pt=LinkGroup&pid=${entity.id}`}
        icon={DatasetLinkedIcon}
        title="SeoLinks"
    />
</>

const LinkGroups = () => {
    return <List
        entityActions={entityActions}
        entityType="LinkGroup"
        filters={filters}
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="SeoLinkGroups"
        upsert={LinkGroupForm}
    />
}

export default LinkGroups
