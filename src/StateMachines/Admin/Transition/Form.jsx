import { parseQuery } from "App"
import {
    Check,
    DialogForm,
    Lookup,
} from "Form"

const inputs = () => {
    const { stateMachine } = parseQuery()
    return <>
        <Lookup
            choose={entity => entity.key}
            display={entity => entity.title}
            entityType="StateMachineState"
            placeholder="StateMachinesFromState"
            property="FromState"
            query={{ stateMachine: stateMachine }}
        />
        <Lookup
            choose={entity => entity.key}
            display={entity => entity.title}
            entityType="StateMachineState"
            placeholder="StateMachinesToState"
            property="ToState"
            query={{ stateMachine: stateMachine }}
        />
        <Check
            placeholder="StateMachinesNeedsExplanation"
            property="NeedsExplanation"
        />
    </>
}

const TransitionForm = () => {

    return <DialogForm
        entityType="Transition"
        humanReadableEntityType="StateMachinesTransition"
        inputs={inputs}
    />
}

export default TransitionForm
