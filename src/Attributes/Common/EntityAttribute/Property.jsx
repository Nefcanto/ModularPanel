import { useContext } from "react"
import { distinct } from "App"
import {
    EntityContext,
    ListContext,
} from "Contexts"
import { LabelValue } from "Panel"

const EntityAttributesProperty = props => {

    const { entity } = useContext(EntityContext)
    const {
        entities,
        isTable,
    } = useContext(ListContext)
    const entityAttributes = entities?.flatMap(i => i.relatedItems.entityAttributes)?.sort((a, b) => a.order - b.order)
    const distinctAttributes = distinct(entityAttributes, "title")

    const getValue = attribute => {
        const entityAttribute = entity.relatedItems.entityAttributes?.find(i => i.key === attribute.key)
        return entityAttribute?.value
    }

    if (isTable) {
        return <>
            {
                distinctAttributes?.map(attribute => <td
                    key={attribute.id}
                    {...props}
                >
                    {getValue(attribute)}
                </td>)
            }
        </>
    }
    return <>
        {
            distinctAttributes?.map(attribute => <LabelValue
                key={attribute.id}
                label={attribute.title}
                value={getValue(attribute)}
                {...props}
            />)
        }
    </>
}

export default EntityAttributesProperty
