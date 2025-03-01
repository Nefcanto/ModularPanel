import { parseQuery } from "App"
import BlobsForm from "../Shared/BlobsForm"

const SectionBlobs = ({
    parentEntity,
    setProgress,
}) => {

    const { section } = parseQuery()

    return <BlobsForm
        title="Blobs"
        getUrl={`/sectionPart/blobs?section=${section}`}
        saveTo={entity => `/sectionPartValue/saveBlob?part=${entity.key}`}
        breadcrumbItems={[
            {
                title: parentEntity?.name,
                link: `/sections?name=${parentEntity?.name}`
            }
        ]}
        setProgress={setProgress}
    />
}

export default SectionBlobs
