import { useState } from "react"
import {
    appendQueryToApiUrl,
    pathAndQuery,
    post,
} from "App"
import {
    AmountOrPercent,
    DialogForm,
    Percent,
    Radio,
} from "Form"
import { MonetaryValueField } from "MonetaryValues"

const NewBatchPricingDialog = ({
    close,
    reload,
}) => {

    const [type, setType] = useState("increasing")
    const changeTypes = [
        {
            title: "InfraIncreasing",
            value: "increasing"
        },
        {
            title: "InfraDecreasing",
            value: "decreasing"
        },
    ]

    const changeTypeControl = <Radio
        choose={i => i.value}
        display={i => i.title}
        hideLabel
        onChange={value => setType(value)}
        options={changeTypes}
        property="IncreasingOrDecreasing"
        row
        value={changeTypes[0]}
    />

    const price = <>
        <MonetaryValueField
            entity={{}}
            placeholder="InfraQuantity"
            property="Quantity"
        />
        {changeTypeControl}
    </>

    const percent = <>
        <Percent
            placeholder="InfraPercent"
            property="Quantity"
            required
        />
        {changeTypeControl}
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
        post(appendQueryToApiUrl("/newPrice/batchUpdate"), data)
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
        entityType="NewPrice"
        inputs={inputs}
        okAction={save}
        title="PricingBatchPricing"
        warning="InfraBatchWarning"
    />
}

export default NewBatchPricingDialog
