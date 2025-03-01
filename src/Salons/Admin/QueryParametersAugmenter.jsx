import {
    useContext,
    useEffect,
    useState,
} from "react"
import { useSearchParams } from "react-router"
import {
    parseQuery,
    get,
} from "App"
import { FormContext } from "Contexts"
import { useMessage } from "Hooks"
import { Select } from "Form"

const QueryParametersAugmenter = () => {

    const query = parseQuery()
    const type = query["types"]
    const cityDivision = query["city-division"]

    const [searchParams, setSearchParams] = useSearchParams()
    const [isReloadEntity, setIsReloadEntity] = useState(false)
    const { error } = useMessage()

    const [types, setTypes] = useState([])
    const [typeProgress, setTypeProgress] = useState(true)
    const [typeChosenValue, setTypeChosenValue] = useState(type)

    const [cityDivisions, setCityDivisions] = useState([])
    const [cityDivisionProgress, setCityDivisionProgress] = useState(false)
    const [cityDivisionChosenValue, setCityDivisionChosenValue] = useState(cityDivision)

    const {
        load,
        resetFields
    } = useContext(FormContext)

    useEffect(() => {
        let url = `/salonType/all`
        get(url)
            .then(data => {
                setTypes(data)
                setTypeProgress(false)
            }, e => {
                error(e)
                setTypeProgress(false)
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
        if (typeChosenValue || cityDivisionChosenValue) {
            let search = searchParams
            if (typeChosenValue) {
                search.set("types", typeChosenValue)
            }
            if (cityDivisionChosenValue) {
                search.set("city-division", cityDivisionChosenValue)
            }
            setSearchParams(search)
            setIsReloadEntity(true)
        }
    }, [typeChosenValue, cityDivisionChosenValue])

    useEffect(() => {
        if (isReloadEntity) {
            resetFields([
                "CityDivisionSlug",
                "TypeSlug",
            ])
            load()
            setIsReloadEntity(false)
        }
    }, [isReloadEntity])
    return <>

        <Select
            property="TypeSlug"
            placeholder="TypeSlug"
            initialValue={typeChosenValue}
            options={types}
            display={i => i.title}
            choose={i => i.slug.toLowerCase()}
            loading={typeProgress}
            onChange={value => setTypeChosenValue(value)}
            doNotChangeOnEntityChange
        />
        <Select
            property={"CityDivisionSlug"}
            placeholder={"CityDivision"}
            initialValue={cityDivisionChosenValue}
            options={cityDivisions}
            display={i => i.name}
            choose={i => i.slug.toLowerCase()}
            loading={cityDivisionProgress}
            onChange={value => setCityDivisionChosenValue(value)}
            doNotChangeOnEntityChange
        />
    </>
}

export default QueryParametersAugmenter
