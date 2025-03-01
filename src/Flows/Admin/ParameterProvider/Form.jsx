import {
    get,
    parseQuery,
} from "App"
import {
    Code,
    PageForm,
} from "Form"

const inputs = <>
    <Code
        property="Code"
        required
    />
</>

const ParameterProviderForm = () => {

    const { flow } = parseQuery()

    const getParameterProvider = ({
        error,
        setEntity,
        setProgress,
    }) => {
        setProgress(true)
        get(`/parameterProvider/getByFlow?flow=${flow}`)
            .then(data => {
                setProgress(false)
                setEntity(data)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <PageForm
        entityType="ParameterProvider"
        humanReadableEntityType="InfraCode"
        inputs={inputs}
        loader={getParameterProvider}
    />
}

export default ParameterProviderForm
