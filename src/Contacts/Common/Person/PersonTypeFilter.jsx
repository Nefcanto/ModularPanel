import { Boolean } from "List"

const PersonTypeFilter = () => {
    return <Boolean
        property="ContactsPersonIsNatural"
        label="ContactsPersonType"
        nullable
        trueLabel="ContactsNatural"
        falseLabel="ContactsJuridical"
    />
}

export default PersonTypeFilter
