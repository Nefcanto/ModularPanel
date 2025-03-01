import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange"
import { EntityAction } from "List"

const ManageEntityCommission = ({
    entity,
    entityType,
    module,
}) => {

    return <EntityAction
        title="CommissionsManagementCommissions"
        goTo={`/contract/entityCommissions?entityGuid=${entity?.guid}&module=${module}&entityType=${entityType}&pp=${module}&pt=${entityType}&pid=${entity.id}`}
        icon={CurrencyExchangeIcon}
    />
}

export default ManageEntityCommission
