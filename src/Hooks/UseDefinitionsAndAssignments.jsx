import {
    useEffect,
    useState,
} from "react"
import {
    camelize,
    get,
    parseGranularityFromQuery,
    pascalize,
    url,
} from "App"

const useDefinitionsAndAssignments = props => {

    const { entityType } = props
    const camelizedEntityType = camelize(entityType)
    const pascalizedEntityType = pascalize(entityType)
    const granularity = parseGranularityFromQuery()
    const [definitionsProgress, setDefinitionsProgress] = useState(false)
    const [assignmentsProgress, setAssignmentsProgress] = useState(false)
    const [definitions, setDefinitions] = useState([])
    const [assignments, setAssignments] = useState([])

    let assignmentsQuery = {}
    if (granularity.module) {
        assignmentsQuery.module = granularity.module
    }
    if (granularity.entityType) {
        assignmentsQuery.entityType = granularity.entityType
    }
    if (props.granularity || granularity.entity) {
        assignmentsQuery.entity = props?.granularity || granularity.entity
    }

    const assignmentsUrl = url({
        path: `/entity${pascalizedEntityType}/all`,
        query: assignmentsQuery
    })

    let definitionsQuery = {}
    if (Array.isArray(granularity.hetero)) {
        definitionsQuery.hetero = JSON.stringify(granularity.hetero)
    }
    else {
        if (granularity.module) {
            definitionsQuery.module = granularity.module
        }
        if (granularity.entityType) {
            definitionsQuery.entityType = granularity.entityType
        }
        if (granularity.entity) {
            definitionsQuery.entity = granularity.entity
        }
    }
    const definitionsUrl = url({
        path: `/${camelizedEntityType}/all`,
        query: definitionsQuery
    })

    useEffect(() => {
        setAssignmentsProgress(true)
        get(assignmentsUrl)
            .then(data => {
                setAssignments(data)
                setAssignmentsProgress(false)
            }, e => {
                console.error(e)
                setAssignmentsProgress(false)
            })
        setDefinitionsProgress(true)
        get(definitionsUrl)
            .then(data => {
                setDefinitions(data)
                setDefinitionsProgress(false)
            }, e => {
                console.error(e)
                setDefinitionsProgress(false)
            })
    }, [])

    return {
        assignments,
        definitions,
        progress: definitionsProgress || assignmentsProgress,
    }
}

export default useDefinitionsAndAssignments
