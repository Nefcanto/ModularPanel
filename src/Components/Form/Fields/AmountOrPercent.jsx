import { useState } from "react"
import Radio from "./Radio"
import Hidden from "./Hidden"

const AmountOrPercent = ({
    amountControl,
    percentControl,
    percentProperty,
    property,
    onChange,
}) => {

    const [type, setType] = useState("amount")

    const options = [
        {
            title: "InfraAmountBased",
            value: "amount"
        },
        {
            title: "InfraPercentBased",
            value: "percent"
        },
    ]

    return <>
        {
            percentProperty &&
            <Hidden
                property={percentProperty}
                value={type === "percent"}
            />
        }
        <Radio
            choose={i => i.value}
            display={i => i.title}
            hideLabel
            onChange={value => {
                setType(value)
                if (onChange instanceof Function) {
                    onChange(value)
                }
            }}
            options={options}
            property={property || "AmountOrPercent"}
            row
            value={options[0]}
        />
        {
            type === "amount"
                ?
                amountControl
                :
                percentControl
        }
    </>

}

export default AmountOrPercent
