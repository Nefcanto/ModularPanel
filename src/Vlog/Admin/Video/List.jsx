import { List } from "List"
import CreateForm from "./CreateForm"
import EditForm from "./EditForm"
import EntityActions from "./EntityActions"
import filters from "./Filters"
import headers from "./Headers"
import listActions from "./ListActions"
import Row from "./Row"

const Videos = () => {
    return <List
        create={CreateForm}
        edit={<EditForm />}
        entityActions={EntityActions}
        entityType="VlogVideo"
        filters={filters}
        hasDelete
        headers={headers}
        listActions={listActions}
        module="Vlog"
        row={Row}
        separateRowForActions
        title="VlogVideos"
    />
}

export default Videos
