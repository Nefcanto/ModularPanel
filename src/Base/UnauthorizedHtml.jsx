import {
    getLocale,
    t,
} from "./Exports"

const unauthorizedJsx = signOutUrl => <div className="h-screen flex flex-col items-center justify-center">
    <div className="localized-number text-9xl text-red-400 font-bold">403</div>
    <div className={"uppercase mt-10 text-6xl font-bold text-gray-600 text-center " + (getLocale().supportsLetterSpacing && " tracking-widest ")}>{t("InfraForbidden")}</div>
    <div className="text-sm mt-10 text-gray-600 font-light text-center">{t("InfraNoAccessExplanation")}<br />{t("InfraNoAccessGuide")}</div>
    <div className="mt-10">
        <a
            href="/"
            className="bg-green-200 hover:bg-green-400 mt-2 lg:mt-0 mr-2 py-4 px-8 cursor-pointer rounded-md inline-block"
        >
            {t("InfraHome")}
        </a>
        <a
            href={signOutUrl}
            className="bg-red-700 hover:bg-red-950 mt-2 lg:mt-0 mr-2 py-4 px-8 cursor-pointer rounded-md text-white inline-block"
        >
            {t("InfraSignOut")}
        </a>
    </div>
</div>

export default unauthorizedJsx
