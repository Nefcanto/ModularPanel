import {
    InlineForm,
} from "Form"
import PriceField from "./Field"

const inputs = ({ currentEntity }) => {
    return <PriceField
        useSuperUnit
        entity={currentEntity}
    />
}

const PriceInlineForm = () => {

    return <InlineForm
        entityType="price"
        inputs={inputs}
        entityLoadingUrl="/price/getByEntity"
        submitTo="/price/assign"
    />
}

export default PriceInlineForm

