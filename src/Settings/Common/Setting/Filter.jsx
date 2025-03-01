import { Browse } from "List"
import filters from "./Filters"
import headers from "./Headers"
import row from "./Row"
import sorts from "./Sorts"

const SettingFilter = () => {
    return <Browse
        byKey
        choose={entity => entity.key}
        entityType="Setting"
        filters={filters}
        headers={headers}
        placeholder="SettingsSetting"
        property="Setting"
        required
        row={row}
        show={entity => entity.title}
        sorts={sorts}
    />
}

export default SettingFilter
