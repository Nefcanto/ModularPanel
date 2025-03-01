import { useState } from "react"
import { Radio } from "Form"

const NaturalOrJuridical = ({
    property,
    onChange,
}) => {

    const [type, setType] = useState("natural")

    const options = [
        {
            title: "ContactsNaturalPerson",
            value: "natural"
        },
        {
            title: "ContactsJuridicalPerson",
            value: "juridical"
        },
    ]

    return <>
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
            placeholder="ContactsNaturalOrJuridical"
            property={property || "NaturalOrJuridical"}
            required
            row
            value={options[0]}
        />
    </>

}

export default NaturalOrJuridical
