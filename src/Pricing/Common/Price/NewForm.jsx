import {
    get,
    post,
    url,
} from "App"
import { DialogForm } from "Form"
import { MonetaryValueField } from "MonetaryValues"
import IntervalField from "../Interval/Field"

const inputs = (
    entity,
    hasInterval
) => <>
        <MonetaryValueField
            entity={entity}
        />
        {hasInterval && <IntervalField />}
    </>

const NewPriceForm = ({
    entity,
    hasInterval,
    reloadData,
    submitTo,
}) => {

    if (submitTo) {
        throw "Not supported"
    }

    const setPrice = ({
        currentEntity,
        data,
        error,
        onCompleted,
        setProgress,
        success,
    }) => {
        setProgress(true)
        data.entity = entity?.guid
        data.module = entity?.relatedItems?.module
        data.entityType = entity?.relatedItems?.entityType
        data.id = currentEntity?.id ?? 0
        post(`/newPrice/upsert/${entity?.id}`, data)
            .then(data => {
                setProgress(false)
                success("InfraDone")
                onCompleted()
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    const getPrice = ({
        setEntity,
        setProgress,
    }) => {
        const apiUrl = url({
            path: "/newPrice/getCurrent",
            query: {
                entity: entity?.guid,
                entityType: entity?.relatedItems?.entityType,
                module: entity?.relatedItems?.module
            }
        })
        setProgress(true)
        get(apiUrl)
            .then(data => {
                setEntity(data)
                setProgress(false)
            }, e => {
                setProgress(false)
            })
    }

    return <DialogForm
        title="PricingSetPrice"
        entityType="Price"
        inputs={entity => inputs(entity, hasInterval)}
        loader={getPrice}
        okAction={setPrice}
        postSave={reloadData}
    />
}

export default NewPriceForm
