import {
    useContext,
    useEffect,
    useState,
} from "react"
import OutlinedInput from "@mui/material/OutlinedInput"
import {
    filterOperator,
    t,
} from "App"
import {
    useDebounce,
    useFilter,
} from "Hooks"
import { ListContext } from "Contexts"
import Filter from "./Parameter"

const Text = ({
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
        operator: operator || filterOperator.containing,
        placeholder,
        property,
        show: i => i,
        type: type || "text",
        ...rest
    })

    const [internalValue, setInternalValue] = useState(shown)
    const debouncedValue = useDebounce(internalValue)

    useEffect(() => {
        setEntity(debouncedValue)
    }, [debouncedValue])

    useEffect(() => {
        if (isReset) {
            setInternalValue("")
        }
    }, [isReset])

    return <Filter
        label={label}
        id={id}
    >
        <OutlinedInput
            inputProps={inputProps}
            size="small"
            value={
                isReset
                    ?
                    ""
                    :
                    isDirty
                        ?
                        internalValue || shown
                        :
                        initialFilter?.value || ""
            }
            label={t(label)}
            onKeyDown={e => {
                if (!isDirty) {
                    setIsDirty(true)
                }
                if (e.key === "Enter") {
                    setInternalValue(e.target.value)
                    setEntity(e.target.value)
                }
            }}
            onChange={e => {
                if (e.target.value === "") {
                    setInternalValue(e.target.value)
                    setEntity(e.target.value)
                }
                else {
                    if (regex && regex.test) {
                        if (regex.test(e.target.value)) {
                            setInternalValue(e.target.value)
                        }
                    }
                    else {
                        setInternalValue(e.target.value)
                    }
                }
            }}
        />
    </Filter>
}

export default Text
