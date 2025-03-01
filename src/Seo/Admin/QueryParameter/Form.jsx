import {
    parseQuery,
    pascalize,
} from "App"
import { PageForm } from "Form"
import { ParameterInputs } from "SeoCommon"
import * as Components from "QueryParameterAugmentComponents"

const QueryParameterForm = () => {

    const {
        module,
        returnTo,
    } = parseQuery()

    const componentAugmenter = () => {
        if (module) {
            const componentName = `${pascalize(module)}QueryParametersAugmenter`
            const Component = Components[componentName]
            return Component && <Component />
        }
    }

    const inputs = <>
        {componentAugmenter()}
        {ParameterInputs}
    </>
    return <PageForm
        alwaysEdit
        entityLoadingUrl="/queryParameter/getEntity"
        entityType="QueryParameter"
        inputs={inputs}
        returnTo={returnTo}
        small
        submitTo="/queryParameter/upsert"
    />
}

export default QueryParameterForm
