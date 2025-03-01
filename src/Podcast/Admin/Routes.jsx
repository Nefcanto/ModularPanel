import Episodes from "./Episode/List"
import Speakers from "./Speaker/List"
import EpisodeSpeakers from "./EpisodeSpeaker/List"

const PodcastRoutes = [
    {
        path: "/podcast/episodes",
        component: Episodes
    },
    {
        path: "/podcast/speakers",
        component: Speakers
    },
    {
        path: "/podcast/episodeSpeakers",
        component: EpisodeSpeakers
    },
]

export default PodcastRoutes
