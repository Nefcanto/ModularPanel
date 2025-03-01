import { Image } from "List"

const row = hasUpload => entity => <>
    <Image
        uploadUrl={hasUpload && `/entityType/setImage?id=${entity.id}`}
        url={entity.relatedItems.defaultImageUrl}
    />
    <td>{entity.modulesModuleTitle}</td>
    <td>{entity.key}</td>
    <td>{entity.title}</td>
</>

export default row
