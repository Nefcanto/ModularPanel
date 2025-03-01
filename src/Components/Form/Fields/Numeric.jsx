import { isSomething } from "App"
import Text from "./Text"

const Numeric = ({
    integers,
    max,
    min,
    onChange,
    realNumbers,
    digitsAfterDecimalPoint,
    ...rest
}) => {

    const naturalNumbers = !integers && !realNumbers

    const checkMin = value => {
        value = value * 1
        if (min && min > Math.abs(value)) {
            return false
        }
        return true
    }

    const checkMax = value => {
        value = value * 1
        if (max && max < Math.abs(value)) {
            return false
        }
        return true
    }

    const checkMinMax = value => {
        return checkMin(value) && checkMax(value)
    }

    const checkNaturalNumbers = value => {
        if (value > 0 && Number.isInteger(value * 1)) {
            return checkMinMax(value)
        }
        return false
    }

    const checkIntegers = value => {
        if (Number.isInteger(value * 1)) {
            return checkMinMax(value)
        }
        return false
    }

    const checkRealNumbers = value => {
        const result = checkMinMax(value)
        return result
    }

    const show = value => {
        try {
            if (typeof value === "number") {
                return value.toLocaleString(undefined, {
                    maximumFractionDigits: digitsAfterDecimalPoint || 5
                })
            }
            else {
                if (isSomething(value)) {
                    if (value.endsWith(".")) {
                        return value
                    }
                    const numericValue = +choose(value)
                    if (isNaN(numericValue)) {
                        if (value === "-") {
                            return value
                        }
                        return numericValue
                    }
                    return numericValue.toLocaleString(undefined, {
                        maximumFractionDigits: digitsAfterDecimalPoint || 5
                    })
                } else {
                    return value ?? ""
                }
            }
        } catch (error) {
        }
    }

    const choose = value => {
        try {
            if (typeof value === "number") {
                return value
            } else {
                return value?.replaceAll(",", "")
            }
        } catch (error) {
        }
    }

    const check = value => {
        const chosen = choose(value)
        if (chosen === "") {
            return true
        }
        if (isNaN(Number.parseFloat(chosen))) {
            if (chosen.trim() === "-") {
                return true
            }
            return false
        }
        if (naturalNumbers) {
            return checkNaturalNumbers(chosen)
        }
        if (integers) {
            return checkIntegers(chosen)
        }
        if (realNumbers) {
            return checkRealNumbers(chosen)
        }
        return false
    }

    const onChangeManagement = value => {

        const isValid = check(value)

        if (isValid && onChange) {
            onChange(choose(value))
        }
        return isValid
    }

    return <Text
        choose={choose}
        dir="ltr"
        onChange={onChangeManagement}
        show={show}
        type="Numeric"
        {...rest}
    />
}

export default Numeric
