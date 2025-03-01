import { url } from "App"
import { List } from "List"
import Filters from "./Filters"
import ListActions from "./ListActions"
import Headers from "./Headers"
import Row from "./Row"
import EntityActions from "./EntityActions"

const Properties = () => {

    const editionUrl = ({ entity }) => url({
        path: "/properties/property/edit",
        query: {
            entityGuid: entity.guid,
            id: entity.id,
        },
        granularity: "entity",
        granularityExtractionEntity: entity,
    })

    return <List
        create="/properties/property/create"
        deleteBatch
        edit={editionUrl}
        entityActions={EntityActions}
        entityType="Property"
        filters={Filters}
        hasContent
        hasDelete
        headers={Headers}
        listActions={ListActions}
        module="Properties"
        row={Row}
        separateRowForActions
        showId
        title="PropertiesListOfAds"
    />
}

export default Properties
