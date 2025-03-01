import { useContext } from "react"
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"
import PriceForm from "./Form"

const PriceEntityAction = ({ hasInterval }) => {

    const { entity } = useContext(EntityContext)

    return <EntityAction
        title="PricingManagePricing"
        icon={MonetizationOnIcon}
        entity={entity}
        dialog={<PriceForm hasInterval={hasInterval} />}
    />
}

export default PriceEntityAction
