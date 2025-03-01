import {
    useContext,
    useEffect,
    useState,
} from "react"
import { useSearchParams } from "react-router"
import {
    get,
    parseQuery,
} from "App"
import { FormContext } from "Contexts"
import { useMessage } from "Hooks"
import { Select } from "Form"

const QueryParametersAugmenter = () => {

    const query = parseQuery()
    const cityDivision = query["city-division"]
    const dealType = query["deal-type"]
    const propertyType = query["property-type"]

    const [searchParams, setSearchParams] = useSearchParams()
    const [isReloadEntity, setIsReloadEntity] = useState(false)
    const { error } = useMessage()
    const [dealTypes, setDealTypes] = useState([])
    const [dealTypeProgress, setDealTypeProgress] = useState(true)
    const [cityDivisions, setCityDivisions] = useState([])
    const [cityDivisionProgress, setCityDivisionProgress] = useState(false)
    const [propertyTypes, setPropertyTypes] = useState([])
    const [propertyTypeProgress, setPropertyTypeProgress] = useState(true)

    const [dealTypeChosenValue, setDealTypeChosenValue] = useState(dealType)
    const [propertyChosenValue, setPropertyChosenValue] = useState(propertyType)
    const [cityDivisionChosenValue, setCityDivisionChosenValue] = useState(cityDivision)

    const {
        load,
        resetFields
    } = useContext(FormContext)

    useEffect(() => {
        let url = `/adminPropertyType/all`
        get(url)
            .then(data => {
                setPropertyTypes(data)
                setPropertyTypeProgress(false)
            }, e => {
                error(e)
                setPropertyTypeProgress(false)
            })
    }, [])

    useEffect(() => {
        let url = `/adminDealType/all`
        get(url)
            .then(data => {
                setDealTypes(data)
                setDealTypeProgress(false)
            }, e => {
                error(e)
                setDealTypeProgress(false)
            })
    }, [])

    useEffect(() => {
        setCityDivisionProgress(true)
        get("/cityDivision/all")
            .then(data => {
                setCityDivisions(data)
                setCityDivisionProgress(false)
            }, e => {
                setCityDivisionProgress(false)
                error(e)
            })
    }, [])

    useEffect(() => {
        if (dealTypeChosenValue || propertyChosenValue || cityDivisionChosenValue) {
            let search = searchParams
            if (dealTypeChosenValue) {
                search.set("deal-type", dealTypeChosenValue)
            }
            if (propertyChosenValue) {
                search.set("property-type", propertyChosenValue)
            }
            if (cityDivisionChosenValue) {
                search.set("city-division", cityDivisionChosenValue)
            }
            setSearchParams(search)
            setIsReloadEntity(true)
        }
    }, [dealTypeChosenValue, propertyChosenValue, cityDivisionChosenValue])

    useEffect(() => {
        if (isReloadEntity) {
            resetFields([
                "DealTypeSlug",
                "CityDivisionSlug",
                "PropertyTypeSlug"
            ])
            load()
            setIsReloadEntity(false)
        }
    }, [isReloadEntity])

    return <>

        <Select
            property="DealTypeSlug"
            placeholder="PropertiesDealType"
            initialValue={dealTypeChosenValue}
            options={dealTypes}
            display={i => i.name}
            choose={i => i.slug.toLowerCase()}
            loading={dealTypeProgress}
            onChange={value => setDealTypeChosenValue(value)}
            doNotChangeOnEntityChange
        />

        <Select
            property="CityDivisionSlug"
            placeholder="GeoCityDivision"
            initialValue={cityDivisionChosenValue}
            options={cityDivisions}
            display={i => i.name}
            choose={i => i.slug.toLowerCase()}
            loading={cityDivisionProgress}
            onChange={value => setCityDivisionChosenValue(value)}
            doNotChangeOnEntityChange
        />

        <Select
            property="PropertyTypeSlug"
            placeholder="PropertyType"
            initialValue={propertyChosenValue}
            options={propertyTypes}
            display={i => i.name}
            choose={i => i.slug.toLowerCase()}
            loading={propertyTypeProgress}
            onChange={value => setPropertyChosenValue(value)}
            doNotChangeOnEntityChange
        />
    </>
}

export default QueryParametersAugmenter
