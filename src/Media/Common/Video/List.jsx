import VisibilityIcon from "@mui/icons-material/Visibility"
import {
    BooleanProperty,
    EntityAction,
    Image,
    List,
} from "List"
import VideoForm from "./Form"
import EditTitleForm from "./EditTitle"

const headers = <>
    <th>MediaPoster</th>
    <th>InfraTitle</th>
    <th>InfraUrl</th>
    <th>InfraIsDefault</th>
</>

const row = entity => <>
    <Image
        uploadUrl={`/mediaVideo/setImage?id=${entity.id}&Property=PosterUuid`}
        url={entity.relatedItems.posterUrl}
    />
    <td>{entity.title}</td>
    <td>{entity.url ?? "-"}</td>
    <BooleanProperty
        actionUrl={`/mediaVideo/setAsDefault?id=${entity.id}`}
        reloadListOnSuccess
        value={entity.isDefault}
    />
</>

const entityActions = entity => {
    return <>
        {
            entity?.relatedItems.videoUrl &&
            <EntityAction
                goTo={entity?.relatedItems.videoUrl}
                icon={VisibilityIcon}
                title="InfraUpload"
            />
        }
    </>
}

const Videos = <List
    create={VideoForm}
    edit={EditTitleForm}
    entityActions={entityActions}
    entityType="MediaVideo"
    hasDelete
    headers={headers}
    row={row}
    title="MediaVideos"
/>

export default Videos
