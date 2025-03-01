import { useState } from "react"
import {
    get,
    url,
} from "App"
import {
    Dialog,
    Progress,
} from "Panel"

const ParametersDialog = ({
    entity,
    error,
}) => {

    const [progress, setProgress] = useState(true)
    const [parameters, setParameters] = useState([])

    const loadParameters = () => {
        const apiUrl = url({
            path: "/flow/getParameters",
            query: {
                flow: entity.key
            }
        })
        setProgress(true)
        get(apiUrl)
            .then(data => {
                setProgress(false)
                setParameters(data)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <Dialog
        content={
            progress
                ?
                <Progress />
                :
                <ul dir="ltr">
                    {
                        parameters?.map(parameter => <li key={parameter}>{parameter}</li>)
                    }
                </ul>
        }
        onOpened={loadParameters}
        title="InfraParameters"
    />
}

export default ParametersDialog
