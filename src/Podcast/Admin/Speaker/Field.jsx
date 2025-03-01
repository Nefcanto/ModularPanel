import { Browse } from "Form"
import filters from "./Filters"
import headers from "./Headers"
import row from "./Row"

const SpeakerField = ({
    choose,
    placeholder,
    property,
    ...rest
}) => {

    return <Browse
        property="SpeakerId"
        placeholder="PodcastSpeaker"
        entityType="Speaker"
        headers={headers}
        filters={filters}
        row={row}
        show={entity => entity.displayName}
        choose={entity => entity.id}
        {...rest}
    />
}

export default SpeakerField
