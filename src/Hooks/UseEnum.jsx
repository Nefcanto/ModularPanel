import {
    useEffect,
    useState,
} from "react"
import {
    camelize,
    ensure,
    get,
    getEnum,
    getEnums,
    setEnum,
} from "App"

const useEnum = ({
    entityType,
    part,
    type,
}) => {

    ensure([entityType])

    const getInitialEnum = () => {
        if (window.settings?.NodeApi) {
            return getEnum(part, type) || []
        }
        return getEnum(entityType) || []
    }
    const [progress, setProgress] = useState()
    const [enumItems, setEnumItems] = useState(getInitialEnum)

    useEffect(() => {
        if (enumItems.length !== 0) {
            return
        }
        setProgress(true)
        const url = window.settings?.NodeApi
            ?
            `/${camelize(part)}/${camelize(type)}/all`
            :
            `/${camelize(entityType)}/all`
        get(url).then(data => {
            setEnumItems(data)
            if (window.settings?.NodeApi) {
                setEnum(part, type, data)
            }
            else {
                setEnum(entityType, data)
            }
            window.enums = getEnums()
            setProgress(false)
        }, error => {
            console.log(error)
            setProgress(false)
        })
    }, [enumItems.length, setEnumItems, entityType])

    return {
        enumItems,
        progress,
        setEnumItems,
        setProgress,
    }
}

export default useEnum
