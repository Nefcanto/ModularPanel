import {
    useContext,
    useState,
} from "react"
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker"
import OutlinedInput from "@mui/material/OutlinedInput"
import {
    filterOperator,
    getLocale,
    t,
} from "App"
import { useFilter } from "Hooks"
import { ListContext } from "Contexts"
import Filter from "./Filter"

const DateTime = ({
    inputProps,
    operator,
    placeholder,
    property,
    regex,
    type,
    ...rest
}) => {

    const { isBrowse } = useContext(ListContext)
    const {
        entity,
        id,
        initialFilter,
        isChanged,
        isDirty,
        isReset,
        label,
        setEntity,
        setIsDirty,
        shown,
    } = useFilter({
        choose: i => i,
        operator: operator || filterOperator.lessThan,
        placeholder,
        property,
        show: i => i,
        type: "date",
        ...rest
    })

    const [internalValue, setInternalValue] = useState()

    const localeKey = getLocale().key
    let format = "MM/dd/yyyy HH:mm"
    if (localeKey == supportedLocales.fa) {
        format = "yyyy/MM/dd HH:mm"
    }

    return <Filter
        id={id}
    >

        <DateTimePicker
            format={format}
            label={t(label)}
            onBlur={() => {
                if (!isDirty) {
                    setIsDirty(true)
                }
            }}
            onChange={date => {
                if (!isDirty) {
                    setIsDirty(true)
                }
                setInternalValue(date.toISOString())
                setEntity(date.toISOString())
            }}
            textField={({
                InputProps,
                inputProps,
                inputRef,
            }) => <OutlinedInput
                    endAdornment={InputProps?.endAdornment}
                    inputProps={inputProps}
                    ref={inputRef}
                />}

        />
    </Filter>
}

export default DateTime
