import PodcastsIcon from "@mui/icons-material/Podcasts"

const PodcastMenu = [
    {
        title: "PodcastPodcast",
        icon: PodcastsIcon,
        children: [
            {
                title: "PodcastEpisodes",
                path: "/podcast/episodes"
            },
            {
                title: "PodcastSpeakers",
                path: "/podcast/speakers"
            },
        ]

    }
]

export default PodcastMenu
