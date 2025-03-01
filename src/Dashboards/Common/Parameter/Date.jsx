import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import OutlinedInput from "@mui/material/OutlinedInput"
import { getLocale } from "App"
import Parameter from "./Parameter"

const Date = ({
    block,
    parameter,
}) => {

    const localeKey = getLocale().key
    let format = "MM/dd/yyyy"
    if (localeKey == supportedLocales.fa) {
        format = "yyyy/MM/dd"
    }

    return <Parameter
        id={parameter.id}
    >

        <DatePicker
            format={format}
            label={parameter.translation}
            onChange={date => console.log(date)}
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
    </Parameter>
}

export default Date
