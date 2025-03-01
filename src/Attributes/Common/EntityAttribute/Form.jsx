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
    DialogForm,
    Dynamic,
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
        <Dynamic />

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
