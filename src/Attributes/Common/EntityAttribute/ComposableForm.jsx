import { useDefinitionsAndAssignments } from "Hooks"
import {
    ComposableForm,
    Dynamic,
} from "Form"

const EntityAttributeComposableForm = props => {

    const {
        assignments,
        definitions,
        progress,
    } = useDefinitionsAndAssignments({
        entityType: "Attribute"
    })

    return <ComposableForm
        disableAutomaticEntityLoading
        entityType="EntityAttribute"
        humanReadableEntityType="AttributesEntityAttributes"
        inputs={<Dynamic
            assignments={assignments}
            definitions={definitions}
        />}
        progress={progress}
        submitTo="/entityAttribute/set"
        {...props}
    />
}

export default EntityAttributeComposableForm
