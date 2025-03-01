import { List } from "List"
import {
    FileHeaders,
    FileRow,
} from "PropertiesCommon"
import EntityActions from "./EntityActions"

const PropertyFiles = () => {
    return <List
        create="/properties/propertyFile/create?entityType=Property"
        edit={({ entity }) => `/properties/propertyFile/edit?id=${entity.id}&entityType=Property&entityGuid=${entity.guid}`}
        entityActions={EntityActions}
        entityType="PropertyFile"
        hasDelete
        headers={FileHeaders}
        row={FileRow}
        separateRowForActions
        showId
        title="PropertiesFiles"
    />
}

export default PropertyFiles
