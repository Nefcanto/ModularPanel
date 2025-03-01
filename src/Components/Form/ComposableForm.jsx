import {
    useContext,
    useEffect,
    useState,
} from "react"
import {
    parseQuery,
    t,
} from "App"
import {
    useForm,
    useMessage,
} from "Hooks"
import {
    CompositionFormContext,
    FormContext,
} from "Contexts"
import FormElement from "./FormElement"
import Explanations from "../Form/Explanations"

const ComposableForm = ({
    alwaysEdit,
    disableAutomaticEntityLoading,
    entity,
    entityLoadingUrl,
    entityType,
    explanations,
    humanReadableEntityType,
    ignoreUrl,
    inputs,
    loader,
    mainSubmit,
    okAction,
    onChange,
    onLoad,
    transformResponse,
    progress: externalProgress,
    submitTo,
    title,
}) => {

    const [contentProgress, setContentProgress] = useState()

    const { error } = useMessage()

    const {
        elements,
        large,
        setElements,
    } = useContext(CompositionFormContext) || {}

    const {
        entityId,
        id,
    } = parseQuery()

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
        disableAutomaticEntityLoading: disableAutomaticEntityLoading,
        entity,
        entityId: entityId || id,
        entityLoadingUrl,
        entityType,
        externalProgress,
        humanReadableEntityType,
        ignoreUrl,
        loader,
        okAction,
        onChange,
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
        if (currentForm.id) {
            let newElements = elements || []
            currentForm.mainSubmit = mainSubmit
            if (newElements?.find(i => i.id == currentForm.id)) {
                newElements = newElements?.map(i => {
                    if (i.id == currentForm.id) {
                        return currentForm
                    }
                    return i
                })
            } else {
                newElements?.push(currentForm)
            }
            setElements(newElements)
        }

    }, [currentForm])

    return <div
        className={"px-6 md:px-12 mx-auto dark:bg-stone-900 " + (large ? "lg:w-full" : "lg:w-2/3")}
    >
        {title && <p className="mt-10 mb-5">{t(title)}</p>}

        <FormContext.Provider value={{
            calculatedTitle,
            handleSubmit,
            resetFields,
            setCurrentEntity,
            ...formRest
        }}
        >
            <Explanations explanations={explanations} />
            <FormElement
                handleSubmit={handleSubmit}
                id="form"
                inputs={inputs}
                isInline
            />

        </FormContext.Provider>
    </div>
}

export default ComposableForm
