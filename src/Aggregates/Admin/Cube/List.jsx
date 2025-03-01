import { useContext } from "react"
import { ListContext } from "Contexts"
import { List } from "List"

const getDimensionsAndFacts = entities => {
    const entity = entities?.[0]
    const dimensions = Object
        .keys(entity || {})
        .filter(key => key.endsWith('Dimension') && entity[key])
    const facts = Object
        .keys(entity || {})
        .filter(key => key.endsWith('Fact') && entity[key])
    return [dimensions, facts]
}

const headers = () => {

    const { entities } = useContext(ListContext)
    const [dimensions, facts] = getDimensionsAndFacts(entities)

    return <>
        {
            dimensions.map(dimension => <th key={dimension}>{dimension}</th>)
        }
        {
            facts.map(fact => <th key={fact}>{fact}</th>)
        }
    </>
}

const row = entity => {

    const { entities } = useContext(ListContext)
    const [dimensions, facts] = getDimensionsAndFacts(entities)

    return <>
        {
            dimensions.map(dimension => <td key={dimension}>{entity[dimension]}</td>)
        }
        {
            facts.map(fact => <td key={fact}>{entity[fact]}</td>)
        }
    </>
}

const Cubes = () => {
    return <List
        entityType="Cube"
        hasDelete
        headers={headers}
        row={row}
        title="AggregatesCubes"
    />
}

export default Cubes
