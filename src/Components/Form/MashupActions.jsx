import Button from "@mui/material/Button"
import CircularProgress from "@mui/material/CircularProgress"
import app from "App"

const MashupActions = ({
    actions,
    className,
    handleSubmit,
    hasCancel,
    isValid,
    okText,
    onCanceled,
    progress,
}) => {

    const getProgressSize = () => {
        const locale = app.getLocale().key
        switch (locale) {
            case "fa":
                return 28
            case "en":
                return 30
            default:
                return 30
        }
    }

    return <div className="px-6 md:px-12 mx-auto dark:bg-stone-900 lg:w-full">
        {
            actions ||
            <div className="me-4 mb-4" >
                {
                    progress
                        ?
                        <CircularProgress size={getProgressSize()} />
                        :
                        <>
                            {
                                hasCancel &&
                                <Button
                                    tabIndex={-1}
                                    className="text-gray-900 dark:text-gray-200 dark:border-red-300 dark:text-red-300 dark:hover:bg-red-400 dark:hover:text-white dark:hover:border-red-300 hover:bg-zinc-700/50 border-gray-400"
                                    variant="outlined"
                                    onClick={() => {
                                        if (onCanceled instanceof Function) {
                                            onCanceled()
                                        }
                                    }}
                                >
                                    {app.t("InfraCancel")}
                                </Button>
                            }
                            <Button
                                variant="outlined"
                                className={(hasCancel && " ms-2 ") + ((isValid) ? " bg-green-200 text-gray-900 border-gray-400 dark:border-white dark:text-gray-800" : "")}
                                onClick={async (e) => await handleSubmit(e)}
                                disabled={!isValid}
                            >
                                {app.t(okText || "InfraSave")}
                            </Button>
                        </>
                }
            </div>
        }
    </div>
}

export default MashupActions
