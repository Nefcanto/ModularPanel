import { useDefinitionsAndAssignments } from "Hooks"
import {
    Dynamic,
    PageForm,
    Select,
} from "Form"

const EntityAttributePageForm = () => {

    const {
        assignments,
        definitions,
        progress,
    } = useDefinitionsAndAssignments({
        entityType: "attribute"
    })

    return <PageForm
        disableAutomaticEntityLoading
        humanReadableEntityType="AttributesEntityAttributes"
        inputs={<Dynamic
            assignments={assignments}
            definitions={definitions}
            fieldAugmenter={(definition, assignment) => {
                if (definition.relatedItems?.hasEntityUnits) {
                    const units = definition.relatedItems?.entityUnits
                    if (units) {
                        if (units.length > 1) {
                            return <Select
                                choose={i => i.key}
                                display={i => i.title}
                                initialValue={assignment?.unit}
                                options={units}
                                placeholder="UnitsUnit"
                                property={`${definition.relatedItems.keySegment}Unit`}
                            />
                        }
                        else {
                            return <div>{units[0].title}</div>
                        }
                    }
                    else {
                        return null
                    }
                }
            }}
        />}
        progress={progress}
        submitTo="/entityAttribute/set"
    />
}

export default EntityAttributePageForm
