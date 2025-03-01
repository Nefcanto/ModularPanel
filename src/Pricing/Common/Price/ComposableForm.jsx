import { ComposableForm } from "Form"
import {
    get,
    parseQuery,
    post,
} from "App"
import PriceField from "./Field"

const inputs = entity => <>
    <PriceField
        entity={entity}
        placeholder="PricingAmount"
        property="Amount"
        useSuperUnit
    />
</>

const PriceComposableForm = () => {

    const {
        entity,
        entityGuid,
        entityType,
        module,
    } = parseQuery()

    const setPrice = ({
        currentEntity,
        data,
        error,
        onCompleted,
        previousFormData,
        setProgress,
        success,
    }) => {
        setProgress(true)
        if (previousFormData) {
            data.entity = previousFormData.entity
            data.module = previousFormData.module
            data.entityType = previousFormData.entityType
        } else {
            data.entity = entity
            data.module = module
            data.entityType = entityType
        }
        data.id = currentEntity?.id ?? 0
        const url = `/price/Upsert/`
        post(url, data)
            .then(data => {
                setProgress(false)
                success("InfraDone")
                onCompleted()
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    const getData = ({
        setEntity,
        setProgress,
    }) => {
        if (!entityGuid) {
            return
        }
        setProgress(true)
        get(`/price/getPrice?entity=${entityGuid}&entityType=${entityType}`)
            .then(data => {
                setEntity(data)
                setProgress(false)
            }, e => {
                setProgress(false)
            })
    }

    return <ComposableForm
        entityType="Price"
        inputs={entity => inputs(entity)}
        loader={getData}
        okAction={setPrice}
        title="PricingSetPrice"
    />
}

export default PriceComposableForm
