import { DialogForm } from "Form"
import SpeakerField from "../Speaker/Field"

const inputs = <>
    <SpeakerField />
</>

const EpisodeSpeakerForm = () => {
    return <DialogForm
        entityType="EpisodeSpeaker"
        humanReadableEntityType="PodcastEpisodeSpeaker"
        inputs={inputs}
    />
}

export default EpisodeSpeakerForm
