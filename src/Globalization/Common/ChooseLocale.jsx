import {
    useContext,
    useEffect,
    useState,
} from "react"
import CircularProgress from "@mui/material/CircularProgress"
import DeleteIcon from "@mui/icons-material/Delete"
import LanguageIcon from "@mui/icons-material/Language"
import TranslateIcon from "@mui/icons-material/Translate"
import { PanelContext } from "Contexts"
import {
    get,
    getLocale,
    isDev,
    isDevOrSuperAdmin,
    post,
    setLocale,
    setTranslations,
} from "App"
import {
    HeaderAction,
    HolismIcon,
    Progress,
    SimpleText,
} from "Panel"
import { useMessage } from "Hooks"

const setData = data => {
    let mergedTranslations = {}
    data.translations.map(i => mergedTranslations = { ...mergedTranslations, ...i })
    setTranslations(mergedTranslations)
    setLocale(data.locale || data.requestLocale)
    document.dir = (data.locale?.isRtl || data.requestLocale?.rtl) ? "rtl" : "ltr"
}

const Locales = ({
    locales,
    onChange,
    progress,
    setProgress,
}) => {

    const { success, error } = useMessage()
    const {
        setLocale,
        tenant,
    } = useContext(PanelContext)
    const [loadingLocaleKey, setLoadingLocaleKey] = useState()

    const loadAndSetLocale = locale => {
        if (locale) {
            localStorage.setItem("locale", locale.key || locale.idSegment)
        }
        if (locale) {
            setLoadingLocaleKey(locale.key || locale.idSegment)
        }
        else {
            setProgress(true)
        }
        get("/globalization/data?scopesCsv=all,panel&interfacesCsv=all,panel")
            .then(data => {
                if (locale) {
                    setLoadingLocaleKey(null)
                }
                else {
                    setProgress(false)
                }
                setData(data)
                setLocale((data.locale || data.requestLocale).key)
                if (onChange instanceof Function) {
                    onChange(data)
                }
            }, e => {
                if (locale) {
                    setLoadingLocaleKey(null)
                }
                else {
                    setProgress(false)
                }
                error(e)
            })
    }

    useEffect(() => {
        loadAndSetLocale()
    }, [tenant])

    return <div className={`rounded-md border w-56 flex flex-col justify-center items-center bg-white py-4 dark:bg-stone-900 ${locales.length > 5 ? " grid grid-cols-2 w-72 " : ""}`}>
        {
            progress
                ?
                <CircularProgress />
                :
                locales.map(locale => <div
                    className="w-full flex py-2 px-4 justify-center items-center hover:bg-green-200 dark:hover:bg-gray-200 dark:hover:text-slate-800 cursor-pointer "
                    key={locale.id}
                    onClick={() => loadAndSetLocale(locale)}
                    title={locale.englishName}
                >
                    {
                        (loadingLocaleKey && loadingLocaleKey === (locale.key || locale.idSegment))
                            ?
                            <Progress size={10} />
                            :
                            locale.localKey || locale.localName
                    }
                </div>)
        }

    </div>
}

const ChooseLocale = () => {

    const [locales, setLocales] = useState([])
    const [progress, setProgress] = useState(true)

    const loadActiveLocales = () => {
        setProgress(true)
        const url = window.settings?.NodeApi
            ?
            "/globalization/locale/actives?acrossLocales=true"
            :
            "/locale/actives"
        get(url)
            .then(data => {
                setProgress(false)
                setLocales(data)
            }, e => {
                setProgress(false)
                console.error(e)
            })
    }

    useEffect(() => {
        loadActiveLocales()
    }, [])

    const apply = ({
        error,
        setProgress,
        success,
    }) => {
        setProgress(true)
        const url = window.settings?.NodeApi
            ?
            "/globalization/translation/insertAll"
            :
            "/translation/insertTranslations"
        post(url)
            .then(data => {
                get("/globalization/data?scopesCsv=all,panel&interfacesCsv=all,panel")
                    .then(data => {
                        setProgress(false)
                        setData(data)
                        success("InfraDone")
                    }, e => {
                        setProgress(false)
                        error(e)
                    })
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    const remove = ({
        error,
        setProgress,
        success,
    }) => {
        setProgress(true)
        const url = window.settings?.NodeApi
            ?
            "/globalization/translation/deleteAll"
            :
            "/translation/removeTranslations"
        post(url)
            .then(data => {
                get("/globalization/data?scopesCsv=all,panel&interfacesCsv=all,panel")
                    .then(data => {
                        setProgress(false)
                        setData(data)
                        success("InfraDone")
                    }, e => {
                        setProgress(false)
                        error(e)
                    })
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <>
        {
            isDev() &&
            <HeaderAction
                icon={TranslateIcon}
                onClick={apply}
                title="GlobalizationInsertTranslations"
            />
        }
        {
            isDev() &&
            <HeaderAction
                icon={DeleteIcon}
                onClick={remove}
                title="GlobalizationRemoveTranslations"
            />
        }
        {
            (isDevOrSuperAdmin() || (locales && locales.length) > 1) &&
            <HeaderAction
                component={<Locales
                    locales={locales}
                    onChange={loadActiveLocales}
                    progress={progress}
                    setProgress={setProgress}
                />}
                progress={progress}
                show={<span className="flex gap-0.5 items-center">
                    <HolismIcon
                        className="w-5 h-5"
                        icon={LanguageIcon}
                    />
                    <SimpleText className="hidden md:block text-xs text-slate-600">{getLocale().localKey}</SimpleText>
                </span>}
                title="GlobalizationChoosingLocale"
            />
        }
    </>
}

export default ChooseLocale
