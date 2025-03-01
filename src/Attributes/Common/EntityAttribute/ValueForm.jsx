import {
    useEffect,
    useState
} from "react"
import {
    get,
    url,
} from "App"
import { useMessage } from "Hooks"
import { Progress } from "Panel"
import {
    Check,
    DialogForm,
    LongText,
    Numeric,
    Select,
    Text,
} from "Form"
import { GranularityField } from "GranularitiesCommon"
import { UnitField } from "UnitsCommon"
import AttributeField from "../Attribute/Field"

const EntityAttributeForm = ({ entity }) => {

    const [progress, setProgress] = useState(false)
    const [options, setOptions] = useState([])
    const [attribute, setAttribute] = useState()
    const { error } = useMessage()

    useEffect(() => {
        const dataType = attribute?.dataType
        if (dataType !== "singleChoice" && dataType !== "multiChoice") {
            return
        }
        setProgress(true)
        get(url({
            path: "/option/list",
            query: {
                attribute: attribute.key
            }
        }))
            .then(options => {
                setProgress(false)
                setOptions(options.data)
            }, e => {
                setProgress(false)
                error(e)
            })
    }, [attribute])

    const value = progress
        ?
        <Progress />
        :
        <>
            {
                attribute?.dataType == "text" &&
                <Text
                    placeholder={attribute?.title}
                    property="Value"
                />
            }
            {
                attribute?.dataType == "longText" &&
                <LongText
                    placeholder={attribute?.title}
                    property="Value"
                />
            }
            {
                attribute?.dataType == "naturalNumber" &&
                <Numeric
                    placeholder={attribute?.title}
                    property="Value"
                />
            }
            {
                attribute?.dataType == "integers" &&
                <Numeric
                    integers
                    placeholder={attribute?.title}
                    property="Value"
                />
            }
            {
                attribute?.dataType == "realNumber" &&
                <Numeric
                    digitsAfterDecimalPoint={10}
                    placeholder={attribute?.title}
                    property="Value"
                    realNumbers
                />
            }
            {
                attribute?.dataType == "percent" &&
                <Numeric
                    max={100}
                    min={0}
                    placeholder={attribute?.title}
                    property="Value"
                />
            }
            {
                attribute?.dataType == "boolean" &&
                <Check
                    placeholder={attribute?.title}
                    property="Value"
                />
            }
            {
                attribute?.dataType == "nullableBoolean" &&
                <Check
                    nullable
                    placeholder={attribute?.title}
                    property="Value"
                />
            }
            {
                attribute?.dataType == "singleChoice" &&
                <Select
                    choose={i => i.key}
                    display={i => i?.value}
                    initialValue={entity?.key}
                    options={options}
                    placeholder={attribute?.title}
                    property="Value"
                />
            }
            {
                attribute?.dataType == "multiChoice" &&
                <Select
                    choose={i => i.guid}
                    csv
                    display={i => i?.title}
                    initialValue={entity?.value}
                    multi
                    options={options}
                    placeholder={attribute?.title}
                    property="Value"
                />
            }
            {
                (
                    attribute?.dataType === "date" ||
                    attribute?.dataType === "time" ||
                    attribute?.dataType === "dateTime" ||
                    attribute?.dataType === "color" ||
                    attribute?.dataType === "link" ||
                    attribute?.dataType === "svg" ||
                    attribute?.dataType === "image" ||
                    attribute?.dataType === "audio" ||
                    attribute?.dataType === "video" ||
                    attribute?.dataType === "file" ||
                    attribute?.dataType === "code"
                ) &&
                <Text
                    placeholder={attribute?.title}
                    property="Value"
                />
            }
        </>

    const inputs = entity => <>
        <GranularityField />
        <AttributeField onChange={(key, attribute) => setAttribute(attribute)} />
        {value}
        {
            attribute && !attribute?.unitless &&
            <UnitField />
        }
    </>

    return <DialogForm
        entityType="EntityAttribute"
        humanReadableEntityType="AttributesEntityAttribute"
        inputs={inputs}
    />
}

export default EntityAttributeForm
