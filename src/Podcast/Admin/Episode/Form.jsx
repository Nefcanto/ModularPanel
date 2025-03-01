import {
    DialogForm,
    Slug,
    Title,
} from "Form"

const inputs = <>
    <Title />
    <Slug />
</>

const EpisodeForm = <DialogForm
    entityType="Episode"
    humanReadableEntityType="PodcastEpisode"
    inputs={inputs}
/>

export default EpisodeForm
