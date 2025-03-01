import { useContext } from "react"
import { Link } from "react-router"
import app from "App"
import { ListContext } from "Contexts"

const TitleSubtitle = ({
    link,
    subtitle,
    supertitle,
    title,
    ...rest
}) => {

    const { isTable } = useContext(ListContext) || {}

    let jsx = <div className="text-start max-w-prose xl:max-w-screen-md">
        {
            supertitle &&
            <div className="text-xs text-gray-400">{supertitle}</div>
        }
        <div className="text-lg font-bold text-slate-600 dark:text-slate-200">{title}</div>
        <div className={`text-xs text-gray-400 dark:text-gray-300 ${app.isGuid(subtitle) ? "invisible" : ""}`}>{subtitle}</div>
    </div>
    const external = link?.startsWith("http") && new URL(link).hostname != document.hostname
    const linkProps = {
        href: link
    }
    if (external) {
        linkProps.target = "_blank"
    }

    jsx = link
        ?
        external
            ?
            <a {...linkProps}>
                {jsx}
            </a>
            :
            <Link to={link}>
                {jsx}
            </Link>
        :
        jsx

    if (isTable) {
        jsx = <td {...rest}>
            {jsx}
        </td>
    }

    return jsx
}

export default TitleSubtitle
