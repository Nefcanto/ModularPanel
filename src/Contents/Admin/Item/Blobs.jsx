import { parseQuery } from "App"
import BlobsForm from "../Shared/BlobsForm"

const ItemBlobs = ({
    parentEntity,
    setProgress,
}) => {

    const { section, item } = parseQuery()

    return <BlobsForm
        title="ContentsBlobs"
        breadcrumbItems={[
            {
                title: `${parentEntity?.name}`,
                link: `/sections?name=${parentEntity?.name}`
            },
            {
                title: "ContentsItems",
                link: `/section/items?section=${parentEntity?.id}&name=${parentEntity?.name}`
            }
        ]}
        getUrl={`/itemPart/blobs?section=${section}&item=${item}`}
        saveTo={entity => `/itemValue/saveBlob?part=${entity.key}`}
        setProgress={setProgress}
    />
}

export default ItemBlobs
