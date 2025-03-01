import {
    useEffect,
    useState,
} from "react"

const useEntityType = ({
    data,
}) => {

    const [hasUuid, setHasGuid] = useState(false)
    const [hasKey, setHasKey] = useState(false)
    const [hasOrder, setHasOrder] = useState(false)
    const [hasSlug, setHasSlug] = useState(false)

    useEffect(() => {
        if (!data) {
            return
        }
        if (!data.length > 0) {
            return
        }
        const firstRecord = data[0]
        if (firstRecord.hasOwnProperty("guid")) {
            setHasGuid(true)
        }
        if (firstRecord.hasOwnProperty("key")) {
            setHasKey(true)
        }
        if (firstRecord.hasOwnProperty("order")) {
            setHasOrder(true)
        }
        if (firstRecord.hasOwnProperty("slug")) {
            setHasSlug(true)
        }
    }, [data])

    return {
        hasUuid,
        hasKey,
        hasOrder,
        hasSlug,
        setHasGuid,
        setHasKey,
        setHasOrder,
        setHasSlug,
    }
}

export default useEntityType
