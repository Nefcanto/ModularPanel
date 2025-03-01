import CalculateIcon from "@mui/icons-material/Calculate"
import {
    parseQuery,
    post,
} from "App"
import {
    BooleanProperty,
    List,
    ListAction,
    Text,
} from "List"
import { AddPersonListAction } from "Contacts"
import { PriceEntityAction } from "PricingCommon"
import EntityCommissionForm from "./Form"

const listActions = <>
    <AddPersonListAction />
    <ListAction
        title="CommissionsCalculateCommissionTotal"
        icon={CalculateIcon}
        onClick={({
            error,
            reload,
            setProgress,
            success,
        }) => {
            const {
                entityGuid,
                entityType,
            } = parseQuery()

            setProgress(true)
            post(`/commissionTotal/Calculate?entityType=${entityType}&entityGuid=${entityGuid}`).then(data => {
                setProgress(false)
                success("CommissionsSuccessCalculateCommissionTotal")
            }, e => {
                setProgress(false)
                error(e)
            }
            )
        }}
        notApplicableToEntities
    />
</>

const filters = <>
    <Text
        property="PersonDisplayName"
    />
</>

const headers = <>
    <th>CommissionsPersonDisplayName</th>
    <th>CommissionsIsDebtor</th>
    <th>CommissionsIsCreditor</th>
    <th>PricingAmount</th>
    <th>CurrenciesCurrency</th>
    <th>CommissionsReason</th>
</>

const row = entity => <>
    <td>{entity.contactsPersonDisplayName}</td>
    <td>
        <BooleanProperty
            value={entity.isDebtor}
        />
    </td>
    <td>
        <BooleanProperty
            value={entity.isCreditor}
        />
    </td>
    <td>{entity?.pricingPriceAmount?.toLocaleString()}</td>
    <td>{entity?.currenciesCurrencySuperUnitName || entity?.currenciesCurrencyName}</td>
    <td>{entity?.commissionsReasonKeyTitle}</td>
</>

const entityActions = entity => <>
    <PriceEntityAction
        entity={entity}
    />
</>
const EntityCommissions = props => {
    return <List
        {...props}
        title="CommissionsEntityCommissions"
        entityType="EntityCommission"
        create={EntityCommissionForm}
        listActions={listActions}
        filters={filters}
        headers={headers}
        row={row}
        entityActions={entityActions}
        hasEdit
        hasDelete
    />
}

export default EntityCommissions
