import { List } from "List"
import EntityActions from "./EntityActions"
import Headers from "./Headers"
import ListActions from "./ListActions"
import PlaceForm from "./Form"
import Row from "./Row"

const Places = ({
    entityActions,
    entityType,
    listActions,
    ...rest
}) => {

    return <List
        create={<PlaceForm entityType={entityType} />}
        entityActions={entityActions ?? EntityActions}
        entityType={entityType ?? "Place"}
        hasContent
        hasDelete
        hasEdit
        headers={Headers}
        listActions={listActions ?? ListActions}
        row={Row}
        title="PlacesPlaces"
        {...rest}
    />
}

export default Places
