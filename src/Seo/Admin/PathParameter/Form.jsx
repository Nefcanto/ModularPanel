import {
    PageForm,
    Text,
} from "Form"
import { ParameterInputs } from "SeoCommon"

const inputs = <>
    <Text
        property="Path"
        placeholder="SeoPath"
        required
        dir="ltr"
    />
    {ParameterInputs}
</>

const PathParameterForm = <PageForm
    entityType="PathParameter"
    humanReadableEntityType="SeoPath"
    inputs={inputs}
/>

export default PathParameterForm
