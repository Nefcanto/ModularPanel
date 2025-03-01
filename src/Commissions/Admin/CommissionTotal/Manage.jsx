import PaymentsIcon from "@mui/icons-material/Payments"
import { EntityAction } from "List"

const ManageCommissionTotal = ({
    entity,
    entityType
}) => {

    return <EntityAction
        title="CommissionsManagementCommissionTotal"
        goTo={`/commissionTotals?entityGuid=${entity?.guid}&entityType=${entityType}`}
        icon={PaymentsIcon}
    />
}

export default ManageCommissionTotal
