import NotificationsIcon from "@mui/icons-material/Notifications"

const NotificationsMenu = [
    {
        children: [
            {
                path: "/smsConnectivityTest",
                superAdmin: true,
                title: "NotificationsTestConnectivity",
            },
            {
                path: "/emails",
                title: "NotificationsEmails",
            },
            {
                path: "/textMessages",
                title: "NotificationsTextMessages",
            }
        ],
        icon: NotificationsIcon,
        title: "NotificationsNotifications",
    }
]

export default NotificationsMenu
