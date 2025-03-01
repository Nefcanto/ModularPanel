import { Calculate } from "Aggregates"
import { ChooseLocale } from "Globalization"
import { ChooseTenant } from "Tenants"
import { ClearCache } from "Panel"

const HeaderActions = () => {
    return <>
        <Calculate />
        <ChooseLocale />
        {/* <ChooseTenant /> */}
        <ClearCache />
    </>
}

export default HeaderActions
