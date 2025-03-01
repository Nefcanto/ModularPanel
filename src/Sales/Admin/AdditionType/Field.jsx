import { Lookup } from "Form"

const AdditionTypeField = () => {

    return <Lookup
        choose={i => i.id}
        display={i => i.title}
        entityType="AdditionType"
        placeholder="SalesAdditionType"
        property="AdditionTypeId"
    />

}

export default AdditionTypeField
