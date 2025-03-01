import { useState } from "react"
import Collapse from "@mui/material/Collapse"
import {
    Boolean,
    Check,
    DialogForm,
} from "Form"
import { PersonField } from "Contacts"
import RelationTypeField from "../RelationType/Field"

const RelatedPersonForm = props => {

    const [hasCommission, setHasCommission] = useState(false)

    const inputs = entity => <>
        <RelationTypeField />
        <PersonField
            byGuid
            identifyingValue="PersonGuid"
        />
        <Check
            property="HasCommission"
            placeholder="ContractsHasCommission"
            onChange={value => { setHasCommission(value) }}
        />

        {
            <Collapse in={hasCommission}>
                <Boolean
                    property="IsCreditor"
                    trueLabel="ContractsCreditor"
                    falseLabel="ContractsDebtor"
                    placeholder="ContractsStatus"
                />
            </Collapse>
        }
    </>

    return <DialogForm
        {...props}
        title="ContractsRelatedPerson"
        entityType="RelatedPerson"
        inputs={inputs}
        close={() => { setHasCommission(false) }}
    />
}

export default RelatedPersonForm
