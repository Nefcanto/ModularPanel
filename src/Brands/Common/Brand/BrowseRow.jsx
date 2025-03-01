import { Image } from "List"

const BrandRow = entity => <>
    <Image
        readOnly
        url={entity.relatedItems.logoUrl}
    />
    <td>{entity.originalName}</td>
    <td>{entity.localizedName}</td>
</>

export default BrandRow
