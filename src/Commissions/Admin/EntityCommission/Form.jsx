import {
    Boolean,
    DateTime,
    DialogForm
} from "Form"
import { PersonField } from "Contacts"
import ReasonField from "../Reason/Field"

const inputs = entity => <>
    <PersonField
        byGuid
        identifyingValue="PersonGuid"
    />
    <DateTime
        placeholders="Date"
        property="Date"
        value={entity?.utcDate}
    />
    <ReasonField />
    <Boolean
        property="IsCreditor"
        trueLabel="ContractsCreditor"
        falseLabel="ContractsDebtor"
        placeholder="ContractsStatus"
    />
</>

const EntityCommissionForm = ({
    entityGuid,
    entityType,
    ...rest
}) => {
    return <DialogForm
        {...rest}
        entityType="EntityCommission"
        humanReadableEntityType="CommissionsEntityCommission"
        inputs={inputs}
    />
}

export default EntityCommissionForm
