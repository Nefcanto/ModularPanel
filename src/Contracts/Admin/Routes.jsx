import ContractCommissionTotals from "./CommissionTotal/List"
import ContractEntityCommissions from "./EntityCommission/List"
import ContractImages from "./Contract/Images"
import Contracts from "./Contract/List"
import RelatedPersons from "./RelatedPerson/List"
import RelationTypes from "./RelationType/List"

const PropertiesRoutes = [
    {
        path: "/contracts",
        component: Contracts,
    },
    {
        path: "/relationTypes",
        component: RelationTypes,
    },
    {
        path: "/relatedPersons",
        component: RelatedPersons
    },
    {
        path: "/contract/entityCommissions",
        component: ContractEntityCommissions
    },
    {
        path: "/contract/commissionTotals",
        component: ContractCommissionTotals
    },
    {
        path: "/contract/images",
        component: ContractImages
    },
]

export default PropertiesRoutes
