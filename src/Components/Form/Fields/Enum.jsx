import {
    useEffect,
    useState,
} from "react"
import CircularProgress from "@mui/material/CircularProgress"
import {
    camelize,
    ensure,
    get,
    getEnum,
    getEnums,
    setEnum,
    t,
} from "App"
import Select from "./Select"
import Radio from "./Radio"

const Enum = ({
    byKey,
    entityType,
    radio,
    row,
    show,
    ...rest
}) => {

    ensure([entityType])

    const [loading, setLoading] = useState()
    const [enumItems, setEnumItems] = useState(getEnum(entityType) || [])

    useEffect(() => {
        if (enumItems.length !== 0) {
            return
        }
        setLoading(true)
        get(`/${camelize(entityType)}/all`).then(data => {
            setEnumItems(data)
            setEnum(entityType, data)
            window.enums = getEnums()
            setLoading(false)
        }, error => {
            console.log(error)
            setLoading(false)
        })
    }, [entityType])

    if (rest.required && typeof rest.required === "boolean") {
        rest.required = `${t(rest.placeholder || rest.property)} ${t("InfraIsNotSelected")}`
    }

    return <div>
        {
            loading
                ?
                <CircularProgress />
                :
                radio
                    ?
                    <Radio
                        choose={entity => byKey ? entity.key : entity.id * 1}
                        display={entity => show ? show(entity) : (entity.translation || entity.titleizedKey)}
                        options={enumItems}
                        row={row}
                        {...rest}
                    />
                    :
                    <Select
                        choose={entity => byKey ? entity.key : entity.id * 1}
                        display={entity => show ? show(entity) : (entity.translation || entity.titleizedKey)}
                        options={enumItems}
                        {...rest}
                    />
        }
    </div>
}

export default Enum
