import { useContext } from "react"
import { distinct } from "App"
import { ListContext } from "Contexts"

const EntityAttributeHeaders = () => {

    const { entities } = useContext(ListContext)
    const entityAttributes = entities?.flatMap(i => i.relatedItems.entityAttributes)?.sort((a, b) => a.order - b.order)
    const distinctAttributes = distinct(entityAttributes, "title")

    return <>
        {
            distinctAttributes?.map(attribute => <th key={attribute.id}>{attribute.title}</th>)
        }
    </>
}

export default EntityAttributeHeaders
