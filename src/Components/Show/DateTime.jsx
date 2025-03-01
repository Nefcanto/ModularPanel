import { useContext } from "react"
import { ListContext } from "Contexts"
import DatePart from "./DatePart"
import TimePart from "./TimePart"

const DateTime = ({
    date,
    row,
    ...rest
}) => {

    const { isTable } = useContext(ListContext)
    let jsx = <div
        className={(row ? "flex flex-row gap-2 items-center" : "")}
        dir="ltr"
    >
        <DatePart date={date} />
        <TimePart
            date={date}
            className="text-xs"
        />
    </div>
    if (isTable) {
        jsx = <td {...rest}>
            {jsx}
        </td>
    }
    return jsx
}

export default DateTime
