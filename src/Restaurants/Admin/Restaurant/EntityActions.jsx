import CollectionsIcon from "@mui/icons-material/Collections"
import { EntityAction } from "List"
import { ManageTags } from "NewTaxonomy"
import { ManageLocation } from "Geo"
import {
    EntityFaqPage,
    EntitySeo,
} from "Seo"
import { EditPerson } from "Contacts"

const EntityActions = entity => <>
    <EditPerson
        addresses
        entity={entity}
        phones
        profileEdit={false}
        social
    />
    <EntitySeo
        entityGuid={entity.guid}
        entityType="Place"
        module="Places"
    />
    <ManageLocation />
    <EntityFaqPage
        entityGuid={entity.guid}
        entityType="Place"
        module="Places"
    />
    <EntityAction
        goTo={`/restaurant/images?module=Places&entityType=Place&entityGuid=${entity.guid}&pp=Places&pt=Place&pid=${entity.placesPlaceId}`}
        icon={CollectionsIcon}
        title="MediaManageImages"
    />
    <ManageTags />
</>

export default EntityActions
