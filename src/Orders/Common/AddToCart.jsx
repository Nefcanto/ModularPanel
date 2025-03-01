import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import { post } from "App"
import { EntityAction } from "List"

const AddToCart = ({
    entityGuid,
    entityType,
}) => {

    const addToCart = ({
        error,
        setEntity,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(`/order/addToCart?entityType=${entityType}&entityGuid=${entityGuid}`)
            .then(data => {
                success("OrdersAddedToCart")
                setProgress(false)
                trigger("cartUpdated", data)
            }, e => {
                error(e)
                setProgress(false)
            })
    }

    return <EntityAction
        title="OrdersAddToCart"
        icon={AddShoppingCartIcon}
        onClick={addToCart}
    />

}

export default AddToCart
