import {
    useContext,
    useEffect,
    useState,
} from "react"
import { useNavigate } from "react-router"
import app from "App"
import { useMessage } from "Hooks"
import {
    FormContext,
    MashupFormContext
} from "Contexts"
import Actions from "./Actions"
import FormElement from "./FormElement"
import { useForm } from "Hooks"
import Explanations from "./Explanations"

const InlineForm = ({
    actions,
    alwaysEdit,
    entity,
    entityLoadingUrl,
    entityType,
    explanations,
    disableAutomaticEntityLoading,
    humanReadableEntityType,
    inputs,
    large,
    loader,
    mainSubmit,
    okAction,
    onChange,
    onLoad,
    progress: externalProgress,
    returnTo,
    row,
    submitTo,
    title,
    transformResponse,
}) => {

    const [contentProgress, setContentProgress] = useState()

    const { error } = useMessage()

    const navigate = useNavigate()

    const {
        elements,
        isMashupForm,
        setElements,
    } = useContext(MashupFormContext) || {}

    const {
        entityId,
        id,
    } = app.parseQuery()

    const cancel = () => {
        resetFields()
    }

    const {
        calculatedTitle,
        currentForm,
        handleSubmit,
        resetFields,
        setCurrentEntity,
        ...formRest
    } = useForm({
        alwaysEdit,
        contentProgress,
        entity,
        entityId: entityId || id,
        entityLoadingUrl,
        entityType,
        externalProgress,
        humanReadableEntityType,
        loader,
        disableAutomaticEntityLoading: disableAutomaticEntityLoading,
        okAction,
        onChange,
        onCompleted: cancel,
        transformResponse,
        submitTo,
        title,
    })

    useEffect(() => {
        if (onLoad instanceof Function) {
            onLoad({
                error,
                setCurrentEntity,
                setProgress: setContentProgress,
            })
        }
    }, [])

    useEffect(() => {
        if (isMashupForm && currentForm.id) {
            let newElements = elements
            currentForm.mainSubmit = mainSubmit
            newElements[currentForm.id] = currentForm

            setElements({ ...newElements })
        }

    }, [currentForm])

    return <div
        className={"inlineForm px-6 md:px-12 mx-auto dark:bg-stone-900 " + (large ? "lg:w-full" : "lg:w-2/3") + (row ? " flex flex-row items-center gap-4 " : "")}
    >
        <h1>{title}</h1>

        <FormContext.Provider value={{
            calculatedTitle,
            handleSubmit,
            resetFields,
            row,
            setCurrentEntity,
            ...formRest
        }}>
            {
                explanations &&
                <>
                    <Explanations explanations={explanations} />
                    <div className="mb-10"></div>
                </>
            }
            <FormElement
                id="form"
                inputs={inputs}
                handleSubmit={handleSubmit}
                isInline
            />
            {
                !isMashupForm &&
                <Actions
                    actions={actions}
                    handleSubmit={handleSubmit}
                    onCanceled={() => { }}
                />
            }

        </FormContext.Provider>
    </div>
}

export default InlineForm
