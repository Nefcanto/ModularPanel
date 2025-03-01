import { useState } from "react"
import {
    post,
    t,
} from "App"
import {
    Checks,
    DialogForm,
} from "Form"
import { UserChip } from "Accounts"

const ManageAssignessDialog = ({
    entity,
    pageId,
    reloadEntity,
    taskId,
    ...rest
}) => {

    const [chosenValues, setChosenValues] = useState([])

    const inputs = <>
        <Checks
            itemsUrl={`/doer/all`}
            checkedItemsUrl={`/task/assigned?taskId=${taskId || ""}`}
            show={entity => <UserChip entity={entity} />}
            choose={entity => entity.userGuid}
            set={setChosenValues}
            vertical
        />
    </>

    const save = ({
        error,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(`/task/assign?taskId=${taskId || ""}&pageId=${pageId || ""}`, chosenValues)
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
        entityType="Doer"
        inputs={inputs}
        okAction={save}
        title="TasksDoerManage"
    />
}

export default ManageAssignessDialog
