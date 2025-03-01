import CategoryIcon from "@mui/icons-material/Category"
import ListAltIcon from "@mui/icons-material/ListAlt"
import TextFieldsIcon from "@mui/icons-material/TextFields"
import TheatersIcon from "@mui/icons-material/Theaters"
import VisibilityIcon from "@mui/icons-material/Visibility"
import {
    BooleanProperty,
    EntityAction,
    KeySegmentProperty,
    List,
    TitleSort,
} from "List"
import {
    AssignedSettingsProperty,
    AssignSettings,
    useEntitySettings,
} from "Settings"
import SectionForm from "./Form"
import ViewSection from "./View"

const sorts = [
    ...TitleSort,
    {
        caption: "InfraNameAToZ",
        property: "Name",
        direction: "asc"
    },
    {
        caption: "InfraNameZToA",
        property: "Name",
        direction: "desc"
    }
]

const headers = <>
    <td superAdmin>InfraKey</td>
    <td>InfraName</td>
    <td>InfraIsActive</td>
    <td>SettingsSettings</td>
</>

const row = entity => <>
    <KeySegmentProperty />
    <td>{entity.name}</td>
    <BooleanProperty
        actionable
        property="IsActive"
    />
    <AssignedSettingsProperty />
</>

const entityActions = entity => {

    const { getSetting } = useEntitySettings()
    const sectionHasItems = getSetting(entity, "sectionHasItems")

    return <>
        <EntityAction
            dialog={ViewSection}
            icon={VisibilityIcon}
            title="InfraView"
        />
        {
            sectionHasItems &&
            <EntityAction
                goTo={`/section/items?section=${entity.key}&pp=contents&pt=section&pid=${entity.id}`}
                icon={ListAltIcon}
                title="ContentsManageItems"
            />
        }
        <EntityAction
            goTo={`/sectionParts?section=${entity.key}`}
            icon={CategoryIcon}
            superAdmin
            title="ContentsManageParts"
        />
        {
            entity.relatedItems.hasBlobs &&
            <EntityAction
                goTo={`/section/blobs?section=${entity.key}&pp=contents&pt=section&pid=${entity.id}`}
                icon={TheatersIcon}
                title="ContentsEditMedia"
            />
        }
        {
            entity.relatedItems.hasData &&
            <EntityAction
                goTo={`/section/data?section=${entity.key}`}
                icon={TextFieldsIcon}
                title="ContentsEditData"
            />
        }
        <AssignSettings
            superAdmin
        />
    </>

}

const Sections = ({ isSuperAdmin }) => {
    return <List
        create={isSuperAdmin && SectionForm}
        entityActions={entityActions}
        entityType="Section"
        hasDelete={isSuperAdmin}
        hasEdit={isSuperAdmin}
        headers={headers}
        module="Contents"
        row={row}
        separateRowForActions={isSuperAdmin}
        sorts={sorts}
        subtitle="ContentsManageSectionsOfYourWebsiteHere"
        title="ContentsSections"
    />
}

export default Sections
