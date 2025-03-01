import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import { EntityAction } from "List"
import PriceForm from "./Form"

const SetPrice = props => <EntityAction
    title="PricingSetPrice"
    icon={AttachMoneyIcon}
    dialog={PriceForm}
    {...props}
/>

export default SetPrice
