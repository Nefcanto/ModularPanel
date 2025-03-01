import { List } from "List"
import {
    EntityActions,
    filters,
    headerPattern,
    RowPattern,
    ServiceForm,
} from "ServicesCommon"
import listActions from "./ListActions"

const Services = ({ entityType }) => {

    return <List
        create={<ServiceForm entityType={entityType} />}
        entityActions={EntityActions}
        entityType={entityType ?? "Service"}
        filters={filters}
        hasContent
        hasDelete
        hasEdit
        headers={headerPattern}
        listActions={listActions}
        row={RowPattern}
        separateRowForActions
        title="Services"
    />
}

export default Services
