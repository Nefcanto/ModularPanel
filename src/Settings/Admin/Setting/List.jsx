import { parseQuery } from "App"
import { List } from "List"
import {
    filters,
    headers,
    ManageOptions,
    row,
} from "SettingsCommon"
import SettingForm from "./Form"

const entityActions = entity => <>
    {
        (entity.dataType == "singleChoice" || entity.dataType == "multiChoice")
        && <ManageOptions />
    }
</>

const Settings = () => {

    const { fixedGranularity } = parseQuery()

    return <List
        create={SettingForm}
        entityActions={entityActions}
        entityType="Setting"
        filters={filters(fixedGranularity)}
        hasDelete
        hasEdit
        headers={headers(fixedGranularity)}
        module="Settings"
        row={row(fixedGranularity)}
        title="SettingsDefineSettings"
    />
}

export default Settings
