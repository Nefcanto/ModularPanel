import LayersIcon from "@mui/icons-material/Layers"
import {
    EntityAction,
    List,
} from "List"
import SkillForm from "./Form"

const headers = <>
    <th>InfraTitle</th>
    <th>InfraSlug</th>
</>

const row = entity => <>
    <td>{entity.title}</td>
    <td>{entity.slug}</td>
</>

const entityActions = entity => <>
    <EntityAction
        title="GradingManageLevels"
        icon={LayersIcon}
        goTo={`/levels?skillId=${entity.id}`}
    />
</>

const Skills = () => {
    return <List
        title="GradingSkills"
        entityType="Skill"
        create={SkillForm}
        headers={headers}
        row={row}
        entityActions={entityActions}
        hasEdit
        hasDelete
    />
}

export default Skills
