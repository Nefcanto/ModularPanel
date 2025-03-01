import CollectionsIcon from "@mui/icons-material/Collections"
import {
    BooleanProperty,
    Image,
    List,
} from "List"
import { AssignEntityTypeSettings } from "Settings"
import { ManageVideos } from "Media"
import VideoGalleryForm from "./Form"

const listActions = <>
    <AssignEntityTypeSettings />
</>

const headers = <>
    <th></th>
    <th>InfraTitle</th>
    <th>InfraCount</th>
    <th>InfraIsActive</th>
</>

const row = entity => <>
    <Image />
    <td>{entity.title}</td>
    <td>{entity.relatedItems.videos?.length || 0}</td>
    <BooleanProperty
        actionUrl={`/videoGallery/toggleBoolean?id=${entity.id}&property=IsActive`}
        value={entity.isActive}
    />
</>

const entityActions = <>
    <ManageVideos />
</>

const Galleries = <List
    entityActions={entityActions}
    entityType="VideoGallery"
    hasContent
    hasDelete
    hasEdit
    headers={headers}
    listActions={listActions}
    row={row}
    title="GalleriesVideoGalleries"
    upsert={VideoGalleryForm}
/>

export default Galleries
