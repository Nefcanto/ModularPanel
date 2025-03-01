import { Lookup } from "List"

const DealTypeFilter = () => {
    return <Lookup
        choose={entity => entity.key}
        display={entity => entity.name}
        entityType="DealType"
        placeholder="PropertiesDealType"
        property="dealType"
    />
}

export default DealTypeFilter
