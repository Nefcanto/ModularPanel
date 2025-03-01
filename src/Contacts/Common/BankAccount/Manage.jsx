import AccountBalanceIcon from "@mui/icons-material/AccountBalance"
import { EntityAction } from "List"

const BankAccountManage = (props) => {
    return <>
        <EntityAction
            {...props}
            title="ContactsBankAccounts"
            icon={AccountBalanceIcon}
        />
    </>
}
export default BankAccountManage
