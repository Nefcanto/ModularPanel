import ConstructionIcon from "@mui/icons-material/Construction"
import {
    post,
    t,
} from "App"
import { PrimaryButton } from "Panel"

const SitemapGenerator = () => {

    const generate = ({ setProgress }) => {
        setProgress(true)
        post("/sitemap/generate")
            .then(data => {
                setProgress(false)
                success(data)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <div>
        <h1>{t("SeoSitemapGenerator")}</h1>
        <PrimaryButton
            onClick={generate}
            icon={ConstructionIcon}
            text="SeoGenerateSitemap"
        />
    </div>
}

export default SitemapGenerator
