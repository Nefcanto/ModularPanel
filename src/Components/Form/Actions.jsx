import {
    useContext,
    useEffect,
} from "react"
import Button from "@mui/material/Button"
import CircularProgress from "@mui/material/CircularProgress"
import {
    getLocale,
    t,
} from "App"
import { FormContext } from "Contexts"

const Actions = ({
    actions,
    className,
    handleSubmit,
    hasCancel,
    okText,
    onCanceled,
}) => {

    const getProgressSize = () => {
        const locale = getLocale().key
        switch (locale) {
            case "fa":
                return 28
            case "en":
                return 30
            default:
                return 30
        }
    }

    const {
        contentProgress,
        externalProgress,
        isChanged,
        isDirty,
        isInsideTable,
        isValid,
        isView,
        progress,
        row,
    } = useContext(FormContext) || {
        isValid: true
    }

    const isDisabled = () => {
        if (isChanged) {
            const value = !isValid || externalProgress || contentProgress || isView || (progress && isInsideTable)
            return value
        }
        return true
    }

    const buttonsJsx = <>
        {
            hasCancel &&
            <Button
                className="text-gray-900 dark:text-gray-200 dark:border-red-300 dark:text-red-300 dark:hover:bg-red-400 dark:hover:text-white dark:hover:border-red-300 hover:bg-zinc-700/50 border-gray-400"
                onClick={(e) => {
                    e.stopPropagation()
                    if (onCanceled instanceof Function) {
                        onCanceled()
                    }
                }}
                tabIndex={-1}
                variant="outlined"
            >
                {t("InfraCancel")}
            </Button>
        }
        {
            !isView && <Button
                className={(hasCancel && " ms-2 ") + ((isValid && !externalProgress && !contentProgress && !progress && isChanged) ? " bg-green-200 hover:bg-green-400 text-gray-900 border-gray-400 dark:border-white dark:text-gray-800" : "")}
                disabled={isDisabled()}
                onClick={(e) => handleSubmit(e)}
                size={isInsideTable ? "small" : "normal"}
                variant="outlined"
            >
                {t(okText || "InfraSave")}
            </Button>
        }
    </>

    return <div
        className={(row ? "" : "mt-4 ") + className}
        id="actions"
    >
        {
            actions ||
            <div className={isInsideTable ? "" : "me-4 mb-4"}>
                {
                    isInsideTable
                        ?
                        buttonsJsx
                        :
                        progress
                            ?
                            <CircularProgress size={getProgressSize()} />
                            :
                            buttonsJsx
                }
            </div>
        }
    </div>
}

export default Actions
