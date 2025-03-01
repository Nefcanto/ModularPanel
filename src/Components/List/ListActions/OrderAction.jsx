import { useContext } from "react"
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha"
import app, { url } from "App"
import { ListContext } from "Contexts"
import ListAction from "./ListAction"

const OrderAction = () => {

    const query = app.parseQuery()
    const { camelizedEntityType } = useContext(ListContext)

    return <ListAction
        url={url({
            path: "/order",
            query: {
                orderEntityType: camelizedEntityType,
                ...query
            }
        })}
        icon={SortByAlphaIcon}
        title="InfraChangeOrder"
    />
}

export default OrderAction
