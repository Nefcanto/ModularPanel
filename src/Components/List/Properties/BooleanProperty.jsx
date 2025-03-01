import {
    useContext,
    useState,
} from "react"
import Switch from "@mui/material/Switch"
import Tooltip from "@mui/material/Tooltip"
import CircularProgress from "@mui/material/CircularProgress"
import CheckIcon from "@mui/icons-material/Check"
import ClearIcon from "@mui/icons-material/Clear"
import RemoveIcon from "@mui/icons-material/Remove"
import DeleteIcon from "@mui/icons-material/Delete"
import {
    appendQueryToApiUrl,
    camelize,
    get,
    getLocale,
    post,
    t,
} from "App"
import { useMessage } from "Hooks"
import {
    EntityContext,
    ListContext,
} from "Contexts"
import HolismIcon from "../../HolismIcon"

const BooleanProperty = ({
    actionable,
    actionUrl,
    className,
    falseLabel,
    nullable,
    nullForFalse,
    nullLabel,
    property,
    reloadEntityOnSuccess,
    reloadFrom,
    reloadListOnSuccess,
    title,
    trueLabel,
    value,
    ...rest
}) => {

    const { success, error } = useMessage()
    const [progress, setProgress] = useState(false)
    const { entity } = useContext(EntityContext) || {}
    const getInternalValue = () => {
        if (value) {
            return value
        }
        if (property) {
            return entity[camelize(property)]
        }
    }
    const internalValue = getInternalValue()

    const {
        isTable,
        reload,
        reloadEntity,
        setEntity,
    } = useContext(ListContext) || {}

    const label = (trueLabel && falseLabel)
        ?
        <span className="text-xs mx-1">{
            internalValue
                ?
                t(trueLabel)
                :
                nullable && internalValue !== false
                    ?
                    t(nullable)
                    :
                    t(falseLabel)
        }</span>
        :
        null

    const onChange = e => {
        if (!actionUrl && !actionable) {
            return
        }
        setProgress(true)
        let api = actionUrl
        if (typeof actionUrl === "function") {
            api = actionUrl(e.target.checked)
        }
        if (actionable) {
            api = `/${entity.relatedItems.entityType}/toggleBoolean?id=${entity.id}&property=${property}`
        }
        if (nullForFalse) {
            api += "&nullForFalse=true"
        }
        api = appendQueryToApiUrl(api)
        post(api).then(data => {
            success("InfraDone")
            setProgress(false)
            if (reloadListOnSuccess) {
                reload()
            }
            else if (reloadEntityOnSuccess) {
                reloadEntity(entity)
            }
            else {
                if (reloadFrom) {
                    setProgress(true)
                    get(reloadFrom).then(data => {
                        setProgress(false)
                        setEntity(data)
                    }, e => {
                        error(e)
                        setProgress(false)
                    })
                }
                else {
                    setEntity(data)
                }
            }
        }, e => {
            error(e)
            setProgress(false)
        })
    }

    const getProgressSize = () => {
        const locale = getLocale().key
        if (locale === supportedLocales.en) {
            return 17
        }
        else if (locale === supportedLocales.fa) {
            return 17
        }
        else {
            return 16
        }
    }

    const control = (actionUrl || actionable)
        ?
        <Switch
            checked={internalValue || false}
            onChange={onChange}
            size="small"
        />
        :
        <div className={"" + (
            internalValue === true
                ?
                " text-green-600 "
                :
                internalValue === false
                    ?
                    " text-red-600 "
                    :
                    ""
        )}
        >
            {
                nullable
                    ?
                    internalValue === true
                        ?
                        <HolismIcon icon={CheckIcon} />
                        :
                        internalValue === false
                            ?
                            <HolismIcon icon={ClearIcon} />
                            :
                            <HolismIcon icon={RemoveIcon} />
                    :
                    internalValue === true
                        ?
                        <HolismIcon icon={CheckIcon} />
                        :
                        <HolismIcon icon={ClearIcon} />
            }
        </div>
    let jsx = <div className={"property boolean flex items-center justify-center h-6 " + (className || "")}>
        {
            progress
                ?
                <CircularProgress
                    className={`my-1 mx-[11.5px]`}
                    size={getProgressSize()}
                />
                :
                title
                    ?
                    <>
                        <Tooltip
                            disableInteractive
                            title={title}
                        >
                            {
                                control
                            }
                        </Tooltip>
                        {label}
                    </>
                    :
                    <>
                        {control}
                        {label}
                    </>
        }
    </div>
    return isTable ? <td {...rest}>{jsx}</td> : jsx
}

export default BooleanProperty
