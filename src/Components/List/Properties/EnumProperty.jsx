import {
    useContext,
    useEffect,
    useState,
} from "react"
import {
    get,
    post,
} from "App"
import Collapse from "@mui/material/Collapse"
import CheckIcon from "@mui/icons-material/Check"
import {
    useField,
    useMessage,
} from "Hooks"
import {
    DialogContext,
    EntityContext,
    ListContext,
} from "Contexts"
import DialogForm from "../../Form/DialogForm"
import Chip from "../../Chip"
import HolismIcon from "../../HolismIcon"
import Progress from "../../Progress"
import Enum from "../../Form/Fields/Enum"

const EnumProperty = ({
    actionUrl,
    currentKey,
    currentKeyTranslation,
    currentStyle,
    enumeration,
    reloadOnSuccess,
    styleProvider,
    title,
}) => {
    const [progress, setProgress] = useState(false)
    const [enumItems, setEnumItems] = useState([])
    const [selectedEnum, setSelectedEnum] = useState({ key: currentKey })
    const { error } = useMessage()
    const {
        isTable,
        reloadEntity,
        setEntity,
    } = useContext(ListContext)
    const { entity } = useContext(EntityContext)
    const [open, setOpen] = useState(false)

    const current =
        <Chip
            className={currentStyle + " select-none " + (actionUrl && " cursor-pointer hover:shadow-md hover:scale-105 transition-all")}
            text={currentKeyTranslation}
        />

    const inputs = <>
        {
            progress
                ?
                <Progress />
                :
                <Enum
                    byKey
                    entityType={enumeration}
                    initialValue={currentKey}
                    onChange={(value, entity) => setSelectedEnum(entity)}
                    placeholder="InfraValue"
                    property="SelectedEnum"
                />
        }
    </>

    const save = () => {
        if (selectedEnum.key === currentKey) {
            setOpen(false)
            return
        }
        setProgress(true)
        post(actionUrl + `?newEnumKey=${selectedEnum.key}`)
            .then(data => {
                setProgress(false)
                setOpen(false)
                if (reloadOnSuccess) {
                    reloadEntity(entity)
                }
                setEntity(data)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    let jsx = <div>
        <DialogContext.Provider
            value={{
                open,
                setOpen
            }}
        >
            {
                open &&
                <DialogForm
                    entityType="Enumeration"
                    inputs={inputs}
                    okAction={save}
                    title="InfraSetNewValue"
                />
            }
        </DialogContext.Provider>
        <span
            onClick={() => actionUrl && setOpen(true)}
            title={title}
        >
            {current}
        </span>
    </div>

    return isTable ? <td>{jsx}</td> : jsx
}

export default EnumProperty
