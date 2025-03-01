import { Browse } from "Form"
import headers from "./Headers"
import row from "./Row"
import sorts from "./Sorts"

const PartField = ({
    onChange,
    required,
}) => {
    return <Browse
        byKey
        choose={entity => entity.key}
        type="Part"
        headers={headers}
        onChange={onChange}
        placeholder="PartsPart"
        property="Part"
        required={required}
        row={row}
        show={entity => entity.title}
        sorts={sorts}
    />
}

export default PartField
