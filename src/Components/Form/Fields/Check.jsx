import {
    useEffect,
    useState,
} from "react"
import Checkbox from "@mui/material/Checkbox"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import { useField } from "Hooks"
import Field from "./Field"
import { t } from "App"

const Check = ({
    falseLabel,
    nullable,
    onChange,
    toggle,
    trueLabel,
    ...rest
}) => {

    const field = useField({
        type: "Check",
        ...rest
    })
    const {
        chosenValue,
        displayValue,
        id,
        initialValue,
        isDirty,
        isInsideTable,
        label,
        progress,
        setChosenValue,
        setDisplayValue,
        setIsDirty,
        setState,
        state,
    } = field

    const [checked, setChecked] = useState(false)
    const [pendingValue, setPendingValue] = useState(null);
    const [nullablePendingValue, setNullablePendingValue] = useState(null);

    const internalOnChange = value => {
        if (onChange instanceof Function) {
            onChange(value)
        }
    }

    const setForNullability = value => {
        if (value == "true") {
            setDisplayValue(true)
            setChosenValue(true)
            internalOnChange(true)
        }
        else if (value == "false") {
            setDisplayValue(false)
            setChosenValue(false)
            internalOnChange(false)
        }
        else {
            setDisplayValue("HolismNull")
            setChosenValue("HolismNull")
            internalOnChange("HolismNull")
        }
    }

    const set = value => {
        setDisplayValue(value)
        setChosenValue(value)
        internalOnChange(value)
        if (toggle) {
            if (value) {
                setState(toggle)
            }
            else {
                setState()
            }
        }
    }

    const handleChangeConsideringNullability = e => {
        if (!isDirty) {
            setIsDirty(true)
            setNullablePendingValue(e.target.value);
        }
        else {
            setForNullability(e.target.value)
        }
    }

    const handleChange = e => {
        if (!isDirty) {
            setIsDirty(true)
            setPendingValue(e.target.checked);
        }
        else {
            set(e.target.checked)
        }
    }

    const setDirty = () => {
        if (!isDirty) {
            setIsDirty(true)
        }
    }

    const extraParams = {}
    if (isInsideTable) {
        extraParams.size = "small"
    }

    useEffect(() => {
        setChecked(displayValue || (toggle && toggle === state) || false)
    }, [displayValue, state])

    useEffect(() => {
        if (isDirty && nullablePendingValue !== null) {
            setForNullability(nullablePendingValue)
            setNullablePendingValue(null)
        }
    }, [isDirty, nullablePendingValue])

    useEffect(() => {
        if (isDirty && pendingValue !== null) {
            set(pendingValue)
            setPendingValue(null)
        }
    }, [isDirty, pendingValue])

    useEffect(() => {
        if (!isDirty) {
            if (toggle) {
                if (checked) {
                    setState(toggle)
                }
                else {
                    setState()
                }
            }
        }
    }, [checked])

    return <Field
        {...rest}
        {...field}
    >
        <FormGroup className="">
            {
                nullable
                    ?
                    <FormControl>
                        <FormLabel id={label}>{t(label)}</FormLabel>
                        <RadioGroup
                            aria-labelledby={label}
                            name={label}
                            onChange={handleChangeConsideringNullability}
                            onClick={setDirty}
                            onKeyDown={setDirty}
                            row
                        >
                            <FormControlLabel
                                checked={displayValue === null || displayValue === "HolismNull"}
                                control={<Radio
                                    size="small"
                                    disabled={progress}
                                />}
                                label={t("InfraNull")}
                                value="HolismNull"
                            />
                            <FormControlLabel
                                checked={displayValue === true}
                                control={<Radio
                                    size="small"
                                    disabled={progress}
                                />}
                                label={t(trueLabel || "InfraYes")}
                                value="true"
                            />
                            <FormControlLabel
                                checked={displayValue === false || displayValue === "false"}
                                control={<Radio
                                    size="small"
                                    disabled={progress}
                                />}
                                label={t(falseLabel || "InfraNo")}
                                value="false"
                            />
                        </RadioGroup>
                    </FormControl>
                    :
                    <FormControlLabel
                        checked={checked}
                        className="select-none"
                        control={<Checkbox
                            disabled={progress}
                            onClick={handleChange}
                            {...extraParams}
                        />}
                        label={t(label)}
                        onBlur={setDirty}
                    />
            }
        </FormGroup>
    </Field>
}

export default Check
