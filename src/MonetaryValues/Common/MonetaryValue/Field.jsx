import {
    useContext,
    useState,
} from "react"
import { FormContext } from "Contexts"
import {
    Hidden,
    Numeric,
    View,
} from "Form"
import { CurrencyField } from "Currencies"
import { PrefixField } from "Units"

const MonetaryValueField = ({
    entity,
    property,
}) => {

    const [quantity, setQuantity] = useState(entity?.monetaryValuesMonetaryValueQuantity)
    const [prefix, setPrefix] = useState({ commonName: entity?.unitsPrefixCommonName || "" })
    const [currencyParameters, setCurrencyParameters] = useState({
        currency: {
            subunitName: entity?.currenciesCurrencySubunitName,
            superUnitName: entity?.currenciesCurrencySuperUnitName,
            unitName: entity?.currenciesCurrencyUnitName,
        },
        subunit: entity?.monetaryValuesMonetaryValueIsSubunit,
        superUnit: entity?.monetaryValuesMonetaryValueIsSuperUnit,
    })
    const formContext = useContext(FormContext) || {}
    const {
        formMode,
        isDirty,
        mode,
    } = formContext

    const getCurrencyNameFromCurrencyParameters = () => {
        if (currencyParameters && currencyParameters.currency) {
            const {
                currency,
                subunit,
                superUnit,
            } = currencyParameters
            const {
                subunitName,
                superUnitName,
                unitName,
            } = currency || {}
            if (superUnit) {
                return superUnitName
            }
            else if (subunit) {
                return subunitName
            }
            else {
                if (currency.id) {
                    return unitName || "DefineUnitName"
                }
                return unitName || ""
            }
        }
    }

    const getCurrencyNameFromLoadedEntity = () => {
        const {
            currenciesCurrencySubunitName,
            currenciesCurrencySuperUnitName,
            currenciesCurrencyUnitName,
            monetaryValuesMonetaryValueIsSubunit,
            monetaryValuesMonetaryValueIsSuperUnit,
        } = entity
        if (monetaryValuesMonetaryValueIsSuperUnit) {
            return currenciesCurrencySuperUnitName
        }
        else if (monetaryValuesMonetaryValueIsSubunit) {
            return currenciesCurrencySubunitName
        }
        else {
            return currenciesCurrencyUnitName
        }
    }

    const getCurrent = () => {
        return `${entity?.monetaryValuesMonetaryValueQuantity?.digitGroup()} ${entity?.unitsPrefixCommonName || ""} ${getCurrencyNameFromLoadedEntity() || ""}`
    }

    const getNew = () => {
        return `${quantity?.digitGroup()} ${prefix?.commonName || ""} ${getCurrencyNameFromCurrencyParameters()}`
    }

    return <>
        {
            entity && entity.monetaryValuesMonetaryValueQuantity &&
            <View
                placeholder="InfraCurrent"
                value={getCurrent()}
            />
        }
        {
            mode === formMode.edition &&
            <Hidden
                property="MonetaryValue"
                value={entity?.monetaryValue}
            />
        }
        <Numeric
            onChange={value => setQuantity(value)}
            placeholder="InfraQuantity"
            property={property || "Quantity"}
            propertyAccessor={entity => entity.monetaryValuesMonetaryValueQuantity}
            realNumbers
            required
        />
        <PrefixField
            onChange={(value, entity) => isDirty && setPrefix(entity)}
            propertyAccessor={entity => entity.monetaryValuesMonetaryValuePrefix}
        />
        <CurrencyField
            onChange={currencyParameters => isDirty && setCurrencyParameters(currencyParameters)}
            propertyAccessor={entity => entity.monetaryValuesMonetaryValueCurrency}
            subunitPropertyAccessor={entity => entity.monetaryValuesMonetaryValueIsSubunit}
            superUnitPropertyAccessor={entity => entity.monetaryValuesMonetaryValueIsSuperUnit}
        />
        <View
            placeholder="InfraNew"
            value={getNew()}
        />
    </>
}

export default MonetaryValueField
