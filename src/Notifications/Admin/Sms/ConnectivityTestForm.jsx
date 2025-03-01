import { post } from "App"
import {
    PageForm,
    Text,
} from "Form"

const inputs = <>
    <Text
        property="PhoneNumber"
        placeholder="NotificationsPhoneNumber"
        required
    />
</>

const SmsConnectivityTestForm = () => {

    const test = ({
        data,
        error,
        setProgress,
        success,
    }) => {

        setProgress(true)
        post(`/sms/testConnectivity?phoneNumber=${data.PhoneNumber}`)
            .then(data => {
                setProgress(false)
                success(data)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <PageForm
        title="NotificationsTestConnectivity"
        inputs={inputs}
        okAction={test}
    />
}

export default SmsConnectivityTestForm
