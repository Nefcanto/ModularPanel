import { useContext } from "react"
import { ListContext } from "Contexts"
import DatePart from "./DatePart"
import TimePart from "./TimePart"
import ValueWithTitle from "./ValueWithTitle"

const DateTimeTitleAgo = ({
    ago,
    date,
    ...rest
}) => {

    const { isTable } = useContext(ListContext)

    let jsx = <ValueWithTitle
        title={ago + " ago"}
        value={<>
            <DatePart
                className=" text-black dark:text-slate-50"
                date={date}
            />
            <TimePart
                className="text-xs text-black dark:text-slate-50"
                date={date}
            />
        </>}
    />

    if (isTable) {
        jsx = <td {...rest}>
            {jsx}
        </td>
    }

    return jsx
}

export default DateTimeTitleAgo
