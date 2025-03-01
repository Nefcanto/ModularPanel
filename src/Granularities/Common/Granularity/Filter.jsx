import {
    useEffect,
    useState,
} from "react"
import {
    parseQuery,
    pascalize,
} from "App"
import { Enum } from "List"
import {
    EntityTypeFilter,
    ModuleFilter,
} from "ModulesCommon"
import FilterBrowsersAndLookups from "FilterBrowsersAndLookups"

const GranularityFilter = () => {

    const {
        fixedGranularity
    } = parseQuery()
    const [granularity, setGranularity] = useState("application")
    const [part, setPart] = useState("")
    const [type, setType] = useState("")
    const [entity, setEntity] = useState("")
    const [browserKey, setBrowserKey] = useState("")

    useEffect(() => {
        if (part && type) {
            const key = `${pascalize(part)}${pascalize(type)}Filter`
            setBrowserKey(key)
        }
    }, [part, type])

    return fixedGranularity
        ?
        null
        :
        <>
            <Enum
                byKey
                entityType="Granularity"
                onChange={value => setGranularity(value)}
                placeholder="InfraScope"
                property="Granularity"
                required
            />
            {
                granularity === "part" &&
                <ModuleFilter
                    onChange={part => setPart(part)}
                />
            }
            {
                granularity === "type" &&
                <>
                    <ModuleFilter
                        onChange={part => setPart(part)}
                    />
                    <EntityTypeFilter
                        module={part}
                        onChange={type => setType(type)}
                    />
                </>
            }
            {
                granularity === "item" &&
                <>
                    <ModuleFilter
                        onChange={part => setPart(part)}
                    />
                    <EntityTypeFilter
                        module={part}
                        onChange={type => setType(type)}
                    />
                    <FilterBrowsersAndLookups
                        type={pascalize(type)}
                        part={pascalize(part)}
                    />
                </>
            }
        </>
}

export default GranularityFilter
