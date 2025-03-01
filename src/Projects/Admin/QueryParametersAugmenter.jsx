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
    const category = query["category"]

    const [searchParams, setSearchParams] = useSearchParams()
    const [isReloadEntity, setIsReloadEntity] = useState(false)
    const { error } = useMessage()
    const [categories, setCategories] = useState([])
    const [categoryProgress, setCategoryProgress] = useState(true)
    const [cityDivisions, setCityDivisions] = useState([])
    const [cityDivisionProgress, setCityDivisionProgress] = useState(false)
    const [categoryChosenValue, setCategoryChosenValue] = useState(category)
    const [cityDivisionChosenValue, setCityDivisionChosenValue] = useState(cityDivision)

    const {
        load,
        resetFields
    } = useContext(FormContext)

    useEffect(() => {
        let url = `/category/all?entityType=project`
        get(url)
            .then(data => {
                setCategories(data)
                setCategoryProgress(false)
            }, e => {
                error(e)
                setCategoryProgress(false)
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
        if (categoryChosenValue || cityDivisionChosenValue) {
            let search = searchParams
            if (categoryChosenValue) {
                search.set("category", categoryChosenValue)
            }
            if (cityDivisionChosenValue) {
                search.set("city-division", cityDivisionChosenValue)
            }
            setSearchParams(search)
            setIsReloadEntity(true)
        }
    }, [categoryChosenValue, cityDivisionChosenValue])

    useEffect(() => {
        if (isReloadEntity) {
            resetFields([
                "CategorySlug",
                "CityDivisionSlug",
            ])
            load()
            setIsReloadEntity(false)
        }
    }, [isReloadEntity])

    return <>

        <Select
            choose={i => i.slug.toLowerCase()}
            display={i => i.title}
            doNotChangeOnEntityChange
            initialValue={categoryChosenValue}
            loading={categoryProgress}
            onChange={(value) => setCategoryChosenValue(value)}
            options={categories}
            placeholder="Category"
            property="CategorySlug"
        />

        <Select
            choose={i => i.slug.toLowerCase()}
            display={i => i.name}
            doNotChangeOnEntityChange
            initialValue={cityDivisionChosenValue}
            loading={cityDivisionProgress}
            onChange={(value) => setCityDivisionChosenValue(value)}
            options={cityDivisions}
            placeholder="CityDivision"
            property="CityDivisionSlug"
        />
    </>
}

export default QueryParametersAugmenter
