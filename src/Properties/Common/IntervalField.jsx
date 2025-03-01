import { useState } from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { t } from "App"

const IntervalField = ({
    initialValue,
    onChange
}) => {

    const [reasons, setIntervals] = useState([
        {
            key: "yearly",
            translationKey: "AggregatesYearly"
        },
        {
            key: "monthly",
            translationKey: "AggregatesMonthly"
        }
    ])

    const [chosenValue, setChosenValue] = useState(initialValue)

    return <FormControl size="small">
        <InputLabel id="demo-simple-select-label">
        </InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={chosenValue}
            onChange={e => {
                setChosenValue(e.target.value)
                if (onChange) {
                    onChange(e.target.value)
                }
            }}
        >
            {
                reasons?.map(i => <MenuItem
                    key={i.key}
                    value={i.key}
                >
                    {t(i.translationKey)}
                </MenuItem>
                )
            }
        </Select>
    </FormControl>
}

export default IntervalField
