import PriceChangeIcon from "@mui/icons-material/PriceChange"
import { url } from "App"
import { ListAction } from "List"

const Strategies = () => {

    const apiLink = url({
        path: "/strategies"
    })

    return <ListAction
        icon={PriceChangeIcon}
        title="PricingPricingStrategies"
        goTo={apiLink}
    />
}

export default Strategies
