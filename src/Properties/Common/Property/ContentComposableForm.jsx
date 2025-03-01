import {
    ComposableForm,
    Rte,
} from "Form"
import { post } from "App"

const inputs = <>
    <Rte
        placeholder="PropertiesWriteYourPropertyContentHere"
        property="Content"
        simple
    />
</>

const PropertyContentComposableForm = () => {

    const save = ({
        data,
        error,
        previousFormData,
        setProgress,
        success,
    }) => {
        setProgress(true)
        const query = new URLSearchParams()
        if (previousFormData) {
            data["id"] = previousFormData["id"]
            query.delete("returnTo")
            query.delete("parentId")
            if (previousFormData) {
                Object.keys(previousFormData).forEach(key => {
                    query.set(key, previousFormData[key])
                })
            }
        }
        post(`/propertyContent/upsert?${query.toString()}`, data).then(data => {
            setProgress(false)
            success(true)

        }, e => error(e))
    }

    return <ComposableForm
        alwaysEdit
        entityType="PropertyContent"
        inputs={inputs}
        large
        okAction={save}
        parentEntityType="Property"
        title="InfraEditContent"
    />
}

export default PropertyContentComposableForm
