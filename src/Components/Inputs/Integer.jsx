import { useState } from "react"
import TextField from "@mui/material/TextField"
import { t } from "App"

const Integer = ({
    acceptOnly,
    onEnter,
    placeholder,
    ...rest
}) => {
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        let newValue = e.target.value
        if (newValue.indexOf(".") > -1) {
            return
        }
        let normalizedNewValue = newValue.replace(",", "")
        if (isNaN(normalizedNewValue * 1)) {
            return
        }
        if (Number(normalizedNewValue) === 0) {
            setValue("")
            return
        }
        if (acceptOnly && typeof acceptOnly === "function") {
            if (acceptOnly(normalizedNewValue)) {
                setValue(newValue.toLocaleString(0))
            }
            return
        }
        else {
            setValue(newValue.toLocaleString(0))
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            if (onEnter && typeof onEnter === "function") {
                onEnter(value)
                e.preventDefault()
                e.stopPropagation()
            }
        }
    }

    return <TextField
        id="goToPageInput"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={t(placeholder)}
        {...rest}
    />
}

export default Integer
