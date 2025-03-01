import { Lookup } from "List"
import filters from "./Filters"
import headers from "./Headers"
import row from "./Row"
import sorts from "./Sorts"

const TypeFilter = ({
    part,
    onChange,
}) => {

    return part
        ?
        <Lookup
            choose={i => i.key}
            display={i => i.title}
            type="Type"
            onChange={value => (onChange instanceof Function) && onChange(value)}
            placeholder="PartsType"
            property="Type"
            query={{
                part: part
            }}
        />
        :
        null
}

export default TypeFilter
