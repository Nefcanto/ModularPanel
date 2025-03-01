import { Image } from "List"

const row = hasUpload => entity => <>
    <Image
        uploadUrl={hasUpload && `/type/setImage?id=${entity.id}`}
        url={entity.relatedItems.defaultImageUrl}
    />
    <td>{entity.partsPartTitle}</td>
    <td>{entity.key}</td>
    <td>{entity.title}</td>
</>

export default row
