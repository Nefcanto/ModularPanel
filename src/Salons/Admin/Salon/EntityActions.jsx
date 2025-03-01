import EditAttributesIcon from "@mui/icons-material/EditAttributes"
import UpdateIcon from "@mui/icons-material/Update"
import { post } from "App"
import { EntityAction } from "List"
import { ManageImages } from "Media"
import { ManageTags } from "NewTaxonomy"
import { ManageLocation } from "Geo"
import {
    EntityFaqPage,
    EntitySeo,
} from "Seo"
import { EditPerson } from "Contacts"
import ManageTypes from "../Type/Manage"

const EntityActions = entity => {

    const updateModificationDate = ({
        error,
        reload,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(`/salon/updateModificationDate/${entity.id}`)
            .then(data => {
                setProgress(false)
                success("SalonsSalonUpdated")
                reload()
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <>
        <EntityAction
            icon={UpdateIcon}
            onClick={updateModificationDate}
            title="SalonsUpdateModificationDate"
        />
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
        />
        <ManageLocation />
        <EntityFaqPage
            entityGuid={entity.guid}
            entityType="Place"
        />
        <ManageImages />
        <ManageTags />
        <ManageTypes />
        <EntityAction
            goTo={`/salon/attribute?entityGuid=${entity.guid}&entityType=Salon`}
            icon={EditAttributesIcon}
            title="AttributesAssignAttributes"
        />
    </>
}

export default EntityActions
