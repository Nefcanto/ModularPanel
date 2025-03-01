import SmsConnectivityTestForm from "./Sms/ConnectivityTestForm"
import SmsList from "./Sms/List"
import TextMessages from "./TextMessage/List"

const NotificationsRoutes = [
    {
        path: "/smsList",
        component: SmsList
    },
    {
        path: "/textMessages",
        component: TextMessages
    },
    {
        path: "/smsConnectivityTest",
        component: SmsConnectivityTestForm
    }
]

export default NotificationsRoutes
