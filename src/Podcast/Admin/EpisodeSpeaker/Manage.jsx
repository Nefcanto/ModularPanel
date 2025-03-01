import { useContext } from "react"
import GraphicEqIcon from "@mui/icons-material/GraphicEq"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"

const ManageEpisodeSpeakers = () => {
    const { entity } = useContext(EntityContext)

    return <EntityAction
        title="PodcastManageEpisodeSpeakers"
        icon={GraphicEqIcon}
        goTo={`/podcast/episodeSpeakers?episodeId=${entity.id}`}
    />
}

export default ManageEpisodeSpeakers
