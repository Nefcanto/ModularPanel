import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import { EntityAction } from "List"
import NewPriceForm from "./NewForm"

const NewSetPrice = props => <EntityAction
    title="PricingSetPrice"
    icon={AttachMoneyIcon}
    dialog={NewPriceForm}
    {...props}
/>

export default NewSetPrice
