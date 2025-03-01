import {
    useContext,
    useState,
} from "react"
import { useNavigate } from "react-router"
import VisibilityIcon from "@mui/icons-material/Visibility"
import app from "App"
import {
    DialogContext,
    EntityContext,
    ListContext,
} from "Contexts"
import Unify from "../../Unify"
import EntityAction from "./EntityAction"

const ViewAction = () => {

    const [open, setOpen] = useState(false)

    const navigate = useNavigate()
    const {
        create,
        edit,
        entityType,
        hasEdit,
        hasView,
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
                        app.error("For edition, either provide a component, or a URL")
                    }
                }
            }
            else {
                setOpen(true)
            }
        }
    }

    const viewAction = <EntityAction
        icon={<VisibilityIcon style={{ color: "#116ff5" }} />}
        title={app.t("InfraView")}
        onClick={() => {
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
            else if (hasView) {
                if (create) {
                    manageEdition(create)
                }
                else {
                    app.error("You specified hasEdit but has not provided a creation component.")
                }
            }
        }}
    />

    const showViewAction = edit instanceof Function ? edit({ entity }) : true

    return <DialogContext.Provider
        value={{
            entity,
            isView: hasView,
            open,
            setOpen,
        }}
    >
        {
            !edit && create && typeof create !== "string" &&
            <Unify
                component={create}
                isSuperAdmin={app.isSuperAdmin()}
                entityId={entity.id}
                entity={entity}
                isView
            />
        }
        {
            upsert && typeof upsert !== "string" &&
            <Unify
                component={upsert}
                isSuperAdmin={app.isSuperAdmin()}
                entityId={entity.id}
                entity={entity}
                isView
            />
        }
        {
            edit && typeof edit !== "string" && typeof edit !== "function" &&
            <Unify
                component={edit instanceof Function ? edit({ entity }) : edit}
                isSuperAdmin={app.isSuperAdmin()}
                entityId={entity.id}
                entity={entity}
                isView
            />
        }
        {showViewAction && viewAction}
    </DialogContext.Provider>
}

export default ViewAction
