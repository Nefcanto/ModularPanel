import { useState, useContext } from "react"
import EditIcon from "@mui/icons-material/Edit";
import {
    form,
    isNothing,
    t,
} from "App"
import { ListContext } from "Contexts"
import { DialogContext } from "Contexts"
import DialogForm from "../../Form/DialogForm"
import Code from "../../Form/Fields/Code"
import HolismIcon from "../../HolismIcon"

const SvgProperty = ({
    actionUrl,
    superAdmin,
    value,
}) => {
    const [open, setOpen] = useState(false)

    const {
        isTable,
        setEntity,
    } = useContext(ListContext)

    const save = ({
        data,
        error,
        setProgress,
        success,
    }) => {
        if (!actionUrl || isNothing(actionUrl)) {
            return;
        }
        setProgress(true);
        let api = actionUrl;
        if (typeof actionUrl === "function") {
            api = actionUrl(data.value);
        }
        form(api, data.value).then(data => {
            setProgress(false);
            success("Applied");
            setEntity(data)
            setOpen(false)
        }, e => {
            error(e);
            setProgress(false);
        });
    }

    const jsx = <DialogContext.Provider
        value={{
            open,
            setOpen,
        }}
    >
        <span
            className={actionUrl && "cursor-pointer flex gap-2 justify-center items-center group"}
            title={actionUrl && t("InfraClickToChange")}
            onClick={() => actionUrl && setOpen(true)}
        >
            <span
                className="w-4 h-4"
                dangerouslySetInnerHTML={{ __html: value }}
            ></span>
            {
                actionUrl && <HolismIcon
                    icon={EditIcon}
                    className="text-sm group-hover:text-red-400"
                />
            }
        </span>
        <DialogForm
            title="InfraEdit"
            inputs={<Code
                property="value"
                placeholder="InfraValue"
            />}
            okAction={save}
        />

    </DialogContext.Provider>

    return isTable ? <td superAdmin={superAdmin}>{jsx}</td> : jsx
}

export default SvgProperty
