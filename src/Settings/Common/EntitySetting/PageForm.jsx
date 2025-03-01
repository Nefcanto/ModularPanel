import { useDefinitionsAndAssignments } from "Hooks"
import {
    Dynamic,
    PageForm,
} from "Form"

const EntitySettingPageForm = () => {

    const {
        assignments,
        definitions,
        progress,
    } = useDefinitionsAndAssignments({
        entityType: "Setting"
    })

    return <PageForm
        disableAutomaticEntityLoading
        humanReadableEntityType="SettingsEntitySettings"
        inputs={<Dynamic
            assignments={assignments}
            definitions={definitions}
        />}
        progress={progress}
        submitTo="/entitySetting/set"
    />
}

export default EntitySettingPageForm
