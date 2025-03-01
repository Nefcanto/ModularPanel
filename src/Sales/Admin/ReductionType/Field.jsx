import { Lookup } from "Form"

const ReductionTypeField = () => {

    return <Lookup
        choose={i => i.id}
        display={i => i.title}
        entityType="ReductionType"
        placeholder="SalesReductionType"
        property="ReductionTypeId"
    />

}

export default ReductionTypeField
