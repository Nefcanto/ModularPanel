import Check from "./Check"
import Code from "./Code"
import Color from "./Color"
import DateTime from "./DateTime"
import Link from "./Link"
import LongText from "./LongText"
import Numeric from "./Numeric"
import Select from "./Select"
import Text from "./Text"

const Dynamic = ({
    assignments,
    definitions,
    fieldAugmenter,
}) => {

    let definitionEntityType = ""
    if (assignments?.length > 0) {
        definitionEntityType = assignments[0].relatedItems.entityType.toLowerCase().replace("entity", "")
    }

    const augment = (definition, input) => {
        const assignment = assignments?.find(i => i[definitionEntityType] === definition.key)
        let augmenter = null
        if (fieldAugmenter) {
            augmenter = fieldAugmenter(definition, assignment)
        }
        return augmenter
            ?
            <div className="flex gap-2 w-full items-center">
                <div className="flex-1">
                    {input}
                </div>
                <div className="min-w-24 md:min-w-36">
                    {augmenter}
                </div>
            </div>
            :
            input
    }

    const getInput = definition => {
        const property = definition.relatedItems.keySegment || definition.key
        const assignment = assignments?.find(i => i[definitionEntityType] === definition.key)
        switch (definition.dataType) {
            case "text":
                return <Text
                    dir={definition.ltr ? "ltr" : null}
                    initialValue={assignment?.value}
                    placeholder={definition.title}
                    property={property}
                />
            case "longText":
                return <LongText
                    dir={definition.ltr ? "ltr" : null}
                    initialValue={assignment?.value}
                    placeholder={definition.title}
                    property={property}
                />
            case "naturalNumber":
                return <Numeric
                    initialValue={assignment?.value}
                    placeholder={definition.title}
                    property={property}
                />
            case "integer":
                return <Numeric
                    initialValue={assignment?.value}
                    integers
                    placeholder={definition.title}
                    property={property}
                />
            case "realNumber":
                return <Numeric
                    digitsAfterDecimalPoint={10}
                    initialValue={assignment?.value}
                    placeholder={definition.title}
                    property={property}
                    realNumbers
                />
            case "percent":
                return <Numeric
                    initialValue={assignment?.value}
                    max={100}
                    min={0}
                    placeholder={definition.title}
                    property={property}
                />
            case "boolean":
                return <Check
                    initialValue={assignment?.value?.toLowerCase() === "true" || assignment?.value === "1"}
                    placeholder={definition.title}
                    property={property}
                />
            case "nullableBoolean":
                const initialValue = (assignment === undefined || assignment?.value === "HolismNull")
                    ?
                    "HolismNull"
                    :
                    assignment?.value?.toLowerCase() === "true" || assignment?.value === "1"
                return <Check
                    initialValue={initialValue}
                    nullable
                    placeholder={definition.title}
                    property={property}
                />
            case "singleChoice":
                return <Select
                    choose={i => i.value}
                    display={i => i?.value}
                    initialValue={assignment?.value ?? ""}
                    options={definition?.relatedItems?.options}
                    placeholder={definition.title}
                    property={property}
                />
            case "multiChoice":
                return <Select
                    choose={i => i.value}
                    csv
                    display={i => i?.title}
                    initialValue={assignment?.value ?? ""}
                    multi
                    options={definition?.relatedItems?.options}
                    placeholder={definition.title}
                    property={property}
                />
            case "dateTime":
                return <DateTime
                    initialValue={assignment?.value}
                    nullable
                    placeholder={definition.title}
                    property={property}
                />
            case "color":
                return <Color
                    initialValue={assignment?.value}
                    placeholder={definition.title}
                    property={property}
                    returnHex
                />
            case "link":
                return <Link
                    initialValue={assignment?.value}
                    placeholder={definition.title}
                    property={property}
                />
            case "svg":
                return <Code
                    initialValue={assignment?.value}
                    placeholder={definition.title}
                    property={property}
                    svg
                />
            case "code":
                return <Code
                    initialValue={assignment?.value}
                    placeholder={definition.title}
                    property={property}
                />
            case "date":
            case "time":
            case "image":
            case "audio":
            case "video":
            case "file":
            default:
                return <span>Define input for {definition.dataType}</span>
        }
    }

    return <>
        {
            definitions.map(definition => {
                const input = augment(definition, getInput(definition))
                return <div key={definition.id}>
                    {input}
                </div>
            })
        }
    </>
}

export default Dynamic
