import Collapse from "@mui/material/Collapse"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import FormHelperText from "@mui/material/FormHelperText"
import {
    getLocale,
    t,
} from "App"
import Progress from "../../Progress"

const Field = ({
    children,
    className,
    dir,
    helpText,
    hideLabel,
    id,
    isDirty,
    isDisabled,
    isInsideTable,
    isValid,
    label,
    loading,
    progress,
    required,
    showIf,
    state,
    type,
}) => {

    const getProgressSize = () => {
        const locale = getLocale().key
        if (locale === supportedLocales.fa) {
            if (isInsideTable) {
                return 24
            }
            return 48
        }
        else if (locale === supportedLocales.en) {
            if (isInsideTable) {
                return 25
            }
            return 50
        }
    }

    const extraProps = {}
    if (dir) {
        extraProps.dir = dir
    }

    const helpJsx = <FormHelperText
        disabled={progress}
    >
        {t(helpText) || " "}
    </FormHelperText>

    return <Collapse
        in={
            showIf
                ?
                showIf instanceof Function
                    ?
                    showIf(state)
                    :
                    showIf === state
                :
                true
        }
    >
        <div
            className={`field text-black dark:text-slate-50 relative ${className} ${isInsideTable ? "" : " mt-4 "}`}
            {...extraProps}
        >
            <FormControl
                disabled={isDisabled}
                error={isDirty && !isValid()}
                fullWidth
                required={required ? true : false}
            >
                {
                    type !== "Check"
                    && type !== "Upload"
                    && type !== "Radio"
                    && type !== "View"
                    && type !== "DateOnly"
                    && type !== "DateTime"
                    && type !== "Time"
                    && type !== "Boolean"
                    && type !== "Order"
                    && !hideLabel
                    && <InputLabel
                        htmlFor={id}
                        size={isInsideTable ? "small" : "normal"}
                    // classes="text-black dark:text-slate-50" => ?
                    >
                        {t(label)}
                    </InputLabel>
                }
                {
                    loading
                        ?
                        <div className="w-full flex justify-end">
                            <Progress size={getProgressSize()} />
                        </div>
                        :
                        children
                }
                {
                    isInsideTable
                        ?
                        helpText
                            ?
                            helpJsx
                            :
                            null
                        :
                        helpJsx
                }
            </FormControl>
        </div>
    </Collapse>
}

export default Field
