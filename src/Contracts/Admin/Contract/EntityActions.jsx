import Diversity3Icon from "@mui/icons-material/Diversity3"
import TextSnippetIcon from "@mui/icons-material/TextSnippet"
import CollectionsIcon from "@mui/icons-material/Collections"
import FormatShapesIcon from "@mui/icons-material/FormatShapes"
import { EntityAction } from "List"
import { ManageCategories } from "NewTaxonomy"
import { AssignAttributes } from "Attributes"
import { PriceEntityAction } from "Pricing"
import ManageEntityCommission from "../EntityCommission/Manage"
import ManageCommissionTotal from "../CommissionTotal/Manage"

const EntityActions = entity => <>
    <EntityAction
        goTo={`/contractContent?id=${entity.id}`}
        icon={TextSnippetIcon}
        title="ContractsEditContent"
    />
    <EntityAction
        goTo={`/templates?entityGuid=${entity.guid}&entityType=${entity.relatedItems.entityType}`}
        icon={FormatShapesIcon}
        title="TemplatesManageTemplates"
    />
    <ManageCategories />
    <EntityAction
        goTo={`/relatedPersons?contractId=${entity.id}`}
        icon={Diversity3Icon}
        title="ContractsManageRelatedPersons"
    />
    <ManageEntityCommission
        entity={entity}
        entityType="Contract"
        module="Contracts"
    />
    <PriceEntityAction
        entity={entity}
    />
    <EntityAction
        goTo={`/contract/images?entityType=Contract&entityGuid=${entity?.guid}&pp=Contracts&pt=Contract&pid=${entity.id}`}
        icon={CollectionsIcon}
        title="MediaManageImages"
    />
    <AssignAttributes />
    <ManageCommissionTotal
        entity={entity}
        entityType="Contract"
        module="Contracts"
    />
</>

export default EntityActions
