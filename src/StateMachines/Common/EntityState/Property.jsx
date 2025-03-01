import {
    useContext,
    useState,
} from "react"

import { url } from "App"
import { Chip } from "List"
import {
    DialogForm,
    LongText,
    Lookup,
} from "Form"
import {
    DialogContext,
    EntityContext,
    ListContext
} from "Contexts"

const EntityStateProperty = () => {

    const { entity } = useContext(EntityContext)
    const [open, setOpen] = useState(false)
    const { isTable } = useContext(ListContext)
    const [needsExplanation, setNeedsExplanation] = useState(false)

    const inputs = () => <>
        <Lookup
            choose={entity => entity.key}
            display={entity => entity.title}
            entityType="StateMachineState"
            initialValue={entity.stateMachinesEntityStateState}
            onChange={(chosenValue, chosenEntity) => {
                if (!entity.stateMachinesEntityStateState) {
                    setNeedsExplanation(false)
                    return;
                }
                const transitions = chosenEntity?.relatedItems?.transitions || []
                var currentTransition = transitions.find(i => i.fromState == entity?.stateMachinesEntityStateState && i.toState == chosenValue)
                setNeedsExplanation(currentTransition?.needsExplanation ?? false)
            }}
            loadItemsUrl={url({
                path: "/stateMachine/getDefaultStateMachineStates",
                granularity: "entityType",
                granularityExtractionEntity: {
                    module: entity.relatedItems.module,
                    entityType: entity.relatedItems.entityType
                }
            })}
            placeholder="StateMachinesState"
            property="State"
        />
        {
            needsExplanation && <LongText
                property="Explanation"
                placeholder="InfraExplanation"
                required
            />
        }
    </>

    const current =
        <Chip
            className="select-none cursor-pointer hover:shadow-md hover:scale-105 transition-all"
            style={{ backgroundColor: entity.stateMachinesStateColor }}
            text={entity?.stateMachinesStateTitle ?? "-"}
            tooltip={entity?.stateMachinesEntityStateExplanation}
        />
    let jsx = <div>
        <DialogContext.Provider
            value={{
                open,
                setOpen
            }}
        >
            {
                open &&
                <DialogForm
                    entityType="EntityState"
                    inputs={inputs}
                    submitTo={url({
                        granularity: "entity",
                        path: "/entityState/set",
                        granularityExtractionEntity: entity
                    })}
                    title="StateMachinesSetState"
                />
            }
        </DialogContext.Provider>
        <span onClick={() => setOpen(true)}>
            {current}
        </span>
    </div>
    return isTable ? <td>{jsx}</td> : jsx
}

export default EntityStateProperty
