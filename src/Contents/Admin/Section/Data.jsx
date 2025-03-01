import { parseQuery } from "App"
import DataForm from "../Shared/DataForm"

const SectionData = () => {

    const { section } = parseQuery()

    return <DataForm
        title="Section data"
        getUrl={`/sectionPart/nonBlobs?section=${section}`}
        submitTo="/sectionPartValue/save"
    />
}

export default SectionData
