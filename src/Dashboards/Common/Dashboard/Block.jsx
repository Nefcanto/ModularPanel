import { useState } from "react"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import {
    camelize,
    getLocale,
    t,
} from "App"
import { DialogContext } from "Contexts"
import {
    HolismIcon,
    Link,
    Progress,
} from "Panel"
import { useEntitySettings } from "Settings"
import useDashboard from "../Hooks/UseDashboard"
import Chart from "./Chart"
import Metric from "./Metric"
import ParametersDialog from "./ParametersDialog"

const Block = ({ block }) => {

    const { getSetting } = useEntitySettings()
    const [open, setOpen] = useState(false)
    const [progress, setProgress] = useState(false)
    const { getColsAndRows } = useDashboard()
    const { title } = block
    const border = getSetting(block, "border")
    const color = getSetting(block, "color")
    const path = getSetting(block, "path")
    const svg = getSetting(block, "svg")
    const minWidth = getSetting(block, "minWidth")
    const query = block.relatedItems.query
    const code = block.relatedItems.code
    const hasParameters = query?.relatedItems?.hasParameters || code?.relatedItems?.hasParameters

    const augment = linkToAugment => {
        const anchor = document.createElement("a")
        anchor.href = linkToAugment
        const url = new URL(anchor.href)
        url.searchParams.set("ignoreStoredListParameters", true)
        url.searchParams.sort()
        const augmentedUrl = url.pathname + url.search
        return augmentedUrl
    }

    const titleJsx = <span
        className={
            "uppercase text-sm text-gray-800 font-light truncate dark:text-gray-400 block flex items-center gap-2 "
            + (path ? "cursor-pointer" : "cursor-default")
            + (getLocale().supportsLetterSpacing && " tracking-wider ")
        }
        title={t(title)}
    >
        {t(title)}
    </span>

    const iconJsx = <span
        className={
            "w-10 h-10 rounded-full flex justify-center items-center text-white block "
            + (path ? " cursor-pointer " : " cursor-default ")
            + (color || " bg-green-400 ")
        }
        style={{
            backgroundColor: color
        }}
    >
        {
            svg &&
            <span
                className="w-6 aspect-square"
                dangerouslySetInnerHTML={{
                    __html: svg
                }}
            />
        }
    </span>

    const finalJsx = <div className={`block bg-white p-6 dark:bg-zinc-900 md:rounded-lg relative overflow-hidden ${getColsAndRows(block)} `}>
        {
            (title || svg || hasParameters)
                ?
                <div className="blockTopBar flex items-start justify-between mb-4 ">
                    <div className="flex items-center gap-4">
                        {
                            hasParameters &&
                            <DialogContext.Provider
                                value={{
                                    open,
                                    setOpen,
                                }}
                            >
                                {open && <ParametersDialog block={block} />}
                                <HolismIcon
                                    onClick={() => setOpen(true)}
                                    icon={FilterAltIcon}
                                />
                            </DialogContext.Provider>
                        }
                        {
                            title
                                ?
                                titleJsx
                                :
                                null
                        }
                    </div>
                    {
                        svg
                            ?
                            iconJsx
                            :
                            null
                    }
                </div>
                :
                null
        }
        {
            block.contentType === "chart" &&
                minWidth
                ?
                <div className="overflow-auto">
                    <div
                        style={{
                            minWidth: `${minWidth}px`
                        }}
                    >
                        <Chart
                            block={block}
                            progress={progress}
                            setProgress={setProgress}
                        />
                    </div>
                </div>
                :
                <Chart
                    block={block}
                    progress={progress}
                    setProgress={setProgress}
                />
        }
        {
            block.contentType === "metric" &&
            <Metric block={block} />
        }
        {
            border &&
            <div
                className={`h-1.5 ${color} absolute ${camelize(border)}-0 start-0 end-0 `}
                style={{
                    backgroundColor: color
                }}
            />
        }
        {
            progress &&
            <div className="absolute top-0 right-0 bottom-0 left-0 opacity-50 bg-gray-400 place-items-center grid">
                <Progress />
            </div>
        }
    </div>

    return path
        ?
        <Link
            className={` ${getColsAndRows(block)}`}
            goTo={augment(path)}
        >
            {finalJsx}
        </Link>
        :
        finalJsx
}

export default Block
