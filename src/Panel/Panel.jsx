import {
    useEffect,
    useMemo,
    useState,
    version,
} from "react"
import { useLocation } from "react-router"
import {
    Helmet,
    HelmetProvider,
} from "react-helmet-async"
import Skeleton from "@mui/material/Skeleton"
import CssBaseline from "@mui/material/CssBaseline"
import { CacheProvider } from "@emotion/react"
import rtlPlugin from "stylis-plugin-rtl"
import createCache from "@emotion/cache"
import { prefixer } from "stylis"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3"
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalaliV3"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import {
    createTheme,
    ThemeProvider,
} from "@mui/material/styles"
import MenuIcon from "@mui/icons-material/Menu"
import app, {
    camelize,
    get,
    getLocale,
    isRtl,
    parseQuery,
    post,
} from "App"
import {
    PanelContext,
    TopContext,
} from "Contexts"
import { useLocalStorage } from "Hooks"
import Routing from "./Routing"
import ErrorBoundary from "../Components/ErrorBoundary"
import Sidebar from "./Sidebar"
import Header from "./Header"
import Top from "./Top"
import Message from "./Message"
import HolismIcon from "../Components/HolismIcon"
import * as Initializers from "ClientInitializers"

const cacheLtr = createCache({
    key: "muiltr",
})

const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
})

