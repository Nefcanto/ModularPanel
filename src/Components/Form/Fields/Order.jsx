import {
    useCallback,
    useEffect,
    useState,
} from "react"
import { useField } from "Hooks"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import EntityRenderers from "EntityRenderers"
import {
    pascalize,
    renderPlace,
} from "App"
import Field from "./Field"
import OrderCard from "./OrderCard"

const Order = ({
    entities,
    onChange,
    ...rest
}) => {

    const [internalEntities, setInternalEntities] = useState(entities)

    const getOrders = list => {
        const newOrders = {}
        list?.map((entity, index) => {
            newOrders[entity.id] = index + 1
        })
        return JSON.stringify(newOrders)
    }

    const field = useField({
        type: "Order",
        initialValue: getOrders(entities),
        ...rest
    })

    const {
        chosenValue,
        isDirty,
        setChosenValue,
        setIsDirty,
    } = field

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        setInternalEntities(prevCards => {
            let newItems = [...prevCards]
            newItems[dragIndex] = prevCards[hoverIndex]
            newItems[hoverIndex] = prevCards[dragIndex]
            return newItems
        })
    }, [])

    useEffect(() => {
        if (!isDirty) {
            setIsDirty(true)
        }
        const newValue = getOrders(internalEntities)
        setChosenValue(newValue)
    }, [internalEntities])

    useEffect(() => {
        if (onChange instanceof Function) {
            if (chosenValue) {
                onChange(JSON.parse(chosenValue))
            }
        }
    }, [chosenValue])

    useEffect(() => {
        setInternalEntities(entities)
    }, [entities])

    const renderCard = useCallback((entity, index) => {

        const dynamicProps = {}
        if (entity.title) {
            dynamicProps.fallback = <div className="flex gap-2">
                <div>{entity.title}</div>
            </div>
        }

        return <OrderCard
            id={entity.id}
            index={index}
            key={entity.id}
            moveCard={moveCard}
        >
            <EntityRenderers
                entity={entity}
                entityType={pascalize(entity.relatedItems.entityType)}
                module={pascalize(entity.relatedItems.module)}
                place={renderPlace.order}
                {...dynamicProps}
            />
        </OrderCard>
    }, [])

    return <Field
        {...field}
        {...rest}
    >
        <DndProvider backend={HTML5Backend}>
            <div>
                {
                    internalEntities?.map((entity, index) => renderCard(entity, index))
                }

            </div>
        </DndProvider>
    </Field>
}

export default Order
