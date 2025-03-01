import CategoryIcon from "@mui/icons-material/Category"
import TextFieldsIcon from "@mui/icons-material/TextFields"
import TheatersIcon from "@mui/icons-material/Theaters"
import {
    EntityAction,
    List,
    ListAction,
} from "List"
import { useEntitySettings } from "Settings"
import ItemValuesProperty from "../ItemValue/Property"

const listActions = <>
    <ListAction
        icon={CategoryIcon}
        notApplicableToEntities
        superAdmin
        title="ContentsManageParts"
        url={query => `/section/itemParts?${query}`}
    />
</>

const card = entity => <>
    <ItemValuesProperty />
</>

const entityActions = entity => <>
    {
        entity.relatedItems.hasBlobs &&
        <EntityAction
            goTo={`/section/item/blobs?section=${entity.section}&item=${entity.guid}&pp=contents&pt=item&pid=${entity.id}`}
            icon={TheatersIcon}
            title="ContentsEditMedia"
        />
    }
    {
        entity.relatedItems.hasData &&
        <EntityAction
            goTo={`/section/item/data?section=${entity.section}&item=${entity.guid}&pp=contents&pt=item&pid=${entity.id}`}
            icon={TextFieldsIcon}
            title="ContentsEditData"
        />
    }
</>

const Items = ({
    isSuperAdmin,
    parent,
}) => {

    const { getSetting } = useEntitySettings()
    const hasVariableSectionItems = getSetting(parent, "variableSectionItems")

    return <List
        card={card}
        create={isSuperAdmin || !!hasVariableSectionItems}
        entityActions={entityActions}
        entityType="SectionItem"
        hasDelete={isSuperAdmin || !!hasVariableSectionItems}
        listActions={listActions}
        numbered
        subtitle="ContentsPartsAreNonRepeatingWhileItemsAreRepeating"
        title="ContentsSectionItems"
    />
}

export default Items
