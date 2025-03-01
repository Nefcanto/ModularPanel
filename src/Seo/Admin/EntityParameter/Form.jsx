import app, { get } from "App"
import { useMessage } from "Hooks"
import { PageForm } from "Form"
import { ParameterInputs } from "SeoCommon"

const EntityParameterForm = () => {

    const {
        entity,
        entityType,
        module,
    } = app.parseQuery()
    const { error } = useMessage()

    const loader = ({
        setEntity,
        setProgress,
    }) => {
        if (module && entityType && entity) {
            setProgress(true)
            get(`/entityParameter/getRecord?module=${app.camelize(module)}&entityType=${app.camelize(entityType)}&entity=${entity}`)
                .then(data => {
                    setProgress(false)
                    setEntity(data)
                }, e => {
                    setProgress(false)
                    error(e)
                })
        }
    }

    return <PageForm
        entityType="EntityParameter"
        inputs={ParameterInputs}
        loader={loader}
        small
    />
}

export default EntityParameterForm
