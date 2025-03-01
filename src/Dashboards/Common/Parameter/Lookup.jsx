import {
    useEffect,
    useState,
} from "react"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import app, { get } from "App"
import {
    useFilter,
    useMessage,
} from "Hooks"
import Filter from "./Parameter"
import Progress from "../../Progress"

const Lookup = ({
    choose,
    property,
    display,
    entityType,
    placeholder,
    query,
    ...rest
}) => {

    const [loading, setLoading] = useState()
    const [lookupItems, setLookupItems] = useState([])
    const params = new URLSearchParams()
    if (query) {
        for (const [key, value] of Object.entries(query)) {
            params.append(key, value)
        }
    }
    params.sort()

    const { error } = useMessage()

    const load = () => {
        setLoading(true)
        get(`/${app.camelize(entityType)}/all?${params.toString()}`).then(data => {
            setLookupItems(data)
            setLoading(false)
        }, e => {
            error(e)
            setLoading(false)
        })
    }

    useEffect(() => {
        if (lookupItems.length !== 0) {
            return
        }
        load()
    }, [entityType])

    useEffect(() => {
        load()
    }, [query])

    const {
        entity,
        id,
        initialFilter,
        isDirty,
        isReset,
        label,
        setEntity,
        setIsDirty,
    } = useFilter({
        choose: i => i,
        property,
        placeholder,
        show: i => i,
        type: "select",
        ...rest
    })

    return <Filter
        id={id}
        label={label}
    >
        <Select
            fullWidth
            label={app.t(label)}
            onChange={e => {
                if (!isDirty) {
                    setIsDirty(true)
                }
                setEntity(e.target.value)
            }}
            onClick={e => {
                if (!isDirty) {
                    setIsDirty(true)
                }
            }}
            size="small"
            value={entity || ""}
        >
            {
                loading
                    ?
                    <Progress />
                    :
                    (
                        lookupItems?.map(entity =>
                            <MenuItem
                                key={entity.id}
                                value={choose(entity)}
                            >
                                {app.t(display(entity))}
                            </MenuItem>
                        )
                    )
            }
        </Select>
    </Filter>
}

export default Lookup
