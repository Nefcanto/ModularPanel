import {
    Text,
    Title,
} from "List"

const filters = <>
    <Title />
    <Text
        property="Skill"
        placeholder="GradingSkill"
    />
</>

const headers = <>
    <th>GradingSkill</th>
    <th>InfraTitle</th>
</>

const row = entity => <>
    <td>{entity.skill}</td>
    <td>{entity?.title}</td>
</>

export { filters }
export { headers }
export { row }
