import { useState } from "react"
import Collapse from "@mui/material/Collapse"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import {
    getLocale,
    t,
} from "App"
import { useLocalStorage } from "Hooks"
import { Link } from "Panel"
import HolismIcon from "../HolismIcon"

const Widget = ({
    allSiblingsCount,
    bottomBorder,
    children,
    color,
    expansion,
    icon,
    link,
    menuItems,
    span,
    title,
}) => {

    const Expansion = expansion

    const [expanded, setExpanded] = useLocalStorage({
        initialValue: false,
        defaultValue: false,
        key: `dashboardWidget_${title}_expanded`
    })

    const expandCollapse = e => {
        e.preventDefault()
        e.stopPropagation()
        setExpanded(!expanded)
    }

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
            "uppercase text-sm text-gray-800 font-light truncate dark:text-gray-400 block "
            + (link ? "cursor-pointer" : "cursor-default")
            + " mb-3 "
            + (getLocale().supportsLetterSpacing && " tracking-wider ")
        }
        title={t(title)}
    >
        {t(title)}
    </span>

    const iconJsx = <span
        className={
            "w-10 h-10 rounded-full flex justify-center items-center text-white block "
            + (link ? " cursor-pointer " : " cursor-default ")
            + (color || " bg-green-400 ")
        }
    >
        <HolismIcon icon={icon} />
    </span>

    const finalJsx = <div className="widget bg-white p-6 dark:bg-stone-900 md:rounded-lg relative overflow-hidden">
        {
            (title || icon)
                ?
                <div className="widgetTopBar flex items-start justify-between mb-4 ">
                    {
                        title
                            ?
                            titleJsx
                            :
                            null
                    }
                    {
                        icon
                            ?
                            iconJsx
                            :
                            null
                    }
                </div>
                :
                null
        }
        {children}
        {
            expansion
                ?
                <div
                    className={
                        "widgetExpandCollapse flex items-end justify-end"
                    }
                >
                    <div>
                        <HolismIcon
                            icon={ExpandMoreIcon}
                            className={`cursor-pointer w-10 h-10 ${expanded ? "rotate-180" : ""} duration-300 transition-all`}
                            onClick={expandCollapse}
                        />
                    </div>
                </div>
                :
                null
        }
        {
            <Collapse in={expanded}>
                {
                    expansion
                }
            </Collapse>
        }
        {
            bottomBorder &&
            <div className={`h-1.5 ${color} absolute bottom-0 start-0 end-0 `} />
        }
    </div>

    return link
        ?
        <Link goTo={augment(link)}>{finalJsx}</Link>
        :
        finalJsx
}

export default Widget
