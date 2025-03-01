import { Lookup } from "List"
import filters from "./Filters"
import headers from "./Headers"
import row from "./Row"
import sorts from "./Sorts"

const EntityTypeFilter = ({
    module,
    onChange,
}) => {

    return module
        ?
        <Lookup
            choose={i => i.key}
            display={i => i.title}
            entityType="EntityType"
            onChange={value => (onChange instanceof Function) && onChange(value)}
            placeholder="ModulesEntityType"
            property="EntityType"
            query={{
                module: module
            }}
        />
        :
        null
}

export default EntityTypeFilter
