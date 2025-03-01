import Tickets from "./Ticket/List"
import { ViewTicket } from "TicketingCommon"

const TicketingRoutes = [
    {
        path: "/tickets",
        component: Tickets
    },
    {
        path: "/ticket/view",
        component: ViewTicket
    }
]

export default TicketingRoutes
