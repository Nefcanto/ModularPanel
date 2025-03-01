import { useState } from "react"
import {
    Checks,
    DialogForm,
    post,
} from "Form"
import { Image } from "List"
import { t } from "App"

const ManageAssignessDialog = ({
    entity,
    entityType,
    itemsUrl,
    pageId,
    reloadEntity,
    taskId,
    ...rest
}) => {

    const [chosenValues, setChosenValues] = useState([])

    const inputs = <>
        <Checks
            itemsUrl={itemsUrl || "/user/list?ReturnAll=true"}
            checkedItemsUrl={`/${entityType || "task"}/assigned?taskId=${taskId || ""}`}
            show={entity => <>
                <Image />
                <h1>{entity?.naturalPersonName || entity?.JuridicalPersonName || entity?.userName}</h1>
            </>}
            choose={entity => entity.guid}
            set={setChosenValues}
        />
    </>

    const save = ({
        error,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(`/${entityType || "task"}/assign?taskId=${taskId || ""}&pageId=${pageId || ""}`, chosenValues)
            .then(data => {
                setProgress(false)
                success(t("TasksDoerAssigned"))
                reloadEntity(entity)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <DialogForm
        {...rest}
        entityType={entityType || "Doer"}
        title="TasksDoerManage"
        inputs={inputs}
        okAction={save}
    />
}

export default ManageAssignessDialog
