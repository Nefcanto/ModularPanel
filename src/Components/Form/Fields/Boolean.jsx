import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import { t } from "App"
import { useField } from "Hooks"
import Field from "./Field"

const Boolean = ({
    falseLabel,
    nullable,
    property,
    trueLabel,
    ...rest
}) => {

    const field = useField({
        property,
        type: "Boolean",
        ...rest
    })
    const {
        displayValue,
        id,
        isDirty,
        label,
        progress,
        setChosenValue,
        setDisplayValue,
        setIsDirty,
    } = field

    return <Field
        {...field}
        {...rest}
    >
        <FormGroup className="">

            <FormControl>
                <FormLabel id={id} >{t(label || property)}</FormLabel>
                <RadioGroup
                    value={displayValue ?? ""}
                    row
                    aria-labelledby={id}
                    defaultValue="female"
                    name={property}
                    onChange={(e) => {
                        setIsDirty(true)
                        setChosenValue(e.target.value === "true")
                        setDisplayValue(e.target.value === "true")
                    }}
                >
                    <FormControlLabel
                        value="true"
                        control={<Radio
                            size="small"
                            disabled={progress}
                        />}
                        label={t(trueLabel)}
                    />
                    <FormControlLabel
                        value="false"
                        control={<Radio
                            size="small"
                            disabled={progress}
                        />}
                        label={t(falseLabel)}
                    />
                </RadioGroup>
            </FormControl>

        </FormGroup>
    </Field>
}

export default Boolean
