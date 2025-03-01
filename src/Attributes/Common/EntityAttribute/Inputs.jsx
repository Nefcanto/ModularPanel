import {
    Check,
    DateTime,
    Select,
    Text,
} from "Form"

const Inputs = ({
    assignments,
    definitions,
}) => {

    const renderInputs = definition => {
        switch (definition.dataType) {
            case "boolean":
                return <Check
                    initialValue={assignments?.find(i => i.definition == definition.definition)?.value === "True"}
                    placeholder={definition.title}
                    property={definition.definition}
                />
            case "text":
                return <Text
                    initialValue={assignments?.find(i => i.definition == definition.definition)?.value}
                    placeholder={definition.title}
                    property={definition.definition}
                />
            case "singleChoice":
                return <Select
                    choose={i => i.title}
                    display={i => i?.title}
                    initialValue={assignments?.find(i => i.definition == definition.definition)?.value ?? ""}
                    options={definition?.relatedItems?.options}
                    placeholder={definition.title}
                    property={definition.definition}
                />
            case "dateTime":
                return <DateTime
                    initialValue={assignments?.find(i => i.definition == definition?.definition)?.value}
                    nullable
                    placeholder={definition.title}
                    property={definition.definition}
                />
            default:
                break
        }
    }

    return <>
        {
            definitions.map((definition, index) => <div key={index}>
                {
                    renderInputs(definition)
                }
            </div>
            )
        }
    </>
}

export default Inputs
