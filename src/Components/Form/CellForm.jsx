import {
    useContext,
    useEffect,
    useState,
} from "react"
import { useNavigate } from "react-router"
import app from "App"
import {
    useForm,
    useMessage,
} from "Hooks"
import {
    FormContext,
    MashupFormContext
} from "Contexts"
import Actions from "./Actions"
import FormElement from "./FormElement"
import Explanations from "./Explanations"

const CellForm = ({
    actions,
    explanations,
    inputs,
    large,
    mainSubmit,
    onLoad,
    progress: externalProgress,
    row,
    title,
    ...rest
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
        currentForm,
        handleSubmit,
        resetFields,
        setCurrentEntity,
        ...formRest
    } = useForm({
        entityId: entityId || id,
        onCompleted: cancel,
        ...rest
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
        className={"cellForm " + (row ? " flex flex-row items-start gap-4 " : "")}
    >
        <FormContext.Provider
            value={{
                handleSubmit,
                isInsideTable: true,
                resetFields,
                row,
                setCurrentEntity,
                ...formRest
            }}
        >
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

export default CellForm
