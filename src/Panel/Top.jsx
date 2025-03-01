import {
    useContext,
    useEffect,
    useState,
} from "react"
import {
    Link,
    useLocation,
} from "react-router"
import HouseIcon from "@mui/icons-material/House"
import app, { t } from "App"
import {
    PanelContext,
    TopContext,
} from "Contexts"
import * as BreadcrumbProviders from "BreadcrumbProviders"

const Top = props => {

    const {
        grandparent,
        greatGrandparent,
        greatGreatGrandparent,
        parent,
    } = props

    const location = useLocation()
    const query = app.parseQuery()
    const getBreadcrumb = () => {
        let items = []
        for (let provider in BreadcrumbProviders) {
            const providerItems = BreadcrumbProviders[provider]({
                path: location.pathname,
                query,
                ...props
            })
            // console.log(provider, BreadcrumbProviders[provider], providerItems)
            if (providerItems && providerItems.length > 0) {
                items = items.concat(providerItems)
            }
        }
        return items
    }
    const [items, setItems] = useState(getBreadcrumb())
    const [renderCount, forceRerender] = useState(0)

    useEffect(() => {
        // console.log(items)
    }, [items])

    const { maximized, setMaximized } = useContext(PanelContext)
    const {
        breadcrumbItems,
        isFreezed,
        params,
        setBreadcrumbItems,
        setIsFreezed,
        setParams,
        setTitle,
        subtitle,
        title,
    } = useContext(TopContext)

    useEffect(() => {
        forceRerender(prev => prev + 1)
    }, [location])

    const setTop = ({ freeze, title, subtitle, breadcrumbItems }) => {
        setParams({ freeze, title, subtitle, breadcrumbItems })
        if (!isFreezed) {
            setTitle(title)
            if (breadcrumbItems && breadcrumbItems.length) {
                setBreadcrumbItems(breadcrumbItems)
            }
        }
        if (typeof freeze === "boolean") {
            setIsFreezed(freeze)
        }
    }

    useEffect(() => {
        // setTop(params)
    }, [isFreezed])

    useEffect(() => {
        const breadcrumb = getBreadcrumb()
        setItems(breadcrumb)
    }, [parent, grandparent, greatGrandparent, greatGreatGrandparent, location])

    const augment = linkToAugment => {
        const anchor = document.createElement("a")
        anchor.href = linkToAugment
        const url = new URL(anchor.href)
        url.searchParams.set("ignoreStoredListParameters", true)
        url.searchParams.sort()
        const augmentedUrl = url.pathname + url.search
        return augmentedUrl
    }

    const renderBreadcrumb = whichItems => whichItems?.length > 0 && <div className={"flex items-center text-xs text-gray-500 dark:text-white " + (app.getLocale().supportsLetterSpacing && " tracking-wider ")}>
        {
            <>
                <span className="flex items-center">
                    <span className="link text-gray-500 dark:text-white hover:dark:text-blue-300">
                        <Link to="/">
                            <HouseIcon fontSize="small" />
                        </Link>
                    </span>
                    <span
                        className="mx-2"
                        style={{
                            fontSize: "10px"
                        }}
                    >/</span>
                </span>
                {
                    whichItems
                        ?.filter(i => i && i.title)
                        .map((entity, index) => <span
                            key={index}
                            className="flex items-center"
                        >
                            <span>
                                {
                                    entity.link
                                        ?
                                        <span className="link text-gray-500 dark:text-white hover:dark:text-blue-300">
                                            <Link to={augment(entity.link)}>
                                                {t(entity.title)}
                                            </Link>
                                        </span>
                                        :
                                        t(entity.title)
                                }
                            </span>
                            {
                                index === whichItems?.filter(i => i && i.title).length - 1
                                    ?
                                    null
                                    :
                                    <span
                                        className="mx-2"
                                        style={{
                                            fontSize: "10px"
                                        }}
                                    >/</span>
                            }
                        </span>)
                }
            </>
        }
    </div>

    return (app.isNothing(title) && breadcrumbItems?.length === 0)
        ?
        <div className="top"></div>
        :
        <div
            className=
            {
                "top mb-2 ps-5 lg:ps-0 md:ps-0 non-printable "
                + (breadcrumbItems?.length > 0 ? "h-12" : "h-6")
                + (maximized && " hidden ")
            }
        >
            <div className={"font-medium mb-2 text-xl text-gray-700 dark:text-white h-6 " + (app.getLocale().supportsLetterSpacing && "tracking-wider	")}>{t(title && title !== "undefined" ? title : "")}</div>
            {
                renderBreadcrumb(breadcrumbItems)
            }
            {
                renderBreadcrumb(items)
            }
        </div>
}

export default Top
