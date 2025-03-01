import {
    BooleanProperty,
    List,
} from "List"
import TransitionForm from "./Form"

const headers = <>
    <th>StateMachinesStateMachine</th>
    <th>StateMachinesFromState</th>
    <th>StateMachinesToState</th>
    <th>StateMachinesNeedsExplanation</th>
</>

const row = entity => <>
    <td>{entity.stateMachinesStateMachineTitle}</td>
    <td>{entity.sourceStateTitle}</td>
    <td>{entity.destinationStateTitle}</td>
    <BooleanProperty
        actionUrl={`/transition/toggleBoolean?id=${entity.id}&property=needsExplanation`}
        value={entity.needsExplanation}
    />
</>

const Transitions = ({
    isSuperAdmin
}) => {
    return <List
        create={TransitionForm}
        entityType="Transition"
        hasDelete={isSuperAdmin}
        headers={headers}
        row={row}
        title="StateMachinesTransitions"
    />
}

export default Transitions
