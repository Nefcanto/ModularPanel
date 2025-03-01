import {
    camelize,
    url,
} from "App"
import {
    Checks,
    DialogForm,
    Lookup,
} from "Form"

const CategoriesDialog = ({
    checkedItemsUrl,
    entity,
    entityGuid,
    entityType,
    itemsUrl,
    module,
    reload,
    reloadEntity,
    saveUrl,
    singleChoice,
}) => {

    const inputs = singleChoice
        ?
        <Lookup
            choose={entity => entity.category || entity.key}
            display={entity => entity.title}
            entityType="Category"
            placeholder="NewTaxonomyCategory"
            property="Category"
            propertyAccessor={entity => entity.relatedItems?.categories?.[0]?.key}
            radio
        />
        :
        <Checks
            checkedItemsUrl={checkedItemsUrl || `/entityCategory/all?entity=${entityGuid}`}
            choose={entity => entity.category || entity.key}
            hasSearch
            hierarchical
            itemsUrl={itemsUrl || `/category/tree?entityType=${camelize(entityType)}`}
            property="Categories"
            searchMatch={(entity, search) => entity.title.includes(search)}
            show={entity => entity.title}
        />

    const apiUrl = url({
        path: `/entityCategory/${singleChoice ? "changeCategory" : "putInCategories"}`,
        query: {
            module: camelize(module),
            entityType: camelize(entityType),
            entity: entityGuid
        }
    })

    return <DialogForm
        disableAutomaticEntityLoading
        entityType="Category"
        inputs={inputs}
        submitTo={apiUrl}
        title="NewTaxonomyManageCategories"
    />
}

export default CategoriesDialog
