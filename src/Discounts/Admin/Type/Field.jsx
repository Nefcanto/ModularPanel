import {
    useEffect,
    useState,
} from "react"
import { get } from "App"
import { useMessage } from "Hooks"
import { Select } from "Form"

const TypeField = props => {

    const [type, setTypes] = useState([])
    const [typeProgress, setTypeProgress] = useState(true)
    const { error } = useMessage()

    useEffect(() => {
        let url = `/adminType/all`
        get(url)
            .then(data => {
                setTypes(data)
                setTypeProgress(false)
            }, e => {
                error(e)
                setTypeProgress(false)
            })
    }, [])

    return <>
        <Select
            property="TypeId"
            placeholder="PropertiesType"
            options={type}
            display={i => i?.name}
            choose={i => i.id}
            loading={typeProgress}
            required="PropertiesChooseType"
            {...props}
        />
    </>
}

export default TypeField
