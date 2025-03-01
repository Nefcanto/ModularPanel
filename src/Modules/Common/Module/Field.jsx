import { Browse } from "Form"
import headers from "./Headers"
import row from "./Row"
import sorts from "./Sorts"

const ModuleField = ({
    onChange,
    required,
}) => {
    return <Browse
        byKey
        choose={entity => entity.key}
        entityType="Module"
        headers={headers}
        onChange={onChange}
        placeholder="ModulesModule"
        property="Module"
        required={required}
        row={row}
        show={entity => entity.title}
        sorts={sorts}
    />
}

export default ModuleField
