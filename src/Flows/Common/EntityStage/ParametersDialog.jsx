import { useState } from "react"
import app, {
    get,
    t,
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
    const [available, setAvailable] = useState({})
    const [required, setRequired] = useState("")

    const loadParameters = () => {
        const apiUrl = url({
            path: "/entityStage/getParameters",
            query: {
                id: entity.id
            }
        })
        setProgress(true)
        get(apiUrl)
            .then(data => {
                setProgress(false)
                const {
                    available,
                    required,
                } = data
                setAvailable(available)
                setRequired(required)
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
                <>
                    <h1>{t("FlowsAvailable")}</h1>
                    <ul dir="ltr">
                        {
                            app.getJsonHtml(available)
                        }
                    </ul>
                    <hr />
                    <h1>{t("FlowsRequired")}</h1>
                    <div
                        className="whitespace-pre"
                        dir="ltr"
                    >
                        {required}
                    </div>
                </>
        }
        onOpened={loadParameters}
        title="InfraParameters"
    />
}

export default ParametersDialog
