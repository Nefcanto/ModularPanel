import GroupsIcon from "@mui/icons-material/Groups"
import TranslateIcon from "@mui/icons-material/Translate"
import CurrencyYenIcon from "@mui/icons-material/CurrencyYen"
import ViewInArIcon from "@mui/icons-material/ViewInAr"
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount"
import { EntityAction } from "List"
import { ChangePasswordAction } from "Accounts"
import { EditPerson } from "Contacts"
import ChangeOwner from "./ChangeOwner"

const entityActions = entity => <>
    <EntityAction
        dialog={ChangeOwner}
        icon={SwitchAccountIcon}
        title="TenantsChangingOwner"
    />
    <EntityAction
        goTo={`/tenantPersons?tenantId=${entity.id}&pp=Tenants&pt=Tenant&pid=${entity.id}`}
        icon={GroupsIcon}
        title="TenantsTenantPersons"
    />
    <EntityAction
        goTo={`/globalization/locales?tenant=${entity.key}`}
        icon={TranslateIcon}
        title="GlobalizationLocales"
    />
    <EntityAction
        goTo={`/currencies?tenant=${entity.key}`}
        icon={CurrencyYenIcon}
        title="CurrenciesCurrencies"
    />
    <EntityAction
        goTo={`/units/prefixes?tenant=${entity.key}`}
        icon={ViewInArIcon}
        title="UnitsPrefixes"
    />
    <EditPerson
        addresses
        phones
        social
    />
    <ChangePasswordAction />
</>

export default entityActions
