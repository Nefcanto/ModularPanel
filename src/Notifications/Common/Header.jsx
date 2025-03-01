import {
    useEffect,
    useState,
} from "react"
import NotificationsIcon from "@mui/icons-material/Notifications"
import { usePush } from "Hooks"
import { HeaderAction } from "Panel"

const Notifications = () => {

    const [notifications, setNotifications] = useState([])

    const { receive } = usePush()

    useEffect(() => {
        receive("admin", data => {
            setNotifications(previousNotifications => [...previousNotifications, data])
        })
    }, [])

    return <div className="fixed top-16 right-10 bg-white px-5 rounded-md">
        {
            notifications.length === 0
                ?
                <div className="py-5">No message</div>
                :
                <>
                    {
                        notifications.map(notification => {
                            return <div className="py-5 border-bottom">{notification}</div>
                        })
                    }
                </>
        }
    </div>
}

const ShowNotifications = () => {
    return <>
        <HeaderAction
            title="Notifications"
            icon={NotificationsIcon}
            component={Notifications}
        />
    </>
}

export default ShowNotifications
