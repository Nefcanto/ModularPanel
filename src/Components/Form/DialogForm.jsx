import {
    useContext,
    useEffect,
    useState,
} from "react"
import IconButton from "@mui/material/IconButton"
import InfoIcon from "@mui/icons-material/Info"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import {
    useMessage,
} from "Hooks"
import { useForm } from "Hooks"
import {
    EntityContext,
    DialogContext,
    FormContext,
    ListContext,
} from "Contexts"
import HolismIcon from "../HolismIcon"
import Dialog from "../Dialog/Dialog"
import FormElement from "./FormElement"
import Explanations from "./Explanations"
import Actions from "./Actions"
import Warning from "../Message/Warning"

const DialogForm = ({
    actions,
    additionalData,
    alwaysEdit,
    close,
    disableAutomaticEntityLoading,
    entityIdExtractor,
    entityLoadingUrl,
    entityType,
    explanations,
    help,
    humanReadableEntityType,
    inputs,
    large,
    loader,
    okAction,
    okText,
    onChange,
    onOpened,
    postSave,
    progress: externalProgress,
    submitTo,
    title,
    uniqueIdentifierExtractor,
    warning,
    ...rest
}) => {
    const { error } = useMessage()
    const {
        dialogProps,
        reload,
        reloadEntity,
    } = useContext(ListContext) || {}

    const dialogContext = useContext(DialogContext)
    const {
        entity,
        isView,
        open,
        parentId,
        setOpen,
    } = dialogContext || {}

    const [entityId, setEntityId] = useState(entity?.id)

    const onCompleted = data => {
        setOpen(false)
        if (postSave && postSave instanceof Function) {
            postSave()
        }
        resetFields()
        if (entity) {
            reloadEntity(entity || data)
        }
        else {
            reload()
        }
    }

    const onCanceled = () => {
        setOpen(false)
        resetFields()
        if (close && close instanceof Function) {
            close()
        }
    }

    useEffect(() => {
        setEntityId(entity?.id)
    }, [entity])

    const {
        calculatedTitle,
        currentEntity,
        deleteFields,
        focusFirstInput,
        handleSubmit,
        isChanged,
        resetFields,
        setCurrentEntity,
        ...formRest
    } = useForm({
        additionalData,
        alwaysEdit,
        entity: entity,
        entityId: entityId,
        entityIdExtractor,
        entityLoadingUrl,
        entityType,
        externalProgress,
        humanReadableEntityType,
        isView: isView,
        lazyLoad: true,
        loader,
        loadRequested: open,
        disableAutomaticEntityLoading: disableAutomaticEntityLoading,
        okAction,
        onChange,
        onCompleted: onCompleted,
        parentId,
        submitTo,
        title,
        uniqueIdentifierExtractor,
        ...rest,
    })
    useEffect(() => {
        deleteFields()
    }, [entityType])

    const [contentProgress, setContentProgress] = useState()

    const titleJsx = <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
            <span>{calculatedTitle}</span>
            {
                help &&
                <IconButton onClick={() => console.log("clicked")}>
                    <HolismIcon
                        className="fill-blue-400"
                        icon={InfoIcon}
                    />
                </IconButton>
            }
        </div>
        <div>
            {
                formRest.isDirty
                    ?
                    formRest.isValid
                        ?
                        <HolismIcon
                            className="fill-green-400"
                            icon={CheckCircleIcon}
                        />
                        :
                        <HolismIcon
                            className="fill-red-400"
                            icon={InfoIcon}
                        />
                    :
                    null
            }
        </div>
    </div>

    const contentJsx = <>
        {warning && <Warning
            text={warning}
            title="InfraWarning"
        />}
        <Explanations explanations={explanations} />
        <FormElement
            handleSubmit={handleSubmit}
            id="dialogForm"
            inputs={inputs}
        />
    </>

    const handleOpened = () => {
        if (onOpened instanceof Function) {
            onOpened()
        } else {
            focusFirstInput("dialogForm")
        }
    }

    const checkForUnsavedData = () => {
        if (isChanged) {
            const result = window.confirm("You have unsaved data. Are you sure you want to leave?")
            return result
        }
    }

    const actionsJsx = <Actions
        actions={actions}
        handleSubmit={handleSubmit}
        hasCancel
        okText={okText}
        onCanceled={onCanceled}
    />

    return <FormContext.Provider
        value={{
            ...formRest,
            contentProgress,
            currentEntity,
            deleteFields,
            isChanged,
            isView,
        }}
    >
        <Dialog
            actions={actionsJsx}
            content={contentJsx}
            large={large}
            onClosed={onCanceled}
            onClosing={checkForUnsavedData}
            onOpened={handleOpened}
            title={titleJsx}
            {...rest}
        />
    </FormContext.Provider >
}

export default DialogForm
