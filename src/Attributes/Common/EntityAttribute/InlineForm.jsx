import {
    useEffect,
    useState,
} from "react"
import {
    get,
    parseQuery,
} from "App"
import {
    Check,
    InlineForm,
    Select,
    Text,
} from "Form"

const AttributeInlineForm = props => {

    const [attributes, setAttributes] = useState([])
    const [entityAttributes, setEntityAttributes] = useState([])
    const {
        entityGuid,
        entityType,
    } = parseQuery()

    useEffect(() => {
        get(`/entityAttribute/all?entityType=${entityType}`)
            .then(data => {
                setAttributes(data)
            })
        if (entityGuid) {
            get(`/entityAttribute/all?entityGuid=${entityGuid}`)
                .then(data => {
                    setEntityAttributes(data)
                })
        }

    }, [])

    const renderInputs = entityAttribute => {

        switch (entityAttribute.dataType) {
            case "boolean":
                return <Check
                    property={entityAttribute.attributeId}
                    placeholder={entityAttribute.title}
                    initialValue={entityAttributes?.find(i => i.attributeId == entityAttribute.attributeId)?.value === "True"}
                />
            case "text":
                return <Text
                    property={entityAttribute.attributeId}
                    placeholder={entityAttribute.title}
                    initialValue={entityAttributes?.find(i => i.attributeId == entityAttribute.attributeId)?.value}
                />
            case "singleChoice":
                return <Select
                    choose={i => i.title}
                    display={i => i?.title}
                    options={entityAttribute?.relatedItems?.options}
                    placeholder={entityAttribute.title}
                    property={entityAttribute.attributeId}
                    initialValue={entityAttributes?.find(i => i.attributeId == entityAttribute.attributeId)?.value ?? ""}
                />
            default:
                break
        }
    }

    const inputs = <>
        {
            attributes.map((attribute, index) => <>
                <div key={index}>
                    {
                        renderInputs(attribute)
                    }
                </div>
            </>)
        }
    </>

    return <InlineForm
        entityType="Attribute"
        inputs={inputs}
        submitTo="/entityAttribute/set"
        large
        disableAutomaticEntityLoading
    />

}

export default AttributeInlineForm
