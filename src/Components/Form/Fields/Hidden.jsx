import {
    useContext,
    useEffect,
    useState,
} from "react"
import { FormContext } from "Contexts"
import { useField } from "Hooks"

const Hidden = ({
    property,
    value,
}) => {

    const [id, setId] = useState()

    const field = useField({
        currentValue: value,
        doNotChangeOnEntityChange: true,
        initialValue: value,
        property: property,
        type: "Hidden",
    })
    const {
        setChosenValue,
        setDisplayValue,
    } = field

    useEffect(() => {
        setId(`hidden_${property}`)
    }, [property])

    useEffect(() => {
        if (value) {
            setDisplayValue(true)
            setChosenValue(value)
        }
    }, [value])

    return <input
        id={id}
        type="hidden"
        value={value || ""}
    />
}

export default Hidden
