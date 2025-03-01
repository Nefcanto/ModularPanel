import {
    Image,
    List,
} from "List"
import { ManageFiles } from "Media"
import EpisodeForm from "./Form"
import {
    EpisodeTitle,
    StateProperty,
} from "PodcastCommon"
import { AssignEntityTypeSettings } from "Settings"
import ManageEpisodeSpeakers from "../EpisodeSpeaker/Manage"

const listActions = <>
    <AssignEntityTypeSettings />
</>

const headers = <>
    <th></th>
    <th start>InfraTitle</th>
    <th>PodcastState</th>
</>

const row = entity => <>
    <Image />
    {EpisodeTitle(entity)}
    {StateProperty(entity)}
</>

const entityActions = entity => <>
    <ManageFiles />
    <ManageEpisodeSpeakers />
</>

const Episodes = () => {

    return <List
        create={EpisodeForm}
        edit={EpisodeForm}
        entityActions={entityActions}
        entityType="Episode"
        headers={headers}
        listActions={listActions}
        row={row}
        title="PodcastEpisodes"
    />
}

export default Episodes
