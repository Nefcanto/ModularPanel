import { Browse } from "Form"
import {
    filters,
    headers,
    row
} from "./Browser"

const AgentField = ({
    choose,
    placeholder,
    property,
    ...rest
}) => {
    return <Browse
        byGuid
        choose={entity => entity.person}
        entityType="Agent"
        filters={filters}
        headers={headers}
        placeholder={placeholder ?? "PropertiesAgent"}
        property={property ?? "Agent"}
        row={row}
        show={entity => entity.displayName || entity.contactsPersonDisplayName || entity.accountsUserUserName}
        {...rest}
    />
}

export default AgentField
