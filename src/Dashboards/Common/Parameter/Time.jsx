import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker"
import OutlinedInput from "@mui/material/OutlinedInput"
import { getLocale } from "App"
import Parameter from "./Parameter"

const DateTime = ({
    block,
    parameter,
}) => {

    const localeKey = getLocale().key
    let format = "MM/dd/yyyy HH:mm"
    if (localeKey == supportedLocales.fa) {
        format = "yyyy/MM/dd HH:mm"
    }

    return <Parameter
        id={parameter.id}
    >

        <DateTimePicker
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

export default DateTime
