import {
    DialogForm,
    Hidden,
} from "Form"
import BrandField from "./Field"

const inputs = entity => {
    return <>
        <BrandField />
        <Hidden
            property="EntityGuid"
            value={entity?.guid}
        />
    </>
}

const ChangeBrandForm = ({ entity }) => {

    return <DialogForm
        entityType={entity?.relatedItems?.entityType}
        inputs={inputs}
        submitTo={`/${entity?.relatedItems?.entityType}/changeBrand`}
        title="BrandsChangeBrand"
    />
}

export default ChangeBrandForm
