import {
    useEffect,
    useState,
} from "react"
import {
    get,
    t,
} from "App"
import { useMessage } from "Hooks"
import {
    Numeric,
    Select,
} from "Form"

const DealTypeAndPriceField = props => {

    const [dealTypes, setDealTypes] = useState([])
    const [dealTypeProgress, setDealTypeProgress] = useState(true)
    const [currentAreaValue, setCurrentAreaValue] = useState()
    const [currentDealTypeValue, setCurrentDealTypeValue] = useState()
    const [majorPricePlaceholder, setMajorPricePlaceholder] = useState("PropertiesMajorPrice")
    const [minorPricePlaceholder, setMinorPricePlaceholder] = useState("PropertiesMinorPrice")
    const [currentValueMinorPrice, setCurrentValueMinorPrice] = useState()
    const [currentValueMajorPrice, setCurrentValueMajorPrice] = useState()
    const { error } = useMessage()

    useEffect(() => {
        let url = `/dealType/all`
        get(url)
            .then(data => {
                setDealTypes(data)
                setDealTypeProgress(false)
            }, e => {
                error(e)
                setDealTypeProgress(false)
            })
    }, [])

    const setPlaceholderPriceInputs = dealTypeKey => {
        switch (dealTypeKey) {
            case "rent":
                setMajorPricePlaceholder(t("PropertiesMortgage"))
                setMinorPricePlaceholder(t("PropertiesMonthlyRent"))
                break
            case "sale":
                setMajorPricePlaceholder(t("PropertiesTotalPrice"))
                setMinorPricePlaceholder(t("PropertiesMeterPrice"))
                break
            case "prepurchase":
                setMajorPricePlaceholder(t("PropertiesTotalPaymentPrice"))
                setMinorPricePlaceholder(t("PropertiesInitialMeterPrice"))
                break
            default:
                setMajorPricePlaceholder(t("PropertiesMajorPrice"))
                setMinorPricePlaceholder(t("PropertiesMinorPrice"))
        }
    }

    useEffect(() => {
        const currentDealType = dealTypes.find(i => i.key == currentDealTypeValue)
        if (currentDealType?.relatedItems.keySegment == "sale") {
            const newMajorPrice = currentValueMinorPrice?.replaceAll(",", "") * currentAreaValue?.replaceAll(",", "")
            setCurrentValueMajorPrice(newMajorPrice)
        }
    }, [currentValueMinorPrice])

    useEffect(() => {
        if (currentDealTypeValue) {
            const currentDealType = dealTypes.find(i => i.key == currentDealTypeValue)
            setPlaceholderPriceInputs(currentDealType?.relatedItems.keySegment)
        }
    }, [currentDealTypeValue])

    return <>
        <Select
            byKey
            choose={i => i.key}
            display={i => i.name}
            loading={dealTypeProgress}
            onChange={value => setCurrentDealTypeValue(value)}
            options={dealTypes}
            placeholder="PropertiesDealType"
            property="DealType"
            required
            {...props}
        />
        <Numeric
            integers
            onChange={value => setCurrentAreaValue(value)}
            placeholder="PropertiesArea"
            property="Area"
            required
        />
        <Numeric
            integers
            onChange={value => setCurrentValueMinorPrice(value)}
            placeholder={minorPricePlaceholder}
            property="MinorPrice"
            required
        />
        <Numeric
            currentValue={currentValueMajorPrice}
            integers
            placeholder={majorPricePlaceholder}
            property="MajorPrice"
            required
        />
    </>
}

export default DealTypeAndPriceField
