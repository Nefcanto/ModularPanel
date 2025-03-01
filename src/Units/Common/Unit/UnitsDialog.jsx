import {
    camelize,
    url,
} from "App"
import {
    Checks,
    DialogForm,
} from "Form"

const UnitsDialog = ({
    entity,
    entityType,
    module,
}) => {

    const inputs = <>
        <Checks
            checkedItemsUrl={`/entityUnit/all?entity=${entity.key || entity.guid}`}
            choose={entity => entity.unit || entity.key}
            itemsUrl={`/unit/all?entityType=${camelize(entity.relatedItems.entityType)}`}
            property="Units"
            show={entity => entity.title}
        />
    </>

    const apiUrl = url({
        path: `/entityUnit/setUnits`,
        query: {
            module: camelize(module),
            entityType: camelize(entityType),
            entity: entity.key || entity.guid
        }
    })

    return <DialogForm
        disableAutomaticEntityLoading
        entityType="Unit"
        inputs={inputs}
        submitTo={apiUrl}
        title="UnitsManageUnits"
    />
}

export default UnitsDialog
