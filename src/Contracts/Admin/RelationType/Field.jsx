import {
    useEffect,
    useState,
} from "react"
import { get } from "App"
import { useMessage } from "Hooks"
import { Select } from "Form"

const RelationTypeField = props => {

    const [relationTypes, setRelationTypes] = useState([])
    const [relationTypeProgress, setRelationTypeProgress] = useState(true)
    const { error } = useMessage()

    useEffect(() => {
        setRelationTypeProgress(true)
        let url = `/relationType/all`
        get(url)
            .then(data => {
                setRelationTypes(data)
                setRelationTypeProgress(false)
            }, e => {
                error(e)
                setRelationTypeProgress(false)
            })
    }, [])

    return <>
        <Select
            property="RelationTypeId"
            placeholder="ContractsRelationType"
            options={relationTypes}
            display={i => i?.title}
            choose={i => i.id}
            loading={relationTypeProgress}
            required="ContractsYouShouldChooseRelationType"
            {...props}
        />
    </>
}

export default RelationTypeField
