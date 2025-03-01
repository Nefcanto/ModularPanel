import { Link } from "react-router"
import Button from "@mui/material/Button"
import {
    getLocale,
    t,
} from "App"
import { useTop } from "Hooks"

const NotFound = () => {

    // useTop({
    //     breadcrumbItems: [],
    //     subtitle: "",
    //     title: "",
    // })

    return <div className="flex flex-col items-center justify-center">
        <div className="localized-number text-9xl text-red-400 font-bold">404</div>
        <div className={"uppercase mt-10 text-6xl font-bold text-gray-600 text-center " + (getLocale().supportsLetterSpacing && " tracking-widest ")}>{t("InfraNotFound")}</div>
        <div className="text-sm mt-10 text-gray-600 font-light text-center">{t("InfraThePageYouRequestedDoesNotExist")}.<br />{t("InfraPleaseUseTheMenuToNavigate")}.<br />{t("InfraOrGoToTheHomePage")}.</div>
        <div className="mt-10">
            <Link
                to={"/"}
            >
                <Button
                    className="bg-green-200 hover:bg-green-400 mt-2 lg:mt-0 mr-2"
                    variant="outlined"
                >
                    {t("InfraHome")}
                </Button>
            </Link>
        </div>
    </div>
}

export default NotFound
