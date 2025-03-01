import { Lookup } from "Form"

const FlowField = () => {

    return <Lookup
        choose={i => i.key}
        display={i => i.title}
        entityType="Flow"
        placeholder="FlowsFlow"
        property="Flow"
    />
}

export default FlowField
