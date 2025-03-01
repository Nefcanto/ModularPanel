import DeleteIcon from "@mui/icons-material/Delete"
import ErrorIcon from "@mui/icons-material/Error"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined"
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined"
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined"
import { post } from "App"
import {
    DatePart,
    Enum,
    List,
    ListAction,
    Text,
    TimePart,
} from "List"

const listActions = itemIds => {

    const create = ({
        error,
        reloadList,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post("/log/createTestLogs").then(data => {
            success("LogsLogsAreCreated")
            setProgress(false)
            reloadList()
        }, e => {
            error(e)
            setProgress(false)
            reloadList()
        })
    }

    const empty = ({
        error,
        reloadList,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post("/log/emptyLogs").then(data => {
            success("LogsLogsAreAllEmptied")
            setProgress(false)
            reloadList()
        }, e => {
            error(e)
            setProgress(false)
        })
    }

    return <>
        <ListAction
            title="InfraCreate"
            icon={ErrorIcon}
            onClick={(params) => create(params)}
        />
        <ListAction
            title="LogsEmptyLogs"
            icon={DeleteIcon}
            onClick={(params) => empty(params)}
        />
    </>
}

const filters =
    <>
        <Text
            property="Text"
            placeholder="InfraText"
        />
        <Enum
            property="TypeId"
            entityType="logType"
            placeholder="InfraType"
        />
    </>

const sorts = [
    {
        caption: "Type",
        property: "TypeId",
        direction: "asc"
    },
    {
        caption: "Newest",
        property: "UtcDate",
        direction: "desc"
    },
    {
        caption: "Oldest",
        property: "UtcDate",
        direction: "asc"
    }
]

const card = entity => {

    const getIcon = () => {
        switch (entity.typeKey.toLowerCase()) {
            case "success":
                return <CheckCircleOutlineOutlinedIcon className="text-green-600" />
            case "info":
                return <InfoOutlinedIcon className="text-blue-600" />
            case "warning":
                return <WarningAmberOutlinedIcon className="text-yellow-600" />
            case "error":
                return <ErrorOutlineOutlinedIcon className="text-red-600" />
            default:
                return <div>No icon</div>
        }
    }

    return <>
        <div
            dir="ltr"
            className="flex flex-row items-center justify-between gap-4 mb-4 "
        >
            <div>{getIcon()}</div>
            <div
                className="flex flex-col justify-end"
            >
                <DatePart
                    date={entity.utcDate}
                    className="text-xs"
                />
                <br />
                <TimePart
                    date={entity.utcDate}
                    className="text-xs"
                />
            </div>
        </div>
        <p
            dir="ltr"
            style={{
                overflowWrap: "anywhere",
                whiteSpace: "pre-line"
            }}
        >
            {entity.text}
        </p>
    </>
}

const classProvider = entity => {
    let style = entity.typeKey.toLowerCase() + " "
    switch (entity.typeKey.toLowerCase()) {
        case "success":
            style += "bg-green-200"
            break
        case "info":
            style += "bg-blue-200"
            break
        case "warning":
            style += "bg-yellow-200"
            break
        case "error":
            style += "bg-red-200"
            break
        default:
            style += ""
    }
    return style
}

const Logs = () => {
    return <List
        title="LogsLogs"
        entityType="log"
        listActions={listActions}
        filters={filters}
        sorts={sorts}
        card={card}
        classProvider={classProvider}
        hasDelete
        deleteBatch
        deleteAll
    />
}

export default Logs
