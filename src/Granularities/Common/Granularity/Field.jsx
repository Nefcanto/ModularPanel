import {
    useContext,
    useEffect,
    useState,
} from "react"
import {
    parseQuery,
    pascalize,
} from "App"
import { FormContext } from "Contexts"
import {
    Enum,
    Text,
} from "Form"
import {
    EntityTypeField,
    ModuleField,
} from "Modules"
import FieldBrowsersAndLookups from "FieldBrowsersAndLookups"

const GranularityField = ({ show }) => {

    const {
        fixedGranularity
    } = parseQuery()
    const [scope, setScope] = useState("application")
    const [part, setPart] = useState("")
    const [type, setType] = useState("")
    const [entity, setEntity] = useState("")
    const [browserKey, setBrowserKey] = useState("")
    const formContext = useContext(FormContext)
    const { isCreation } = formContext

    useEffect(() => {
        if (part && type) {
            const key = `${pascalize(part)}${pascalize(type)}Field`
            setBrowserKey(key)
        }
    }, [part, type])

    return (isCreation || show)
        ?
        fixedGranularity
            ?
            null
            :
            <>
                <Enum
                    byKey
                    entityType="Granularity"
                    onChange={value => setScope(value)}
                    placeholder="InfraScope"
                    property="Granularity"
                    required
                />
                {
                    scope === "part" &&
                    <ModuleField
                        onChange={part => setPart(part)}
                        required
                    />
                }
                {
                    scope === "type" &&
                    <>
                        <ModuleField
                            onChange={part => setPart(part)}
                            required
                        />
                        <EntityTypeField
                            module={part}
                            onChange={type => setType(type)}
                            required
                        />
                    </>
                }
                {
                    scope === "group" &&
                    <>
                        <ModuleField
                            onChange={part => setPart(part)}
                            required
                        />
                        <EntityTypeField
                            module={part}
                            onChange={type => setType(type)}
                            required
                        />
                        <Text
                            dir="ltr"
                            placeholder="InfraGroup"
                            property="Group"
                            required
                        />
                    </>
                }
                {
                    scope === "item" &&
                    <>
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
            </>
        :
        null
}

export default GranularityField
