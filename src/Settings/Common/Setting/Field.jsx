import { parseQuery } from "App"
import { Browse } from "Form"
import filters from "./Filters"
import headers from "./Headers"
import row from "./Row"
import sorts from "./Sorts"

const SettingField = () => {

    const { fixedGranularity } = parseQuery()

    return <Browse
        byKey
        choose={entity => entity.key}
        entityType="Setting"
        filters={filters(fixedGranularity)}
        headers={headers(fixedGranularity)}
        placeholder="SettingsSetting"
        property="Setting"
        required
        row={row(fixedGranularity)}
        show={entity => entity.title}
        sorts={sorts}
    />
}

export default SettingField