const Panel = () => {

    const location = useLocation()

    const {
        gggpid,
        gggpp,
        gggpt,
        ggpid,
        ggpp,
        ggpt,
        gpid,
        gpp,
        gpt,
        pid,
        pp,
        pt,
        ri,
        rip,
        rit,
    } = parseQuery()
    const [parentProgress, setParentProgress] = useState(false)
    const [grandparentProgress, setGrandparentProgress] = useState(false)
    const [greatGrandparentProgress, setGreatGrandparentProgress] = useState(false)
    const [greatGreatGrandparentProgress, setGreatGreatGrandparentProgress] = useState(false)
    const [parent, setParent] = useState(null)
    const [grandparent, setGrandparent] = useState(null)
    const [greatGrandparent, setGreatGrandparent] = useState(null)
    const [greatGreatGrandparent, setGreatGreatGrandparent] = useState(null)
    const [relatedItem, setRelatedItem] = useState(null)
    const [relatedItemProgress, setRelatedItemProgress] = useState(false)

    const [isSidebarOpen, setIsSidebarOpen] = useLocalStorage({
        defaultValue: true,
        initialValue: true,
        key: "isSidebarOpen"
    })
    const [isSidebarDocked, setIsSidebarDocked] = useLocalStorage({
        defaultValue: window.innerWidth < app.breakpoints.lg,
        initialValue: window.innerWidth < app.breakpoints.lg,
        key: "isSidebarDocked"
    })
    const [isDark, setIsDark] = useLocalStorage({
        defaultValue: window.matchMedia('(prefers-color-scheme: dark)').matches,
        initialValue: window.matchMedia('(prefers-color-scheme: dark)').matches,
        key: `isDark`
    })
    const [print, setPrint] = useState(true)
    const [maximized, setMaximized] = useLocalStorage({
        defaultValue: false,
        initialValue: false,
        key: `maximized`
    })
    const [locale, setLocale] = useLocalStorage({
        defaultValue: getLocale().isDefault ? getLocale().key : "",
        initialValue: getLocale().key,
        key: "locale"
    })
    const [tenant, setTenant] = useState()

    const [params, setParams] = useState("")
    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [breadcrumbItems, setBreadcrumbItems] = useState([])
    const [isFreezed, setIsFreezed] = useState(false)

    const [isMessageShown, setIsMessageShown] = useState()
    const [message, setMessage] = useState()
    const [description, setDescription] = useState()
    const [data, setData] = useState()
    const [action, setAction] = useState()
    const [severity, setSeverity] = useState()

    const [multiStepConfirmationShown, setMultiStepConfirmationShown] = useState(false)

    const [progress, setProgress] = useState(false)

    const [branding, setBranding] = useState({
        brand: "Panel",
        slogan: ""
    })

    let adapter = AdapterDateFns
    if (getLocale().key === supportedLocales.fa) {
        adapter = AdapterDateFnsJalali
    }
    else if (getLocale().key === supportedLocales.ar) {
        adapter = AdapterDateFns
    }

    const toggleMenu = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const enTheme = {
        direction: "ltr",
        typography: {
            fontFamily: [
                "Roboto",
                "Helvetica",
                "Arial",
                "sans-serif"
            ]
        }
    }

    const faTheme = {
        direction: "rtl",
        typography: {
            fontFamily: [
                "IRANSansX"
            ]
        }
    }

    const arTheme = {
        direction: "rtl",
        typography: {
            fontFamily: [
                "Noto Kufi Arabic"
            ]
        }
    }

    const trTheme = {
        direction: "ltr",
        typography: {
            fontFamily: [
                "Roboto"
            ]
        }
    }

    const theme = useMemo(() => {
        let newTheme = {
            palette: {
                mode: isDark ? "dark" : "light",
            },
        }
        if (getLocale().key === supportedLocales.en) {
            newTheme = { ...newTheme, ...enTheme }
        }
        else if (getLocale().key === supportedLocales.fa) {
            newTheme = { ...newTheme, ...faTheme }
        }
        else if (getLocale().key === supportedLocales.ar) {
            newTheme = { ...newTheme, ...arTheme }
        }
        else if (getLocale().key === supportedLocales.tr) {
            newTheme = { ...newTheme, ...trTheme }
        }
        return createTheme(newTheme)
    }, [isDark, locale])

    const closeMenu = () => {
        if (window.innerWidth < app.breakpoints.lg) {
            setIsSidebarOpen(false)
        }
    }

    const loadItem = props => {
        const {
            item,
            itemId,
            itemPart,
            itemType,
            setItem,
            setItemProgress,
        } = props
        if (!itemType) {
            setItem(null)
            return
        }
        if (!itemId) {
            setItem(null)
            return
        }
        setItemProgress(true)
        let url = window.settings?.NodeApi
            ?
            `/${camelize(itemPart)}/${camelize(itemType)}/${itemId}`
            :
            `/item/load?part=${camelize(itemPart)}&type=${camelize(itemType)}&item=${itemId}`
        get(url)
            .then(data => {
                setItemProgress(false)
                setItem(data)
            }, e => {
                setItemProgress(false)
                console.error(e)
            })
    }

    useEffect(() => {
        setParent(null)
        setGrandparent(null)
        setGreatGrandparent(null)
        setGreatGreatGrandparent(null)
        loadItem({
            item: parent,
            itemId: pid,
            itemType: pt,
            itemPart: pp,
            setItem: setParent,
            setItemProgress: setParentProgress,
        })
        loadItem({
            item: grandparent,
            itemId: gpid,
            itemType: gpt,
            itemPart: gpp,
            setItem: setGrandparent,
            setItemProgress: setGrandparentProgress,
        })
        loadItem({
            item: greatGrandparent,
            itemId: ggpid,
            itemType: ggpt,
            itemPart: ggpp,
            setItem: setGreatGrandparent,
            setItemProgress: setGreatGrandparentProgress,
        })
        loadItem({
            item: greatGreatGrandparent,
            itemId: gggpid,
            itemType: gggpt,
            itemPart: gggpp,
            setItem: setGreatGreatGrandparent,
            setItemProgress: setGreatGreatGrandparentProgress,
        })
        loadItem({
            item: relatedItem,
            itemId: ri,
            itemPart: rip,
            itemType: rit,
            itemPart: rip,
            setItem: setRelatedItem,
            setItemProgress: setRelatedItemProgress,
        })
    }, [location])

    useEffect(() => {
        if (maximized) {
            setIsSidebarOpen(false)
        }
    }, [maximized])

    useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark")
        }
        else {
            document.body.classList.remove("dark")
        }
    }, [isDark])

    useEffect(() => {
        if (print) {
            document.body.classList.add("print")
        }
        else {
            document.body.classList.remove("print")
        }
    }, [print])

    useEffect(() => {
        let url = "/user/sync"
        if (window.defaultPersonType) {
            url += `?defaultPersonType=${window.defaultPersonType}`
        }
        post(url).then(data => { }, e => { console.log(e) })
    }, [])

    useEffect(() => {
        get("/config/list").then(data => {
            window.defaultPageSize = data.defaultPageSize
        }, e => {
            console.log(e)
        })
    }, [])

    useEffect(() => {
        window.reactVersion = version
    }, [])

    useEffect(() => {
        for (let initialization in Initializers) {
            let method = Initializers[initialization]
            if (typeof method == "function") {
                method()
            }
        }
    }, [])

    const startMultiStepConfirmation = () => {
        setMultiStepConfirmationShown(true)
    }

    const menu = <div
        className="menu fixed flex items-center justify-center z-[100] top-4 start-4 w-8 h-8 z-50 bg-white hover:bg-gray-200 transition-colors rounded-xs px-1 text-gray-600 cursor-pointer dark:bg-slate-500 dark:hover:bg-slate-400 dark:text-gray-300 flex items-center"
        onClick={toggleMenu}
    >
        <HolismIcon
            icon={MenuIcon}
            className="w-5 h-5"
        />
    </div>

    return <HelmetProvider>
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={adapter}>
                <CacheProvider value={isRtl() ? cacheRtl : cacheLtr}>
                    <CssBaseline />
                    <PanelContext.Provider
                        value={{
                            action,
                            data,
                            description,
                            isDark,
                            isMessageShown,
                            isSidebarOpen,
                            locale,
                            maximized,
                            message,
                            multiStepConfirmationShown,
                            print,
                            setAction,
                            setData,
                            setDescription,
                            setIsDark,
                            setIsMessageShown,
                            setIsSidebarOpen,
                            setLocale,
                            setMaximized,
                            setMessage,
                            setMultiStepConfirmationShown,
                            setPrint,
                            setProgress,
                            setSeverity,
                            setTenant,
                            severity,
                            startMultiStepConfirmation,
                            tenant,
                        }}
                    >
                        <Helmet>
                            <title>{branding.brand}{branding.slogan && " - "}{branding.slogan}</title>
                        </Helmet>
                        {
                            getLocale().key === supportedLocales.fa &&
                            <Helmet>
                                <link
                                    href="/Fonts/Persian/IranSansX/Font.css"
                                    rel="stylesheet"
                                    type="text/css"
                                />
                            </Helmet>
                        }
                        {
                            getLocale().key === supportedLocales.ar &&
                            <Helmet>
                                <link
                                    href="https://fonts.googleapis.com" />
                                rel="preconnect"
                                <link
                                    crossorigin
                                    href="https://fonts.gstatic.com"
                                    rel="preconnect"
                                />
                                <link
                                    href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100;200;300;400;500;600;700;800;900&display=swap"
                                    rel="stylesheet"
                                />
                                <link
                                    href="/Fonts/Arabic/style.css"
                                    rel="stylesheet"
                                    type="text/css"
                                />
                            </Helmet>
                        }

                        <div
                            className={
                                (isDark ? " dark " : "")
                                +
                                " scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thumb-rounded hover:scrollbar-thumb-gray-700"
                            }
                        >
                            <ErrorBoundary>
                                {menu}
                                <Sidebar
                                    isSidebarOpen={isSidebarOpen}
                                    setIsSidebarOpen={setIsSidebarOpen}
                                />
                            </ErrorBoundary>
                            <ErrorBoundary>
                                <Header
                                    isSidebarDocked={isSidebarDocked}
                                    isSidebarOpen={isSidebarOpen}
                                />
                            </ErrorBoundary>
                            <ErrorBoundary>
                                <div
                                    className=
                                    {
                                        "absolute end-0 overflow-x-auto overflow-y-scroll transition-all duration-300 flex "
                                        + " dark:bg-stone-950 "
                                        + `${isSidebarOpen ? " start-0 lg:start-[20%] 2xl:start-[16.6666%] max-w-[100vw] lg:max-w-[calc(100vw - 20%)] 2xl:max-w-[calc(100vw - 16.6666%)] " : " start-0 max-w-[100vw] "}`
                                        + `${maximized ? " top-0 bottom-0 " : " top-10 bottom-0 "}`
                                    }
                                >
                                    <div className="relative md:p-10 md:pt-4 pt-5 flex flex-col flex-1 print-reset max-w-full">
                                        {
                                            (
                                                progress ||
                                                parentProgress ||
                                                grandparentProgress ||
                                                greatGrandparentProgress ||
                                                greatGreatGrandparentProgress ||
                                                relatedItemProgress
                                            ) &&
                                            <Skeleton
                                                animation="wave"
                                                className="skeleton z-50 absolute top-0 end-0 bottom-0 start-0 h-auto bg-gray-200 dark:bg-gray-700"
                                                variant="rectangular"
                                            />
                                        }
                                        <TopContext.Provider
                                            value={{
                                                breadcrumbItems,
                                                isFreezed,
                                                setBreadcrumbItems,
                                                setIsFreezed,
                                                setSubtitle,
                                                setTitle,
                                                subtitle,
                                                title,
                                            }}
                                        >
                                            <ErrorBoundary>
                                                <Top
                                                    grandparent={grandparent}
                                                    greatGrandparent={greatGrandparent}
                                                    greatGreatGrandparent={greatGreatGrandparent}
                                                    parent={parent}
                                                />
                                            </ErrorBoundary>
                                            <ErrorBoundary>
                                                <Routing
                                                    grandparent={grandparent}
                                                    greatGrandparent={greatGrandparent}
                                                    greatGreatGrandparent={greatGreatGrandparent}
                                                    parent={parent}
                                                    progress={progress}
                                                    relatedItem={relatedItem}
                                                    setProgress={setProgress}
                                                />
                                            </ErrorBoundary>
                                        </TopContext.Provider>
                                    </div>
                                    <Message />
                                </div>
                            </ErrorBoundary>
                        </div>
                    </PanelContext.Provider>
                </CacheProvider>
            </LocalizationProvider >
        </ThemeProvider>
    </HelmetProvider >
}

export default Panel
