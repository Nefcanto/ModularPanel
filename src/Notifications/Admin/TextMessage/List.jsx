import BuildIcon from "@mui/icons-material/Build"
import PhonelinkRingIcon from "@mui/icons-material/PhonelinkRing"
import {
    List,
    ListAction,
    Text,
} from "List"
import Card from "./Card"

const listActions = () => {

    const extract = ({
        error,
        post,
        reloadList,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post("/textMessage/extract")
            .then(data => {
                setProgress(false)
                reloadList()
                success("InfraDone")
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    const getStatus = ({
        error,
        post,
        reloadList,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post("/textMessage/getStatus")
            .then(data => {
                setProgress(false)
                reloadList()
                success("InfraDone")
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <>
        <ListAction
            icon={BuildIcon}
            onClick={extract}
            title="NotificationsExtractingData"
        />
        <ListAction
            icon={PhonelinkRingIcon}
            onClick={getStatus}
            title="NotificationsStatusInquiry"
        />

    </>
}

const filters = <>
    <Text
        placeholder="NotificationsReceptor"
        property="Receptor"
    />
</>

const TextMessages = () => {
    return <List
        card={Card}
        entityType="TextMessage"
        filters={filters}
        listActions={listActions}
        title="NotificationsTextMessages"
    />
}

export default TextMessages
