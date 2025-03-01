import {
    useEffect,
    useState,
} from "react"
import { useNavigate } from "react-router"
import { t } from "App"
import { Page } from "Page"
import { useTop } from "Hooks"
import { MashupFormContext } from "Contexts"
import Unify from "../Unify"
import MashupActions from "./MashupActions"

const MashupForm = ({
    breadcrumbItems,
    forms,
    returnTo,
    subtitle,
    title,
}) => {

    const [parentEntity, setParentEntity] = useState()
    const [elements, setElements] = useState({})
    const [isValid, setIsValid] = useState(false)
    const [progress, setProgress] = useState(false)
    const navigate = useNavigate()
    const resultAllForm = []

    useTop({
        breadcrumbItems,
        dependency: parentEntity,
        subtitle,
        title,
    })

    useEffect(() => {
        const value = Object.values(elements).every(i => i.isValid)
        setIsValid(value)

    }, [elements])

    const handelSubmit = async (e) => {

        setProgress(true)
        let elementList = Object.values(elements)
        for (let i = 0; i < elementList.length; i++) {
            const result = await elementList[i]?.handleSubmitAsync(e)
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

    return <>
        <Page
            className="px-6 md:px-12 mx-auto dark:bg-sone-900 lg:w-full"
            subtitle={t(subtitle)}
            title={t(title)}
        >
            <MashupFormContext.Provider value={{
                elements,
                forms: forms,
                isMashupForm: true,
                setElements,
            }}>

                <MashupActions
                    handleSubmit={handelSubmit}
                    hasCancel
                    isValid={isValid}
                    okText={t("InfraSave")}
                    onCanceled={cancel}
                    progress={progress}
                />

                <Unify
                    component={forms}
                    okAction={({ data }) => { console.log(data) }}
                />
                <MashupActions
                    handleSubmit={handelSubmit}
                    hasCancel
                    isValid={isValid}
                    okText={t("InfraSave")}
                    onCanceled={cancel}
                    progress={progress}
                />

            </MashupFormContext.Provider>
        </Page >
    </>
}

export default MashupForm

