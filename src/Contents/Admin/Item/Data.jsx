import { parseQuery } from "App"
import DataForm from "../Shared/DataForm"

const ItemData = () => {

    const { section, item } = parseQuery()

    return <DataForm
        title="ContentsItemData"
        getUrl={`/itemPart/nonBlobs?section=${section}&item=${item}`}
        submitTo="/itemValue/save"
    />
}

export default ItemData
