import { useState } from "react"
import {
    parseQuery,
    post,
} from "App"
import {
    Checks,
    DialogForm,
} from "Form"

const AttributeDialog = () => {

    const [chosenValues, setChosenValues] = useState([])
    const {
        entityGuid,
        entityType,
    } = parseQuery()

    const inputs = <>
        <Checks
            itemsUrl={`/attribute/getAttributes?entityType=${entityType}&entityGuid=${entityGuid}`}
            checkedItemsUrl={`/attributeValue/all?entityGuid=${entityGuid}`}
            show={entity => entity.title}
            choose={entity => entity.attributeId ?? entity.id}
            set={setChosenValues}
        />
    </>

    const save = ({
        error,
        onSaved,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(`/attributeValue/assign?entityGuid=${entityGuid}`, chosenValues)
            .then(data => {
                setProgress(false)
                success("success")
                onSaved()
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <DialogForm
        entityType="AggregateAttribute"
        inputs={inputs}
        okAction={save}
    />
}

export default AttributeDialog
