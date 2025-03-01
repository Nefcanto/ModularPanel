import app from "./App"
import {
    download,
    downloadExternal,
    form,
    get,
    post,
    upload,
} from "./Api"
import filterOperator from "./FilterOperator"
import renderPlace from "./RenderPlace"
import getSettings from "./GetSettings"
import merge from "./Merge"
import tokenize from "./Tokenize"
import kebabize from "./Kebabize"
import camelize from "./Camelize"
import parseKey from "./ParseKey"

const {
    appendQueryToApiUrl,
    checkSignIn,
    containing,
    distinct,
    ensure,
    equalTo,
    getEnum,
    getEnums,
    getJsonHtml,
    getLocale,
    getLocalizedYear,
    isDev,
    isDevOrSuperAdmin,
    isNothing,
    isRtl,
    isSomething,
    isSuperAdmin,
    localizedSiteUrl,
    notContaining,
    openDownloadDialog,
    parseGranularityFromQuery,
    parseQuery,
    parseQueryAsArray,
    pascalize,
    pathAndQuery,
    randomId,
    getPercentColor,
    setEnum,
    setLocale,
    setSupportedLocales,
    setTranslations,
    t,
    url,
} = app

export { appendQueryToApiUrl }
export { camelize }
export { checkSignIn }
export { containing }
export { distinct }
export { download }
export { downloadExternal }
export { ensure }
export { equalTo }
export { filterOperator }
export { form }
export { get }
export { getEnum }
export { getEnums }
export { getJsonHtml }
export { getLocale }
export { getLocalizedYear }
export { getSettings }
export { isDev }
export { isDevOrSuperAdmin }
export { isNothing }
export { isRtl }
export { isSomething }
export { isSuperAdmin }
export { kebabize }
export { localizedSiteUrl }
export { merge }
export { notContaining }
export { openDownloadDialog }
export { parseGranularityFromQuery }
export { parseKey }
export { parseQuery }
export { parseQueryAsArray }
export { pascalize }
export { pathAndQuery }
export { post }
export { randomId }
export { renderPlace }
export { getPercentColor }
export { setEnum }
export { setLocale }
export { setSupportedLocales }
export { setTranslations }
export { t }
export { tokenize }
export { upload }
export { url }
export default app
