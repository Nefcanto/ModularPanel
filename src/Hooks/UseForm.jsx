import {
    useEffect,
    useState,
} from "react"
import app, {
    appendQueryToApiUrl,
    camelize,
    get,
    post,
    t,
    upload,
} from "App"
import useMessage from "./UseMessage"

const useForm = ({
    additionalData,
    alwaysEdit,
    contentProgress,
    disableAutomaticEntityLoading,
    entity,
    entityId,
    entityIdExtractor,
    entityLoadingUrl,
    entityType,
    externalProgress,
    humanReadableEntityType,
    ignoreUrl,
    isView,
    lazyLoad,
    loader,
    loadRequested,
    okAction,
    onChange,
    onCompleted,
    parentId,
    part,
    submitTo,
    title,
    transformResponse,
    type,
    uniqueIdentifierExtractor,
}) => {
    const formMode = {
        creation: 1,
        edition: 2,
        observation: 3
    }
    const determineFormMode = () => {
        if (alwaysEdit) {
            return formMode.edition
        }
        if (entityId) {
            return formMode.edition
        }
        if (entityIdExtractor && entityIdExtractor(entity)) {
            return formMode.edition
        }
        return formMode.creation
    }
    const [currentForm, serCurrentForm] = useState({})
    const [fields, setFields] = useState([])
    const [progress, setProgress] = useState(false)
    const [isDirty, setDirty] = useState(false)
    const [isChanged, setIsChanged] = useState(false)
    const [isSubmittedOnce, setIsSubmittedOnce] = useState(false)
    const [currentEntity, setCurrentEntity] = useState(entity)
    const [calculatedTitle, setCalculatedTitle] = useState("")
    const [isValid, setIsValid] = useState(false)
    const [hasFile, setHasFile] = useState(false)
    const [mode, setMode] = useState(determineFormMode())
    const [state, setState] = useState()
    const { success, error } = useMessage()
    const safeOnCompleted = data => {
        if (onCompleted instanceof Function) {
            onCompleted(data)
        }
    }

    const validate = () => {
        setIsValid(fields.every(i => i.isValid))
    }

    const addFieldToFormContext = ({ id, ...rest }) => {
        if (!id) {
            return
        }
        for (let i = 0; i < fields.length; i++) {
            if (fields[i].id === id) {
                return
            }
        }
        setFields(previousFields => {
            return [{
                id,
                ...rest
            }, ...previousFields]
        })
    }

    const removeFieldFromFormContext = ({ id }) => {
        if (!id) {
            return
        }
        setFields(previousFields => previousFields.filter(field => field.id !== id))
    }

    const setField = ({
        currentValue,
        id,
        initialValue,
        isDirty,
        isValid,
        property,
        resetField,
    }) => {
        setFields(previousFields => {
            for (let i = 0; i < previousFields.length; i++) {
                if (previousFields[i].id === id) {
                    previousFields[i].initialValue = initialValue
                    previousFields[i].currentValue = currentValue
                    previousFields[i].isValid = isValid
                    previousFields[i].isDirty = isDirty
                    previousFields[i].resetField = resetField
                    previousFields[i].property = property
                }
            }
            return [...previousFields]
        })
    }

    const handleSubmit = event => {
        if (!isSubmittedOnce) {
            setIsSubmittedOnce(true)
        }
        if (!isValid) {
            event.preventDefault()
            return
        }
        let data = hasFile ? new FormData() : {}
        if (hasFile) {
            app.selectedFiles.forEach(file => {
                data.append("file", file)
            })
        }
        for (let i = 0; i < fields.length; i++) {
            const key = fields[i].id.split("_").slice(1).join("_")
            const value = fields[i].currentValue
            if (hasFile) {
                data.append(key, value || "")
            }
            else {
                data[key] = fields[i].currentValue || ""
            }
        }
        new URLSearchParams(window.location.search).forEach((value, key) => {
            const dataKeys = Object.keys(data).map(key => key.toLowerCase())
            if (dataKeys.includes(key.toLowerCase())) {
                return
            }
            data[key] = value
        })
        if (parentId) {
            data.parentId = parentId
        }
        if (additionalData && typeof additionalData == "object") {
            Object.keys(additionalData).forEach(key => {
                data[key] = additionalData[key]
            })
        }
        if (okAction instanceof Function) {
            okAction({
                currentEntity,
                data,
                error,
                onCompleted: safeOnCompleted,
                setProgress,
                success,
            })
        }
        else {
            setProgress(true)
            let url = ""
            if (submitTo) {
                url += submitTo
            }
            else {
                url += window.settings?.NodeApi
                    ?
                    `${camelize(part)}/${camelize(type)}/`
                    :
                    `${camelize(entityType)}/`
                if (hasFile) {
                    url += "upload"
                } else {
                    url += `${mode === formMode.creation ? "create" : "update"}`
                }
            }
            url = appendQueryToApiUrl(url)
            if ((mode === formMode.edition || mode == formMode.observation) && currentEntity) {
                if (window.settings?.NodeApi) {
                    url += url.includes("?") ? `&` : '?'
                    url += `id=${currentEntity?.id}`
                }
                else {
                    data["id"] = currentEntity?.id
                }
            }
            const method = hasFile ? upload : post
            console.log(url)
            method(url, data).then(data => {
                const message = t(`InfraItem${(mode === formMode.creation ? "Created" : "Updated")}Successfully`)
                success(message)
                setProgress(false)
                safeOnCompleted(data.data)
                return data
            }, e => {
                error(e)
                setProgress(false)
            })
        }
        event.preventDefault()
    }

    const handleSubmitAsync = async event => {
        let result = {}
        if (!isSubmittedOnce) {
            setIsSubmittedOnce(true)
        }
        if (!isValid) {
            event.preventDefault()
            return
        }
        let data = hasFile ? new FormData() : {}
        if (hasFile) {
            app.selectedFiles.forEach(file => {
                data.append("file", file)
            })
        }

        for (let i = 0; i < fields.length; i++) {
            const key = fields[i].id.split("_").slice(1).join("_")
            const value = fields[i].currentValue
            if (value === "") {
                continue
            }
            if (hasFile) {
                data.append(key, value)
            }
            else {
                data[key] = fields[i].currentValue
            }
        }
        new URLSearchParams(window.location.search).forEach((value, key) => {
            const dataKeys = Object.keys(data).map(key => key.toLowerCase())
            if (dataKeys.includes(key.toLowerCase())) {
                return
            }
            data[key] = value
        })
        if (parentId) {
            data.parentId = parentId
        }
        if (okAction instanceof Function) {
            okAction({
                currentEntity,
                data,
                error,
                previousFormData: window.previousFormResult,
                setProgress,
                success,
            })
        }
        else {

            setProgress(true)
            let url = ""
            if (submitTo) {
                url += submitTo
            }
            else {
                url += `${camelize(entityType)}/`
                if (hasFile) {
                    url += "upload"
                } else {
                    url += `${mode === formMode.creation ? "create" : "update"}`
                }
            }
            if (window.location.search) {

                const query = new URLSearchParams(window.location.search)
                query.delete("returnTo")
                query.delete("parentId")
                let previousFormData = window.previousFormResult
                if (previousFormData) {
                    Object.keys(previousFormData).forEach(key => {
                        query.set(key, previousFormData[key])
                        data[key] = previousFormData[key]
                    })
                }
                if (url.indexOf("?") > -1) {
                    url += "&"
                }
                else {
                    url += "?"
                }
                url += query.toString()
            }
            if ((mode === formMode.edition || mode == formMode.observation) && currentEntity) {
                data["id"] = currentEntity?.id
            }
            const method = hasFile ? upload : post
            console.log(`Submitting ${url}`, data)
            result = await method(url, data).then(result => {
                if (transformResponse && typeof transformResponse == "function") {
                    window.previousFormResult = null
                    window.previousFormResult = transformResponse(result.data || result)
                }

                if (result.type == "Success") {
                    const message = t(`Infra${(mode === formMode.creation ? "Created" : "Updated")}Successfully`)
                    success(message)
                    setProgress(false)
                    safeOnCompleted(data.data)
                }
                return result
            }, e => {
                error(e)
                setProgress(false)
                return e
            })
        }

        event.preventDefault()
        return result
    }

    useEffect(() => {
        setMode(determineFormMode())
    }, [entityId, entityIdExtractor, uniqueIdentifierExtractor])

    useEffect(() => {
        if (lazyLoad && !loadRequested) {
            return
        }
        else if (loader instanceof Function) {
            loader({
                error,
                setEntity: setCurrentEntity,
                setProgress,
            })
        }
        else if (entityIdExtractor) {
            loadEntity()
        }
        else if (uniqueIdentifierExtractor) {
            loadEntity()
        }
        else if ((mode === formMode.edition || mode == formMode.observation) && entityId) {
            loadEntity()
        }
    }, [mode, loadRequested])

    useEffect(() => {
        if ((currentEntity && currentEntity.id) || alwaysEdit) {
            if (isView) {
                setMode(formMode.observation)
            } else {
                setMode(formMode.edition)
            }
        }
        else {
            setMode(formMode.creation)
        }
    }, [currentEntity])

    const loadEntity = () => {

        let url = ""
        if (disableAutomaticEntityLoading) {
            return
        }
        if (entityLoadingUrl) {
            if (entityLoadingUrl instanceof Function) {
                url = entityLoadingUrl(entity)
            }
            else {
                url = entityLoadingUrl
            }
        }
        else {
            let finalEntityId = entityId
            if (entityIdExtractor) {
                finalEntityId = entityIdExtractor(entity)
            }
            if (!finalEntityId) {
                return
            }
            url = window.settings?.NodeApi
                ?
                `/${camelize(part)}/${camelize(type)}/get?id=${finalEntityId}`
                :
                `/${camelize(entityType)}/get${finalEntityId ? `/${finalEntityId}` : ""}`
        }

        if (!ignoreUrl && window.location.search) {
            const query = new URLSearchParams(window.location.search)
            query.delete("returnTo")
            query.delete("parentId")
            if (url.indexOf("?") > -1) {
                url += "&"
            }
            else {
                url += "?"
            }
            url += query.toString()
        }
        setProgress(true)
        get(url)
            .then(data => {
                setCurrentEntity(data)
                setProgress(false)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    useEffect(() => {
        validate()
        const changeFields = fields.filter(i => i.isDirty && JSON.stringify(i.currentValue || "") !== JSON.stringify(i.initialValue || ""))
        if (changeFields.length > 0) {
            // console.log(changeFields)
        }
        setIsChanged(changeFields.length > 0)

        window.fields = fields
        window.form = {
            fields,
            isChanged,
            isDirty,
            isValid,
            mode,
        }
        if (!window.forms) {
            window.forms = []
        }
        let oldItems = window.forms?.filter(i => i.id != entityType)
        window.forms = [...oldItems, {
            fields,
            handleSubmit,
            handleSubmitAsync,
            id: entityType,
            isChanged,
            isDirty,
            isValid,
            mode,
        }]
    }, [validate, fields])

    useEffect(() => {
        serCurrentForm({
            fields,
            handleSubmit,
            handleSubmitAsync,
            id: entityType,
            isChanged,
            isDirty,
            isValid,
            mode,
        })
    }, [fields, isValid])

    useEffect(() => {
        validate()
    }, [isDirty])

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (isChanged) {
                event.preventDefault()
                event.returnValue = 'Are you sure you want to leave without saving?'
            }
        }
        window.addEventListener('beforeunload', handleBeforeUnload)
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload)

        }
    }, [isChanged])

    const resetFields = exceptions => {
        fields.filter(field => !exceptions?.includes(field.property)).map(i => i?.resetField && i?.resetField())
        setDirty(false)
    }

    const deleteFields = () => {
        setFields([])
    }

    const calculateTitle = () => {
        if (typeof title === "string") {
            setCalculatedTitle(t(title))
        }
        else if (typeof title === "function") {
            setCalculatedTitle(t(title(mode)))
        }
        else {
            let title = ""
            if (mode == formMode.creation) {
                title = t("InfraCreate")

            }
            if (mode == formMode.edition) {
                title = t("InfraEdit")

            }
            if (mode == formMode.observation) {
                title = t("InfraView")

            }
            title += ` ${t(humanReadableEntityType || entityType)}`
            setCalculatedTitle(title)

        }
    }

    useEffect(() => {
        calculateTitle()
    }, [])

    useEffect(() => {
        if (typeof onChange === "function") {
            onChange(fields)
        }
    }, [fields])

    useEffect(() => {
        calculateTitle()
    }, [mode])

    const load = () => {
        loadEntity()
    }

    const focusFirstInput = formId => {
        let firstField = document.querySelector(`#${formId} .field:first-child input`)
        if (!firstField) {
            firstField = document.querySelector(`#${formId} .field:first-child textarea`)
        }
        if (firstField && firstField.focus) {
            firstField.focus()
        }
    }

    return {
        addFieldToFormContext,
        calculatedTitle,
        calculateTitle,
        currentEntity,
        currentForm,
        deleteFields,
        externalProgress,
        fields,
        focusFirstInput,
        formMode,
        handleSubmit,
        handleSubmitAsync,
        isChanged,
        isCreation: mode === formMode.creation,
        isDirty,
        isEdit: mode === formMode.edition,
        isObservation: mode === formMode.observation,
        isValid,
        load,
        mode,
        progress,
        removeFieldFromFormContext,
        resetFields,
        setCurrentEntity,
        setField,
        setHasFile,
        setIsDirty: newValue => {
            const stack = new Error()
                .stack
                .split("\n")
                .filter(i => !/^.*(\.vite|keycloak|\.main\.jsx).*/.test(i))
                .join("\n")
            if (newValue === true) {
                // console.log("setting isDirty to true", stack)
            }
            setDirty(newValue)
        },
        setIsValid,
        setProgress,
        setState,
        state,
    }
}

export default useForm
