import SubscriptIcon from "@mui/icons-material/Subscript"
import SuperscriptIcon from "@mui/icons-material/Superscript"
import { t } from "App"
import {
    Boolean,
    BooleanProperty,
    EntityAction,
    List,
} from "List"
import CurrencyForm from "./Form"
import SubunitForm from "./SubunitForm"
import SuperUnitForm from "./SuperUnitForm"

const filters = <>
    <Boolean
        label="CurrenciesHasSubunit"
        nullable
        property="HasSubunit"
    />
    <Boolean
        label="CurrenciesHasSuperUnit"
        nullable
        property="HasSuperUnit"
    />
</>

const headers = <>
    <th>CurrenciesName</th>
    <th>CurrenciesIsoCode</th>
    <th>CurrenciesUnitName</th>
    <th>CurrenciesSymbol</th>
    <th>CurrenciesHasSubunit</th>
    <th>CurrenciesSubunitName</th>
    <th>CurrenciesSubunitsPerUnit</th>
    <th>CurrenciesHasSuperUnit</th>
    <th>CurrenciesSuperUnitName</th>
    <th>CurrenciesUnitsPerSuperUnit</th>
    <th>CurrenciesIsDefault</th>
</>

const row = entity => {

    const defaultProps = {}
    defaultProps.title = entity.isDefault ? "" : t("InfraSettingAsTheDefault")
    defaultProps.actionUrl = `/currency/setAsDefault/${entity.id}`

    return <>
        <td>
            {entity.name}
        </td>
        <td>
            {entity.isoCode}
        </td>
        <td>
            {entity.unitName}
        </td>
        <td>
            {entity.symbolCharacter}
        </td>
        <BooleanProperty value={entity.hasSubunit} />
        <td>
            {entity.subunitName}
        </td>
        <td>
            {entity.subunitsPerUnit}
        </td>
        <BooleanProperty value={entity.hasSuperUnit} />
        <td>
            {entity.superUnitName}
        </td>
        <td>
            {entity.unitsPerSuperUnit}
        </td>
        {
            entity.isDefault
                ?
                <BooleanProperty
                    value={entity.isDefault}
                />
                :
                <BooleanProperty
                    {...defaultProps}
                    reloadListOnSuccess
                    value={entity.isDefault}
                />
        }
    </>
}

const entityActions = <>
    <EntityAction
        dialog={SubunitForm}
        icon={SubscriptIcon}
        title="CurrenciesSubunit"
    />
    <EntityAction
        dialog={SuperUnitForm}
        icon={SuperscriptIcon}
        title="CurrenciesSuperUnit"
    />
</>

const Currencies = () => {
    return <List
        create={CurrencyForm}
        entityActions={entityActions}
        entityType="Currency"
        filters={filters}
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="CurrenciesCurrencies"
    />
}

export default Currencies
