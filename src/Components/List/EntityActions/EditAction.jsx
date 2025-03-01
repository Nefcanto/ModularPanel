import {
    useContext,
    useState,
} from "react"
import { useNavigate } from "react-router"
import EditIcon from "@mui/icons-material/Edit"
import {
    isSuperAdmin,
    t,
} from "App"
import {
    DialogContext,
    EntityContext,
    ListContext,
} from "Contexts"
import Unify from "../../Unify"
import EntityAction from "./EntityAction"

const EditAction = props => {

    const [open, setOpen] = useState(false)

    const navigate = useNavigate()
    const {
        create,
        edit,
        entityType,
        hasEdit,
        upsert,
    } = useContext(ListContext)
    const { entity } = useContext(EntityContext)

    const hasHooks = component => {
        if (!component) {
            return false
        }
        if (component.toString instanceof Function) {
            return /\buse[A-Z]/.test(component.toString())
        }
        return false
    }

    const manageEdition = component => {
        if (typeof component === "string") {
            navigate(component)
        }
        else {
            if (component instanceof Function) {
                if (hasHooks(component)) {
                    setOpen(true)
                }
                else {
                    let result = component(entity)
                    if (typeof result === "object") {
                        setOpen(true)
                    }
                    else if (typeof result === "string") {
                        navigate(result)
                    }
                    else {
                        console.error("For edition, either provide a component, or a URL")
                    }
                }
            }
            else {
                setOpen(true)
            }
        }
    }

    const handleClick = () => {
        if (edit) {
            if (edit instanceof Function) {
                if (hasHooks(edit)) {
                    manageEdition(edit)
                }
                else {
                    manageEdition(edit({ entity }))
                }
            }
            else {
                manageEdition(edit)
            }
        }
        else if (upsert) {
            manageEdition(upsert)
        }
        else if (hasEdit) {
            if (create) {
                manageEdition(create)
            }
            else {
                console.error("You specified hasEdit but has not provided a creation component.")
            }
        }
    }

    const editAction = <EntityAction
        icon={<EditIcon style={{ color: "#10B981" }} />}
        onClick={handleClick}
        title={t("InfraEdit")}
        {...props}
    />

    const showEditAction = edit instanceof Function ? edit({ entity }) : true

    let dialogComponent = null
    const extraParams = {
        isSuperAdmin: isSuperAdmin(),
        entityId: entity.id,
        entity: entity,
        isEdit: true
    }
    if (!edit && create && typeof create !== "string") {
        dialogComponent = <Unify
            component={create}
            {...extraParams}
        />
    }
    if (upsert && typeof upsert !== "string") {
        dialogComponent = <Unify
            component={upsert}
            {...extraParams}
        />
    }
    if (edit && typeof edit !== "string" && typeof edit !== "function") {
        dialogComponent = <Unify
            component={edit}
            {...extraParams}
        />
    }

    return <DialogContext.Provider
        value={{
            open,
            setOpen,
            entity,
        }}
    >
        {open && dialogComponent}
        {showEditAction && editAction}
    </DialogContext.Provider>
}

export default EditAction
