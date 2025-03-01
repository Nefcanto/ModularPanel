import {
    camelize,
    url,
} from "App"
import { DialogForm } from "Form"
import GranularityField from "./Field"

const inputs = <>
    <GranularityField show />
</>

const ScopeDialog = ({
    checkedItemsUrl,
    entity,
    entityGuid,
    entityType,
    itemsUrl,
    module,
    reloadEntity,
    saveUrl,
    ...rest
}) => {

    const apiUrl = url({
        path: `/${camelize(entityType)}/changeScope`,
        query: {
            module: camelize(module),
            entityType: camelize(entityType),
            entity: entityGuid
        }
    })

    return <DialogForm
        disableAutomaticEntityLoading
        entityType="Tag"
        inputs={inputs}
        submitTo={apiUrl}
        title="GranularitiesChangingScope"
        {...rest}
    />
}

export default ScopeDialog
