import {
    useContext,
    useState,
} from "react"
import EditIcon from "@mui/icons-material/Edit"
import {
    isNothing,
    post,
} from "App"
import {
    DialogContext,
    ListContext,
} from "Contexts"
import DialogForm from "../../Form/DialogForm"
import HolismIcon from "../../HolismIcon"

const DialogProperty = ({
    actionUrl,
    display,
    inputs,
    value,
}) => {

    const [open, setOpen] = useState(false)

    const { setEntity } = useContext(ListContext)

    const load = ({ setCurrentEntity }) => {
        setCurrentEntity({
            value
        })
    }

    const save = ({
        data,
        error,
        setProgress,
        success,
    }) => {
        if (!actionUrl || isNothing(actionUrl)) {
            return
        }
        setProgress(true)
        post(actionUrl, data).then(data => {
            setProgress(false)
            success("Applied")
            setEntity(data)
            setOpen(false)
        }, e => {
            error(e)
            setProgress(false)
        })
    }

    return <DialogContext.Provider
        value={{
            open,
            setOpen,
        }}
    >
        <span
            className={actionUrl && "cursor-pointer flex gap-2 justify-center items-center group"}
            title={actionUrl && "Click to change"}
            onClick={() => actionUrl && setOpen(true)}
        >
            {value ? display(value) : "N/A"}
            {
                actionUrl && <HolismIcon
                    icon={EditIcon}
                    className="text-sm group-hover:text-red-400"
                />
            }
        </span>
        <DialogForm
            title="Edit"
            inputs={inputs}
            onLoad={load}
            okAction={save}
        />

    </DialogContext.Provider>
}

export default DialogProperty
