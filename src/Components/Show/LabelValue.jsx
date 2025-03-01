import { useState } from "react"
import Tooltip from "@mui/material/Tooltip"
import Collapse from "@mui/material/Collapse"
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import { t } from "App"
import HolismIcon from "../HolismIcon"

const LabelValue = ({
    className,
    counterContent,
    expandable,
    expanded,
    label,
    ltr,
    value,
    valueTitle,
    vertical,
}) => {

    const [isExpanded, setIsExpanded] = useState(expanded)

    const booleanStyle = ""
    const labelStyle = "bg-slate-800 text-white p-2 rounded-s dark:bg-slate-600 dark:text-slate-200"

    const getValue = () => {
        if (typeof value === "boolean") {
            if (value) {
                return <CheckIcon className={`fill-green-400 ${booleanStyle}`} />
            }
            return <CloseIcon className={`fill-red-400 ${booleanStyle}`} />
        }
        if (expandable) {
            return <div className="flex flex-col whitespace-pre">
                <HolismIcon
                    className={`ms-auto cursor-pointer ${isExpanded ? "rotate-180" : ""} duration-300 transition-all`}
                    icon={ExpandMoreIcon}
                    onClick={() => setIsExpanded(!isExpanded)}
                />
                <Collapse in={isExpanded}>
                    <div dir={ltr ? "ltr" : ""}>
                        {value}
                    </div>
                </Collapse>
            </div>
        }
        if (valueTitle) {
            return <div className="gap-2 flex items-center">
                <Tooltip
                    disableInteractive
                    title={valueTitle}
                >
                    <span>{value}</span>
                </Tooltip>
                <HolismIcon
                    icon={MoreHorizIcon}
                    onClick={() => alert(valueTitle)}
                />
            </div>
        }
        else {
            return value
        }
    }

    return <div className={`labelValue bg-slate-200 rounded-sm text-slate-800 flex items-start gap-2 dark:bg-stone-800 dark:text-slate-300 ${className || ""} ${vertical ? "flex-col" : ""}`}>
        {
            (vertical && counterContent)
                ?
                <div className="flex justify-between w-full">
                    <div className={labelStyle}>{t(label)}</div>
                    <div className="pt-2 pe-2 h-10">{counterContent}</div>
                </div>
                :
                <div className={labelStyle}>
                    {t(label)}
                </div>
        }
        <div className="flex-1 p-2 break-all">{getValue()}</div>
    </div>
}

export default LabelValue
