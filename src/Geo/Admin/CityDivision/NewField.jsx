import {
    useEffect,
    useState,
} from "react"
import { get } from "App"
import { useMessage } from "Hooks"
import { Select } from "Form"

const CityDivisionNewField = ({
    choose,
    placeholder,
    property,
    ...rest
}) => {

    const { error } = useMessage()

    const [cityDivisions, setCityDivisions] = useState([])
    const [cityDivisionProgress, setCityDivisionProgress] = useState(false)

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

    return <>
        <Select
            property={property || "CityDivisionGuid"}
            placeholder={placeholder || "GeoCityDivision"}
            options={cityDivisions}
            display={i => i.name}
            choose={i => choose ? choose(i) : i.guid}
            loading={cityDivisionProgress}
            {...rest}
        />
    </>
}

export default CityDivisionNewField
