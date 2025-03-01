import { useContext } from "react"
import { FormContext } from "Contexts"
import Check from "./Check"

const IsVital = () => {

    const {
        formMode,
        mode,
    } = useContext(FormContext)

    return <Check
        hint={mode === formMode.edition ? "InfraPleaseChangeWithCaution" : ""}
        placeholder="InfraIsVital"
        property="IsVital"
        superAdmin
        toggle="IsVital"
    />
}

export default IsVital
