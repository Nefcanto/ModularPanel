import { SketchPicker } from "react-color"
import { useField } from "Hooks"
import Field from "./Field"

const Color = ({
    color,
    colorKey,
    initialValue,
    onChange,
    property,
    returnHex,
}) => {

    const field = useField({
        initialValue: color || initialValue,
        type: "Color",
        property: property || "Color"
    })
    const {
        displayValue,
        chosenValue,
        isDirty,
        setChosenValue,
        setDisplayValue,
        setIsDirty,
    } = field

    return <Field
        {...field}
        hideLabel
    >
        <SketchPicker
            color={displayValue || color}
            onChange={color => {
                if (!isDirty) {
                    setIsDirty(true)
                }
                if (returnHex) {
                    setDisplayValue(color.hex)
                    setChosenValue(color.hex)
                }
                else {
                    setDisplayValue(color)
                    setChosenValue(color)
                }
                if (onChange instanceof Function) {
                    if (returnHex) {
                        onChange(color.hex, colorKey)
                    }
                    else {
                        onChange(color, colorKey)
                    }
                }
            }}
        />
    </Field>
}

export default Color
