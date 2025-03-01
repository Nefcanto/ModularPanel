import { parseQuery } from "App"
import { Lookup } from "List"

const FlowFilter = () => {

    const {
        entityType,
        module,
    } = parseQuery()

    return <Lookup
        choose={i => i.key}
        display={i => i.title}
        entityType="Flow"
        placeholder="FlowsFlow"
        property="Flow"
        query={{
            entityType,
            module,
        }}
    />
}

export default FlowFilter
