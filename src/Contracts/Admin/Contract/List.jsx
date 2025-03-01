import {
    List,
    Title,
} from "List"
import ContractForm from "./Form"
import EntityActions from "./EntityActions"
import ContactRow from "./Row"
import { DefineAttributes } from "Attributes"
import { DefineCategories } from "NewTaxonomy"

const listActions = <>
    <DefineAttributes entityType="Contract" />
    <DefineCategories />
</>

const filters = <>
    <Title />
</>

const headers = <>
    <th></th>
    <th>ContractsTitle</th>
    <th>ContractsDate</th>
    <th>ContractsAmount</th>
    <th>CurrenciesCurrency</th>
</>

const Contracts = () => {
    return <List
        title="ContractsContracts"
        entityType="Contract"
        listActions={listActions}
        filters={filters}
        headers={headers}
        row={ContactRow}
        entityActions={EntityActions}
        create={ContractForm}
        hasEdit
        hasDelete
    />
}

export default Contracts
