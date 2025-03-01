import DoneIcon from "@mui/icons-material/Done"
import DoneAllIcon from "@mui/icons-material/DoneAll"
import CloseIcon from "@mui/icons-material/Close"
import SendToMobileIcon from "@mui/icons-material/SendToMobile"
import ContactSupportIcon from "@mui/icons-material/ContactSupport"
import { url } from "App"
import { EntityAction } from "List"

const SendTextMessage = ({
    entity
}) => {

    const hasTextMessage = entity.relatedItems.hasTextMessages
    const firstMessage = entity.relatedItems.textMessages?.[0]
    const receivedByTheExternalApi = firstMessage?.receivedByTheExternalApi
    const received = firstMessage?.received

    const send = ({
        error,
        post,
        setProgress,
        success,
        url,
    }) => {
        const apiUrl = url({
            path: "/textMessage/send",
            query: {
                module: entity.relatedItems.module,
                entityType: entity.relatedItems.entityType,
                entity: entity.id
            }
        })
        setProgress(true)
        post(apiUrl).then(() => {
            setProgress(false)
            success("InfraDone")
        }, e => {
            setProgress(false)
            error(e)
        })
    }

    const getColor = () => {
        if (received) {
            return "fill-green-600"
        }
        if (receivedByTheExternalApi) {
            if (received === false) {
                return "fill-red-400"
            }
            return "fill-blue-400"
        }
        return "fill-red-400"

    }

    const getIcon = () => {
        if (received) {
            return DoneAllIcon
        }
        if (receivedByTheExternalApi) {
            if (received === false) {
                return CloseIcon
            }
            return DoneIcon
        }
        return CloseIcon
    }

    const getStatus = ({
        error,
        post,
        setEntity,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(`/textMessage/getStatus/${firstMessage.id}`)
            .then(data => {
                setProgress(false)
                setEntity(data)
                success("InfraDone")
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    const link = url({
        path: "/textMessages",
        query: {
            entity: entity.id,
            entityType: entity.relatedItems.entityType,
            ignoreStoredListParameters: true,
            module: entity.relatedItems.module,
        }
    })

    return <>
        <EntityAction
            icon={SendToMobileIcon}
            onClick={send}
            title="NotificationsSendSms"
        />
        {
            hasTextMessage &&
            <EntityAction
                color={getColor()}
                goTo={link}
                icon={getIcon()}
                title="InfraStatus"
            />
        }
        {
            hasTextMessage && !firstMessage.status && firstMessage.relatedItems.statusInquiryPossible &&
            <EntityAction
                icon={ContactSupportIcon}
                onClick={getStatus}
                title="NotificationsStatusInquiry"
            />
        }
    </>
}

export default SendTextMessage
