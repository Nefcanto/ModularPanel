import { useState } from "react"
import {
    camelize,
    post,
} from "App"
import {
    Checks,
    DialogForm,
} from "Form"

const CategoriesDialog = ({
    checkedItemsUrl,
    entity,
    entityGuid,
    entityType,
    heteroGuid,
    itemsUrl,
    reloadEntity,
    saveUrl,
    ...rest
}) => {

    const [chosenValues, setChosenValues] = useState([])

    const inputs = <>
        <Checks
            itemsUrl={itemsUrl || `/category/all?entityGuid=${heteroGuid}`}
            checkedItemsUrl={checkedItemsUrl || `/entityCategory/all?entityType=${camelize(entityType)}&entityGuid=${entityGuid}`}
            show={entity => entity.title}
            choose={entity => entity.categoryGuid || entity.guid}
            set={setChosenValues}
            hierarchical
            hasSearch
            searchMatch={(entity, search) => entity.title.includes(search)}
        />
    </>

    const save = ({
        error,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(saveUrl || `/entityCategory/putInCategories?entityType=${camelize(entityType)}&entityGuid=${entityGuid}`, chosenValues)
            .then(data => {
                setProgress(false)
                success("InfraDone")
                reloadEntity(entity)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <DialogForm
        entityType="category"
        title="NewTaxonomyManageCategories"
        inputs={inputs}
        okAction={save}
    />
}

export default CategoriesDialog
