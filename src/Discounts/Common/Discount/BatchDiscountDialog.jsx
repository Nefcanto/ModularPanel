import {
    appendQueryToApiUrl,
    pathAndQuery,
    post,
} from "App"
import {
    AmountOrPercent,
    DialogForm,
    Percent,
} from "Form"
import { PriceField } from "Pricing"

const BatchDiscountDialog = ({
    close,
    reload,
}) => {

    const price = <>
        <PriceField
            entity={{}}
            placeholder="InfraAmount"
            property="Quantity"
        />
    </>

    const percent = <>
        <Percent
            placeholder="InfraPercent"
            property="Quantity"
            required
        />
    </>

    const inputs = <>
        <AmountOrPercent
            amountControl={price}
            percentControl={percent}
        />
    </>

    const save = ({
        data,
        error,
        setProgress,
        success,
    }) => {
        data["PathAndQuery"] = pathAndQuery()
        post(appendQueryToApiUrl("/discount/setInBatch"), data)
            .then(result => {
                setProgress(false)
                success("InfraDone")
                reload()
                close()
            }, e => {
                setProgress(false)
                error(e)
                reload()
            })
    }

    return <DialogForm
        entityType="Discount"
        inputs={inputs}
        okAction={save}
        title="DiscountsBatchDiscount"
        warning="InfraBatchWarning"
    />
}

export default BatchDiscountDialog
