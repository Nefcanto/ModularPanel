import MuiRadio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormLabel from "@mui/material/FormLabel"
import { t } from "App"
import { useField } from "Hooks"
import Field from "./Field"

const Radio = ({
    choose,
    display,
    hideLabel,
    onChange,
    options,
    row,
    value,
    ...rest
}) => {

    const fieldParameters = {
        type: "Radio",
        initialValue: choose(value || {}),
        ...rest
    }
    if (value) {
        fieldParameters.initialValue = choose(value)
    }

    const field = useField(fieldParameters)
    const {
        chosenValue,
        displayValue,
        id,
        initialValue,
        internalInitialValue,
        isDirty,
        isInsideTable,
        isValid,
        label,
        progress,
        setChosenValue,
        setDisplayValue,
        setIsDirty,
    } = field

    const extraProps = {}
    if (row) {
        extraProps.row = true
    }

    const handleOnChange = e => {
        if (!isDirty) {
            setIsDirty(true)
        }
        setDisplayValue(e.target.value)
        setChosenValue(e.target.value)
        if (onChange instanceof Function) {
            const value = e.target.value
            const entity = options.find(i => choose(i).toString() === value.toString())
            onChange(entity.value, entity)
        }
    }

    const extraParams = {}
    if (isInsideTable) {
        extraParams.size = "small"
    }

    return <Field
        {...rest}
        {...field}
        className={isInsideTable ? "" : ""}
    >
        {/* <FormLabel>{t(label)}</FormLabel> */}
        <RadioGroup
            {...extraProps}
            className="flex justify-between gap-x-8 "
            defaultValue={chosenValue || false}
            name={id}
            onChange={handleOnChange}
            value={chosenValue || false}
        >
            {
                options.map(i => <FormControlLabel
                    className="select-none"
                    control={<MuiRadio
                        disabled={progress}
                        {...extraParams}
                    />}
                    key={choose(i)}
                    label={t(display(i))}
                    onBlur={() => {
                        if (!isDirty) {
                            setIsDirty(true)
                        }
                    }}
                    value={choose(i) || false}
                />)
            }
        </RadioGroup>
    </Field>
}

export default Radio
