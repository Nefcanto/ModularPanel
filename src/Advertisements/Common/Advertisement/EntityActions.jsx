import ContactsIcon from "@mui/icons-material/Contacts"
import { EntityAction } from "List"
import {
    ManageCategories,
    ManageTags,
} from "NewTaxonomy"
import {
    EntityFaqPage,
    EntitySeo,
} from "Seo"
import {
    ManageImages,
    ManageVideos
} from "Media"
import { ManagePlaces } from "Places"

const EntityActions = entity => <>

    <EntitySeo />
    <EntityFaqPage />
    <ManageImages />
    <ManageVideos />
    <ManageTags />
    <ManageCategories />
    <ManagePlaces
        goTo={`/advertisements/advertisementPlaces?advertisementId=${entity.id}&pp=${entity.relatedItems.module}&pt=${entity.relatedItems.entityType}&pid=${entity.id}`}
    />
    <EntityAction
        goTo={`/advertisements/advertisementContacts?advertisementId=${entity.id}&entityType=Advertisement&entityGuid=${entity?.guid}&pp=${entity.relatedItems.module}&pt=${entity.relatedItems.entityType}&pid=${entity.id}`}
        icon={ContactsIcon}
        title="ContactsManageContacts"
    />
</>

export default EntityActions
