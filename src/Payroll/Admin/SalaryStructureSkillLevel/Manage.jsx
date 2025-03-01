import { useContext } from "react"
import LayersIcon from "@mui/icons-material/Layers"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"

const ManageSkillLevelsEntityAction = () => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        title="PayrollManageSkillLevels"
        icon={LayersIcon}
        goTo={`/salaryStructureSkillLevels?structureId=${entity.id}&pp=${entity.relatedItems.module}&pt=${entity.relatedItems.entityType}&pid=${entity.id}`}
    />
}

export default ManageSkillLevelsEntityAction
