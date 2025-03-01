import {
    BooleanProperty,
    Image,
    List,
} from "List"
import { AssignEntityTypeSettings } from "Settings"
import {
    ManageImages,
    Thumbnails,
} from "Media"
import GalleryForm from "./Form"

const listActions = <>
    <AssignEntityTypeSettings />
</>

const headers = <>
    <th></th>
    <th>InfraTitle</th>
    <th>InfraImages</th>
    <th>InfraIsActive</th>
</>

const row = entity => <>
    <Image />
    <td>{entity.title}</td>
    <Thumbnails />
    <BooleanProperty
        actionUrl={`/gallery/toggleBoolean?id=${entity.id}&property=IsActive`}
        value={entity.isActive}
    />
</>

const entityActions = <>
    <ManageImages />
</>

const Galleries = <List
    entityActions={entityActions}
    entityType="Gallery"
    hasContent
    hasDelete
    hasEdit
    headers={headers}
    listActions={listActions}
    row={row}
    title="GalleriesGalleries"
    upsert={GalleryForm}
/>

export default Galleries
