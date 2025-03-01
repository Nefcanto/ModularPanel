import { useRef } from "react"
import LockIcon from "@mui/icons-material/Lock"
import Text from "./Text"

const Password = ({
    confirm,
    ...rest
}) => {

    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const validate = () => {
        if (passwordRef.current.value === confirmPasswordRef.current.value) {
            return true
        }
        return {
            error: `Confirm${rest.property}`,
            message: "InfraPasswordAndItsConfirmationDoNotMatch"
        }
    }

    return <>
        <Text
            dir="ltr"
            refElement={passwordRef}
            required
            startIcon={LockIcon}
            type="password"
            {...rest}
        />
        {
            confirm &&
            <Text
                dir="ltr"
                placeholder={rest.confirmationPlaceholder}
                property={`Confirm${rest.property}`}
                refElement={confirmPasswordRef}
                required
                startIcon={LockIcon}
                type="password"
                validate={validate}
            />
        }
    </>
}

export default Password
