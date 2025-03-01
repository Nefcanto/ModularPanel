import { List } from "List"
import {
    AdvertisementEntityActions,
    AdvertisementForm,
    AdvertisementHeaders,
} from "AdvertisementsCommon"
import filters from "./Filters"
import listActions from "./ListActions"
import Row from "./Row"

const Advertisements = () => {

    return <List
        create={AdvertisementForm}
        entityActions={AdvertisementEntityActions}
        entityType="Advertisement"
        filters={filters}
        hasContent
        hasDelete
        hasEdit
        headers={AdvertisementHeaders}
        listActions={listActions}
        module="Advertisements"
        row={Row}
        title="AdvertisementsAdvertisements"
    />
}

export default Advertisements
