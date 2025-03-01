import Checkbox from "@mui/material/Checkbox"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import { t } from "App"
import { useFilter } from "Hooks"
import Filter from "./Filters/Filter"

const Boolean = ({
    change,
    falseLabel,
    falseValue,
    useNotEqualToForFalse,
    label,
    nullable,
    onChange,
    property,
    trueLabel,
    trueValue,
}) => {

    if (change) {
        throw "Do not use change. Use onChange."
    }
    const internalTrueValue = trueValue || "true"
    const internalFalseValue = falseValue || "false"

    const {
        entity,
        id,
        initialFilter,
        isDirty,
        isReset,
        removeFilter,
        setEntity,
        setIsDirty,
    } = useFilter({
        choose: i => i,
        property,
        show: i => i,
        type: "boolean"
    })

    const allCheckLogic = isReset
        ?
        true
        :
        isDirty
            ?
            entity === null
            :
            initialFilter
                ?
                false
                :
                true

    const trueCheckLogic = isReset
        ?
        false
        :
        isDirty
            ?
            entity === internalTrueValue
            :
            initialFilter?.value === internalTrueValue

    const falseCheckLogic = isReset
        ?
        false
        :
        isDirty
            ?
            entity === internalFalseValue
            :
            initialFilter?.value === internalFalseValue

    const setDirty = () => {
        if (!isDirty) {
            setIsDirty(true)
        }
    }

    const setValue = e => {
        if (e.target.value === internalTrueValue) {
            setEntity(internalTrueValue)
        }
        else if (e.target.value === internalFalseValue) {
            setEntity(internalFalseValue)
        }
        else {
            removeFilter(property)
        }
    }

    return <Filter
        halfRow={nullable}
        hideLabel
        id={id}
    >
        <FormGroup className="">
            {
                nullable
                    ?
                    <FormControl className="flex flex-row items-center gap-6">
                        <FormLabel id={property}>{t(label || property)}</FormLabel>
                        <RadioGroup
                            aria-labelledby={property}
                            name={property}
                            onChange={setValue}
                            onClick={setDirty}
                            onKeyDown={setDirty}
                            row
                        >
                            <FormControlLabel
                                checked={allCheckLogic}
                                control={<Radio size="small" />}
                                label={t("InfraAll")}
                                value="all"
                            />
                            <FormControlLabel
                                checked={trueCheckLogic}
                                control={<Radio size="small" />}
                                label={t(trueLabel ?? "InfraIs")}
                                value={internalTrueValue}
                            />
                            <FormControlLabel
                                checked={falseCheckLogic}
                                control={<Radio size="small" />}
                                label={t(falseLabel ?? "InfraIsNot")}
                                value={internalFalseValue}
                            />
                        </RadioGroup>
                    </FormControl>
                    :
                    <FormControlLabel
                        control={<Checkbox />}
                        checked={
                            isReset
                                ?
                                false
                                :
                                isDirty
                                    ?
                                    entity || false
                                    :
                                    initialFilter?.value === "true"
                                        ?
                                        true
                                        :
                                        false
                        }
                        label={t(label || property)}
                        onChange={e => {
                            if (e.target.checked) {
                                setEntity(e.target.checked)
                                if (onChange instanceof Function) (
                                    onChange(true)
                                )
                            }
                            else {
                                removeFilter(property)
                                if (onChange instanceof Function) (
                                    onChange(false)
                                )
                            }
                        }}
                        onClick={setDirty}
                        onKeyDown={setDirty}
                    />
            }
        </FormGroup>
    </Filter>
}

export default Boolean
