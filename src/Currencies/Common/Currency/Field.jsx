import {
    useEffect,
    useState,
} from "react"
import {
    Check,
    Lookup,
} from "Form"

const CurrencyField = ({
    onChange,
    propertyAccessor,
    subunitPropertyAccessor,
    superUnitPropertyAccessor,
}) => {

    const [currency, setCurrency] = useState()
    const [subunit, setSubunit] = useState()
    const [superUnit, setSuperUnit] = useState()

    useEffect(() => {
        if (onChange instanceof Function) {
            const parameters = {
                currency,
                subunit,
                superUnit
            }
            onChange(parameters)
        }
    }, [currency, subunit, superUnit])

    return <>
        <Lookup
            choose={i => i?.isoCode || "na"}
            display={i => i ? `${i?.name} - ${i?.isoCode}` : ""}
            entityType="Currency"
            hideForSingleItem
            onChange={(value, entity) => {
                setCurrency(entity)
                if (subunit !== undefined) {
                    setSubunit(undefined)
                }
                if (superUnit !== undefined) {
                    setSuperUnit(undefined)
                }
            }}
            placeholder="CurrenciesCurrency"
            property="Currency"
            propertyAccessor={propertyAccessor}
            required
        />
        {
            currency
                ?
                <>
                    {
                        currency.hasSubunit &&
                        <Check
                            onChange={value => setSubunit(value)}
                            placeholder={currency.subunitName}
                            property="IsSubunit"
                            propertyAccessor={subunitPropertyAccessor}
                        />
                    }
                    {
                        currency.hasSuperUnit &&
                        <Check
                            onChange={value => {
                                setSuperUnit(value)
                            }}
                            placeholder={currency.superUnitName}
                            property="IsSuperUnit"
                            propertyAccessor={superUnitPropertyAccessor}
                        />
                    }
                </>
                :
                null
        }
    </>
}

export default CurrencyField
