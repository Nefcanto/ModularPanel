import OutlinedInput from "@mui/material/OutlinedInput"
import { t } from "App"
import { useField } from "Hooks"
import Field from "./Field"

const Code = ({
    onChange,
    rows,
    svg,
    ...rest
}) => {

    const field = useField({
        type: "Code",
        placeholder: "InfraCode",
        ...rest,
    })
    const {
        cleanSvg,
        displayValue,
        isDirty,
        label,
        progress,
        setChosenValue,
        setDisplayValue,
        setIsDirty,
    } = field

    const handleBlur = () => {
        if (!isDirty) {
            setIsDirty(true)
        }
    }

    const handleChange = e => {
        console.log(e.target.value)
        if (!isDirty) {
            setIsDirty(true)
        }
        setDisplayValue(e.target.value)
        setChosenValue(e.target.value)
        if (onChange instanceof Function) {
            onChange(e.target.value)
        }
    }

    return <Field
        {...rest}
        {...field}
    >
        <OutlinedInput
            dir="ltr"
            disabled={progress}
            label={t(label)}
            minRows={10}
            multiline
            onBlur={handleBlur}
            onChange={handleChange}
            rows={rows}
            value={displayValue}
        />
        {
            svg &&
            <div className=" mt-1 flex justify-between items-center">
                <span
                    className="cursor-pointer text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                    onClick={cleanSvg}
                >
                    {t("InfraNeutralization")}
                </span>
                <span
                    className="w-8 aspect-square text-slate-400"
                    dangerouslySetInnerHTML={{
                        __html: displayValue
                    }}
                />
            </div>
        }
    </Field>
}

export default Code
