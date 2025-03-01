import {
    useEffect,
    useState,
} from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { get } from "App"

const ReasonField = ({
    initialValue,
    onChange
}) => {

    const [reasons, setReasons] = useState([])
    const [chosenValue, setChosenValue] = useState(initialValue)
    const getReasons = () => {
        let url = `/reason/all`
        get(url)
            .then(data => {
                setReasons(data)
            }, e => {
                console.error(e)
            })
    }

    useEffect(() => {
        getReasons()
    }, [])

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
                    key={i.id}
                    value={i.key}
                >
                    {i.title}
                </MenuItem>
                )
            }
        </Select>
    </FormControl>
}

export default ReasonField
