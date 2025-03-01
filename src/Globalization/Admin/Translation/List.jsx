import {
    List,
    Text,
} from "List"
import {
    ScopeFilter,
    ScopeProperty,
} from "Scopes"
import {
    InterfaceFilter,
    InterfaceProperty,
} from "Interfaces"
import TranslationForm from "./Form"

const filters = nodeApi => <>
    {
        nodeApi
            ?
            <InterfaceFilter />
            :
            <ScopeFilter />
    }
</>

const headers = nodeApi => <>
    <th>{nodeApi ? "InterfacesInterface" : "ScopesScope"}</th>
    <th>GlobalizationTextKey</th>
    <th>GlobalizationTranslation</th>
</>

const row = nodeApi => entity => <>
    {
        nodeApi
            ?
            <InterfaceProperty />
            :
            <ScopeProperty />
    }
    <td>{entity.text}</td>
    <td>{entity.value}</td>
</>

const Translations = () => {
    return <List
        create={TranslationForm}
        entityType="translation"
        filters={filters(window.settings?.NodeApi)}
        hasDelete
        headers={headers(window.settings?.NodeApi)}
        row={row(window.settings?.NodeApi)}
        title="GlobalizationTranslations"
    />
}

export default Translations
