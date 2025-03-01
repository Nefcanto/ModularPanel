import {
    useContext,
    useEffect,
    useState,
} from "react"
import { useNavigate } from "react-router"
import {
    camelize,
    get,
    isDevOrSuperAdmin,
    parseQuery,
} from "App"
import {
    useMessage,
    useTop,
} from "Hooks"
import {
    FormContext,
    MashupFormContext,
    PanelContext,
} from "Contexts"
import { Page } from "Page"
import Actions from "./Actions"
import FormElement from "./FormElement"
import { useForm } from "Hooks"
import Explanations from "../Form/Explanations"

const PageForm = ({
    actions,
    alwaysEdit,
    breadcrumbItems,
    entityLoadingUrl,
    entityType,
    explanations,
    hasBack,
    humanReadableEntityType,
    inputs,
    large,
    loader,
    mainSubmit,
    disableAutomaticEntityLoading,
    okAction,
    onChange,
    onLoad,
    parentEntityType,
    parentIdKey,
    transformResponse,
    progress: externalProgress,
    returnTo,
    submitTo,
    subtitle,
    title,
}) => {

    const [contentProgress, setContentProgress] = useState()

    const [parentEntity, setParentEntity] = useState()

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
    } = parseQuery()

    const { setProgress: setPanelProgress } = useContext(PanelContext)

    const cancel = () => {
        resetFields()
        if (returnTo) {
            navigate(returnTo)
        }
        else {
            navigate(-1)
        }
    }

    const {
        calculatedTitle,
        currentForm,
        handleSubmit,
        load,
        resetFields,
        setCurrentEntity,
        ...formRest
    } = useForm({
        alwaysEdit,
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
        parentIdKey,
        transformResponse,
        submitTo,
        title,
    })

    const backParams = {}

    if (hasBack) {
        backParams.back = `mx-auto ${large ? "lg:w-full" : "lg:w-2/3"}`
    }

    const runOnLoad = () => {
        if (onLoad instanceof Function) {
            onLoad({
                error,
                parentEntity,
                setCurrentEntity,
                setProgress: setContentProgress,
            })
        }
    }

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
        if (parentEntityType) {
            setPanelProgress(true)
            const parsedQuery = parseQuery()
            let parentId = undefined
            if (parsedQuery.parentId) {
                parentId = parsedQuery.parentId
            }
            if (!parentId) {
                parentId = parsedQuery.id
            }
            if (parentIdKey) {
                parentId = parsedQuery[parentIdKey]
            }
            setTimeout(() => {
                get(`/${camelize(parentEntityType)}/get/${parentId}`)
                    .then(data => {
                        setPanelProgress(false)
                        setParentEntity(data)
                    }, e => {
                        setPanelProgress(false)
                        error(e)
                    })
            }, 0)

        }
        else {
            runOnLoad()
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

    useTop({
        breadcrumbItems,
        dependency: parentEntity,
        subtitle,
        title,
    })

    return <Page
        className={"px-6 md:px-12 mx-auto dark:bg-stone-900 " + (large ? "lg:w-full" : "lg:w-2/3")}
        subtitle={subtitle}
        title={calculatedTitle}
        {...backParams}
    >
        <div onClick={() => load()}>reload</div>
        <FormContext.Provider value={{
            calculatedTitle,
            handleSubmit,
            load,
            resetFields,
            setCurrentEntity,
            ...formRest
        }}>
            <Explanations explanations={explanations} />
            {
                !isMashupForm &&
                <Actions
                    actions={actions}
                    handleSubmit={handleSubmit}
                    hasCancel
                    onCanceled={cancel}
                />
            }
            <div className="mb-10"></div>
            <FormElement
                id="form"
                inputs={inputs}
                handleSubmit={handleSubmit}
            />
            {
                !isMashupForm &&
                <Actions
                    actions={actions}
                    handleSubmit={handleSubmit}
                    hasCancel
                    onCanceled={cancel}
                />
            }
        </FormContext.Provider>
    </Page >
}

export default PageForm
