import { Browse } from "List"
import headers from "./Headers"
import row from "./Row"
import sorts from "./Sorts"

const ModuleFilter = ({ onChange }) => {
    return <Browse
        byKey
        choose={entity => entity.key}
        entityType="Module"
        headers={headers}
        onChange={onChange}
        placeholder="ModulesModule"
        property="Module"
        row={row}
        show={entity => entity.title}
        sorts={sorts}
    />
}

export default ModuleFilter
