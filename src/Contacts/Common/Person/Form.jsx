import { useState } from "react"
import {
    DialogForm,
    Radio,
} from "Form"
import {
    JuridicalPersonInputs,
    NaturalPersonInputs,
} from "ContactsCommon"
import { t } from "App"

const PersonForm = () => {

    const [isJuridical, setIsJuridical] = useState(false)

    const options = [
        {
            title: "ContactsNaturalPerson",
            value: 1
        },
        {
            title: "ContactsJuridicalPerson",
            value: 0
        },
    ]

    const inputs = <>
        <Radio
            choose={i => i.value}
            display={i => t(i.title)}
            onChange={({ value }) => {
                if (value == 0) {
                    setIsJuridical(true)
                } else {
                    setIsJuridical(false)
                }
            }}
            options={options}
        />
        {
            isJuridical ? JuridicalPersonInputs : NaturalPersonInputs
        }
    </>

    return <DialogForm
        entityType={isJuridical ? "JuridicalPerson" : "NaturalPerson"}
        inputs={inputs}
        title="ContactsPerson"
    />
}

export default PersonForm
