import { Lookup } from "Form"

const DealTypeField = props => {
    return <Lookup
        byKey
        choose={i => i.key}
        display={i => i.name}
        entityType="AdminDealType"
        placeholder="PropertiesDealType"
        property="DealType"
        required
        {...props}
    />
}

export default DealTypeField
