import {
    useContext,
    useEffect,
    useRef,
    useState,
} from "react"
import {
    camelize,
    isNothing,
    t,
} from "App"
import {
    FieldContext,
    FormContext,
} from "Contexts"

const useField = ({
    choose,
    currentValue,
    disabled,
    doNotChangeOnEntityChange,
    hint,
    initialValue,
    placeholder,
    property,
    propertyAccessor,
    required,
    show,
    showIf,
    type,
    validate,
    ...rest
}) => {

    let internalProperty = ((useContext(FieldContext) || {})).property || property
    const [id, setId] = useState()
    const [internalInitialValue, setInternalInitialValue] = useState(initialValue)
    const [displayValue, setDisplayValue] = useState(initialValue || (type === "Check" ? false : ""))
    const [chosenValue, setChosenValue] = useState(initialValue || (type === "Check" ? false : ""))
    const [chosenEntity, setChosenEntity] = useState(null)
    const [shown, setShown] = useState(show && type === "Numeric" ? show(initialValue) : null)
    const [chosen, setChosen] = useState(show && type === "Numeric" ? show(initialValue) : initialValue)
    const [helpText, setHelpText] = useState(hint)
    const label = placeholder || property
    const [camelizedProperty, setCamelizedProperty] = useState("")
    const [normalizedProperty, setNormalizedProperty] = useState("")
    const [isDirty, setDirty] = useState(false)
    const [validationState, setValidationState] = useState(null)
    const programmaticChange = useState(false)
    const initialHint = hint
    const {
        addFieldToFormContext,
        currentEntity,
        isDirty: isFormDirty,
        isSubmittedOnce,
        isView,
        removeFieldFromFormContext,
        setField,
        setIsDirty: setIsFormDirty,
        state,
        ...formRest
    } = useContext(FormContext)

    const [isDisabled, setIsDisabled] = useState(disabled || isView)

    const setValidationMessage = message => {
        if (isSubmittedOnce) {
            setHelpText(message)
        }
        else {
            if (isDirty) {
                setHelpText(message)
            }
        }
    }

    const validateAll = () => {
        if (required && isNothing(displayValue) && isNothing(chosenValue) && type != "Upload") {
            setValidationState("invalid required " + Date.now())
            setValidationMessage(typeof required === "boolean" ? `${t(label)} ${t("InfraIsNotProvided")}` : required)
        } else {
            if (validate && typeof validate === "function") {
                let result = validate({ displayValue, chosenValue, chosenEntity })
                if (!result || result === true) {
                    setValidationState("valid " + Date.now())
                    setValidationMessage(initialHint)
                }
                else {
                    setValidationState(`invalid ${result?.error} ${Date.now()}`)
                    setValidationMessage(result?.message)
                }
            }
            else {
                setValidationState("valid " + Date.now())
                setValidationMessage(initialHint)
            }
        }
    }

    const isValid = () => {
        if (!validationState) {
            return false
        }
        if (validationState.indexOf("invalid") > -1) {
            return false
        }
        return true
    }

    const resetField = () => {
        setChosenValue(initialValue || (type === "Check" ? false : ""))
        setDisplayValue(initialValue || (type === "Check" ? false : ""))
    }

    useEffect(() => {
        if (showIf) {
            if ((showIf instanceof Function && showIf(state)) || showIf === state) {
                addFieldToFormContext({
                    id,
                    type,
                })
            }
        }
        else {
            addFieldToFormContext({
                id,
                type,
            })
        }
        return () => {
            removeFieldFromFormContext({ id })
        }
    }, [id])

    useEffect(() => {
        if (showIf) {
            if ((showIf instanceof Function && showIf(state)) || showIf === state) {
                addFieldToFormContext({
                    id,
                    type,
                })
            }
            else {
                removeFieldFromFormContext({ id })
            }
        }
    }, [state])

    useEffect(() => {
        if (doNotChangeOnEntityChange) {
            return
        }
        programmaticChange.current = true
        if (currentEntity) {
            if (propertyAccessor) {
                const value = propertyAccessor(currentEntity)
                setDisplayValue(value)
                setChosenValue(value)
                setInternalInitialValue(value)
            }
            else {
                let value = currentEntity[normalizedProperty]
                if (value) {
                    setDisplayValue(value)
                    setChosenValue(value)
                    setInternalInitialValue(value)
                }
                else {
                    if (currentEntity.hasOwnProperty("relatedItems")) {
                        const value = currentEntity["relatedItems"][normalizedProperty]
                        setDisplayValue(value)
                        setChosenValue(value)
                        setInternalInitialValue(value)
                    }
                    else {
                        console.warn(`Value can not be extracted for the property "${internalProperty}" from "`, currentEntity)
                    }
                }
            }
        }
    }, [normalizedProperty, currentEntity])

    useEffect(() => {
        if (isDirty) {
            setIsFormDirty(true)
        }
    }, [isDirty])

    useEffect(() => {

        if (internalProperty) {
            setId(`${type}_${internalProperty}`)

            if (isNaN(internalProperty)) {
                setCamelizedProperty(camelize(internalProperty))
            } else {
                setCamelizedProperty(internalProperty)
            }
        }

    }, [type, internalProperty])

    useEffect(() => {
        if (camelizedProperty) {
            if (camelizedProperty.replace) {
                const value = camelizedProperty
                    ?.replace("date", "utcDate")
                    ?.replace("Date", "UtcDate")
                setNormalizedProperty(value)
            }
            else {
                setNormalizedProperty(camelizedProperty)
            }
        }
    }, [camelizedProperty])

    useEffect(() => {
        validateAll()
    }, [displayValue, isDirty])

    useEffect(() => {
        setField({
            currentValue: type === "Numeric" ? chosen : chosenValue,
            id,
            initialValue: internalInitialValue,
            isDirty,
            isValid: isValid() ? true : false,
            property: internalProperty,
            resetField: resetField,
        })
        if (programmaticChange.current === true) {
            programmaticChange.current = false
        }
    }, [validationState, isDirty, chosenValue, chosen])

    useEffect(() => {
        if (currentValue) {
            setChosenValue(currentValue)
            setDisplayValue(currentValue)
        }
    }, [currentValue])

    useEffect(() => {
        // todo: causes high CPU usage
        if (type == "DateTime") {
            return
        }
        if (!Array.isArray(initialValue) || initialValue?.length > 0) {
            setChosenValue(initialValue)
            setDisplayValue(initialValue)
        }
    }, [initialValue])

    useEffect(() => {
        if (show && type === "Numeric") {
            setShown(show(displayValue))
        }
    }, [displayValue])

    useEffect(() => {
        if (choose && type === "Numeric") {
            setChosen(choose(chosenValue))
        }
    }, [chosenValue])

    const cleanSvg = () => {

        const parser = new DOMParser();
        const svg = parser.parseFromString(displayValue, 'image/svg+xml');

        svg.documentElement.removeAttribute('width');
        svg.documentElement.removeAttribute('height');

        const paths = svg.querySelectorAll('path');
        paths.forEach(path => {
            path.setAttribute('fill', 'currentColor');
        });

        const serializer = new XMLSerializer();
        const neutralizedSvg = serializer.serializeToString(svg);

        setDisplayValue(neutralizedSvg)
        setChosenValue(neutralizedSvg)
    }

    return {
        ...formRest,
        camelizedProperty,
        cleanSvg,
        chosen,
        chosenEntity,
        chosenValue,
        currentEntity,
        displayValue,
        helpText,
        id,
        initialValue: internalInitialValue,
        isDirty,
        isDisabled,
        isValid,
        label,
        programmaticChange: programmaticChange.current,
        resetField,
        setCamelizedProperty,
        setChosenEntity,
        setChosenValue,
        setDisplayValue,
        setHelpText,
        setId,
        setInitialValue: setInternalInitialValue,
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
        showIf,
        shown,
        state,
        type,
        validateAll,
        ...rest,
    }
}

export default useField
