import { useState } from "react"
import { pascalize } from "App"
import {
    EntityTypeField,
    ModuleField,
} from "Modules"
import FieldBrowsersAndLookups from "FieldBrowsersAndLookups"

const EntityField = () => {

    const [part, setPart] = useState("")
    const [type, setType] = useState("")

    return <>
        <ModuleField
            onChange={part => setPart(part)}
            required
        />
        <EntityTypeField
            module={part}
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
