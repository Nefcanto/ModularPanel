import {
    camelize,
    url,
} from "App"
import {
    Checks,
    DialogForm,
} from "Form"

const TagsDialog = ({
    entityGuid,
    entityType,
    module,
    ...rest
}) => {

    const inputs = <>
        <Checks
            checkedItemsUrl={`/entityTag/all?module=${camelize(module)}&entityType=${camelize(entityType)}&entity=${entityGuid}`}
            choose={entity => entity.tag || entity.key}
            itemsUrl={`/tag/all?module=${camelize(module)}&entityType=${camelize(entityType)}`}
            property="Tags"
            show={entity => entity.title}
        />
    </>

    const apiUrl = url({
        path: "/entityTag/putInTags",
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
        title="NewTaxonomyManageTags"
        {...rest}
    />
}

export default TagsDialog
