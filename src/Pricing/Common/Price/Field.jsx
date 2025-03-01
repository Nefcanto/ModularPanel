import {
    useContext,
    useState,
} from "react"
import { FormContext } from "Contexts"
import {
    Field,
    Numeric,
} from "Form"
import { CurrencyField } from "Currencies"
import { PrefixField } from "Units"

const PriceFiled = ({ property }) => {

    const [amount, setAmount] = useState()
    const [prefix, setPrefix] = useState()
    const [currencyParameters, setCurrencyParameters] = useState()
    const formContext = useContext(FormContext)
    const {
        currentEntity,
        isDirty,
        isInsideTable,
    } = formContext

    const getUnitNameFromCurrencyParameters = () => {
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
                return unitName
            }
        }
    }

    const getUnitNameFromLoadedEntity = () => {
        if (currentEntity) {
            const {
                currenciesCurrencySubunitName,
                currenciesCurrencySuperUnitName,
                currenciesCurrencyUnitName,
                isSubunit,
                isSuperUnit,
            } = currentEntity
            if (isSuperUnit) {
                return currenciesCurrencySuperUnitName
            }
            else if (isSubunit) {
                return currenciesCurrencySubunitName
            }
            else {
                return currenciesCurrencyUnitName
            }
        }
    }

    const getUnitName = () => {
        if (isDirty) {
            return getUnitNameFromCurrencyParameters() || getUnitNameFromLoadedEntity()
        }
        return getUnitNameFromLoadedEntity()
    }

    return <>
        <Numeric
            onChange={value => setAmount(value)}
            placeholder="PricingAmount"
            property={property || "Amount"}
            realNumbers
            required
        />
        <PrefixField onChange={(value, entity) => setPrefix(entity)} />
        <CurrencyField onChange={currencyParameters => setCurrencyParameters(currencyParameters)} />
        <Field isInsideTable={isInsideTable}>
            <span className={`flex items-center gap-2 justify-center ${isInsideTable ? "" : "text-2xl"}`}>
                <span>{(amount || currentEntity?.amount).digitGroup()}</span>
                {
                    prefix?.key
                        ?
                        <span>{prefix?.commonName}</span>
                        :
                        currentEntity?.unitsPrefixKey
                            ?
                            <span>{currentEntity?.unitsPrefixCommonName}</span>
                            :
                            null
                }
                <span>{getUnitName()}</span>
            </span>
        </Field>
    </>
}

export default PriceFiled
