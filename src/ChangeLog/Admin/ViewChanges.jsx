import {
    useContext,
    useEffect,
    useState,
} from "react"
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory"
import {
    get,
    t,
    url,
} from "App"
import { useMessage } from "Hooks"
import {
    DialogContext,
    EntityContext,
} from "Contexts"
import {
    DateTime,
    Dialog,
    Progress,
} from "Panel"
import { EntityAction } from "List"

const ViewChanges = () => {

    const [open, setOpen] = useState(false)
    const [progress, setProgress] = useState(false)
    const [lastChanges, setLastChanges] = useState(null)
    const { entity } = useContext(EntityContext)
    const { error } = useMessage()

    const loadChanges = () => {
        setProgress(true)
        get(url({
            path: "/changeLog/getChanges",
            query: {
                module: entity.relatedItems.module,
                entityType: entity.relatedItems.entityType,
                entity: entity.id
            }
        }))
            .then(data => {
                setProgress(false)
                setLastChanges(data.lastChanges)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    useEffect(() => {
        if (open) {
            loadChanges()
        }
    }, [open])

    const dialog = <DialogContext.Provider
        value={{
            open,
            setOpen
        }}
    >
        <Dialog
            title="ChangeLogViewChanges"
            content={
                progress
                    ?
                    <Progress />
                    :
                    lastChanges
                        ?
                        <div>
                            <div>{t("ChangeLogCreator")} - {lastChanges.creatorPerson}</div>
                            <div>{t("ChangeLogCreationDate")}: <DateTime date={lastChanges.creationUtcDate} /></div>
                            <hr className="my-4" />
                            <div>{t("ChangeLogLastModifier")} - {lastChanges.lastModifierPerson}</div>
                            <div>{t("ChangeLogLastModificationDate")}: <DateTime date={lastChanges.lastModificationUtcDate} /></div>
                        </div>
                        :
                        <div>{t("InfraNotFound")}</div>
            }
            onClosed={() => setOpen(false)}
        />
    </DialogContext.Provider>

    return <>
        {dialog}
        <EntityAction
            icon={ChangeHistoryIcon}
            title={"ChangeLogViewChanges"}
            onClick={() => setOpen(!open)}
        />
    </>
}

export default ViewChanges
