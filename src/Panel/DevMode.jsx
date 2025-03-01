import app from "App"

const DevMode = () => {
    return app.isDev()
        ?
        <span className="devMode text-xs md:text-sm lg:text-md">
            <span className="font-bold text-red-400 animate-pulse uppercase">{app.t("InfraDevMode")}</span>
        </span>
        :
        <div></div>
}

export default DevMode
