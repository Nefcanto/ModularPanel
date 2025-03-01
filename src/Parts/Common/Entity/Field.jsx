import { useState } from "react"
import { pascalize } from "App"
import {
    TypeField,
    PartField,
} from "Parts"
import FieldBrowsersAndLookups from "FieldBrowsersAndLookups"

const EntityField = () => {

    const [part, setPart] = useState("")
    const [type, setType] = useState("")

    return <>
        <PartField
            onChange={part => setPart(part)}
            required
        />
        <TypeField
            part={part}
            onChange={type => setType(type)}
            required
        />
        <FieldBrowsersAndLookups
            part={pascalize(part)}
            required
            type={pascalize(type)}
        />
    </>
}

export default EntityField
