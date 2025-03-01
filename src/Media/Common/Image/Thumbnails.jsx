import { useContext } from "react"
import {
    EntityContext,
    ListContext,
} from "Contexts"
import { ImageGroup } from "List"

const Thumbnails = () => {

    const { entity } = useContext(EntityContext)
    const { isTable } = useContext(ListContext)

    const jsx = <ImageGroup
        urls={entity.relatedItems.images?.map(i => i.relatedItems.url)}
    />

    return isTable ? <td>{jsx}</td> : jsx
}

export default Thumbnails
