import {
    useEffect,
    useState,
} from "react"
import { useNavigate } from "react-router"
import {
    get,
    parseQuery,
    post,
} from "App"
import { useMessage } from "Hooks"
import PageForm from "../Components/Form/PageForm"
import OrderField from "../Components/Form/Fields/Order"

const Order = () => {

    const {
        orderEntityType,
        ...rest
    } = parseQuery()

    const [progress, setProgress] = useState(true)
    const [newOrder, setNewOrder] = useState()

    const navigate = useNavigate()
    const { error } = useMessage()

    const [entities, setEntities] = useState([])

    const getQuery = () => {
        const query = new URLSearchParams(rest)
        query.delete("pageNumber")
        query.delete("pageSize")
        return query.toString()
    }

    useEffect(() => {
        setProgress(true)
        get(`/${orderEntityType}/all?${getQuery()}`)
            .then(data => {
                setProgress(false)
                setEntities(data)
            }, firstError => {
                get(`/${orderEntityType}/list?pageSize=100&${getQuery()}`)
                    .then(data => {
                        setProgress(false)
                        setEntities(data.data)
                    }, secondError => {
                        setProgress(false)
                        error(firstError)
                        error(secondError)
                    })
            })
    }, [])

    const saveNewOrders = () => {
        setProgress(true)
        post(`/${orderEntityType}/setOrder`, newOrder)
            .then(data => {
                setProgress(false)
                navigate(-1)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    const inputs = <>
        <OrderField
            entities={entities}
            onChange={order => setNewOrder(order)}
            property="Order"
        />
    </>

    return entities && entities.length && entities.length > 0 && <PageForm
        inputs={inputs}
        large
        okAction={saveNewOrders}
        progress={progress}
    />
}

export default Order
