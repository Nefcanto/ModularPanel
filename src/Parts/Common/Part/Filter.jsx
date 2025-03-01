import { Browse } from "List"
import headers from "./Headers"
import row from "./Row"
import sorts from "./Sorts"

const PartFilter = ({ onChange }) => {
    return <Browse
        byKey
        choose={entity => entity.key}
        type="Part"
        headers={headers}
        onChange={onChange}
        placeholder="PartsPart"
        property="Part"
        row={row}
        show={entity => entity.title}
        sorts={sorts}
    />
}

export default PartFilter
