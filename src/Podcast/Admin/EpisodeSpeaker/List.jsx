import { List } from "List"
import EpisodeSpeakerForm from "./Form"

const headers = <>
    <th>PodcastSpeaker</th>
</>

const row = entity => <>
    <td>{entity.speakerDisplayName}</td>
</>

const EpisodeSpeakers = () => {

    return <List
        title="PodcastEpisodeSpeakers"
        entityType="EpisodeSpeaker"
        headers={headers}
        create={EpisodeSpeakerForm}
        row={row}
        hasDelete
    />
}

export default EpisodeSpeakers
