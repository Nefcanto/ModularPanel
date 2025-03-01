import {
    useEffect,
    useState,
} from "react"
import { useNavigate } from "react-router"
import { t } from "App"
import { Page } from "Page"
import { useTop } from "Hooks"
import { CompositionFormContext } from "Contexts"
import Unify from "../Unify"
import CompositionFormActions from "./CompositionFormActions"

const CompositionForm = ({
    forms,
    large,
    returnTo,
    subtitle,
    title,
}) => {

    const [parentEntity, setParentEntity] = useState()
    const [elements, setElements] = useState([])
    const [isValid, setIsValid] = useState(false)
    const [progress, setProgress] = useState(false)
    const navigate = useNavigate()
    const resultAllForm = []

    useTop({
        dependency: parentEntity,
        subtitle,
        title,
    })

    const handelSubmit = async (e) => {

        setProgress(true)
        for (let i = 0; i < elements.length; i++) {
            const result = await elements[i]?.handleSubmitAsync(e)
            resultAllForm.push(result)
        }
        window.previousFormResult = null
        setProgress(false)
        cancel()
    }

    const cancel = () => {
        if (returnTo) {
            navigate(returnTo)
        }
        else {
            navigate(-1)
        }
    }

    useEffect(() => {

        const formIds = elements.map(i => i.id)

        const forms = window?.forms?.filter(i => formIds.includes(i.id))

        const value = forms?.every(i => i.isValid)

        setIsValid(value)

    }, [window.forms])

    return <>
        <Page
            className="px-6 md:px-12 mx-auto dark:bg-sone-900 lg:w-full"
            subtitle={t(subtitle)}
            title={t(title)}
        >
            <CompositionFormContext.Provider value={{
                elements,
                forms: forms,
                isCompositionForm: true,
                setElements,
                large
            }}
            >

                <CompositionFormActions
                    handleSubmit={handelSubmit}
                    hasCancel
                    isValid={isValid}
                    okText={t("InfraSave")}
                    onCanceled={cancel}
                    progress={progress}
                />

                <Unify
                    component={forms}
                    okAction={data => { console.log(data) }}
                />

                <CompositionFormActions
                    handleSubmit={handelSubmit}
                    hasCancel
                    isValid={isValid}
                    okText={t("InfraSave")}
                    onCanceled={cancel}
                    progress={progress}
                />

            </CompositionFormContext.Provider>
        </Page >
    </>
}

export default CompositionForm
