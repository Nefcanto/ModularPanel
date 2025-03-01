import PaymentsIcon from "@mui/icons-material/Payments"
import { EntityAction } from "List"

const ManageCommissionTotal = ({
    entity,
    entityType,
    module,
}) => {

    return <EntityAction
        title="CommissionsManagementCommissionTotal"
        goTo={`/contract/commissionTotals?entityGuid=${entity?.guid}&module=${module}&entityType=${entityType}&pp=${module}&pt=${entityType}&pid=${entity.id}`}
        icon={PaymentsIcon}
    />
}

export default ManageCommissionTotal
