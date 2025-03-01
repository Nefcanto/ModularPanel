import { useContext } from "react"
import CodeIcon from "@mui/icons-material/Code"
import { t } from "App"
import { EntityContext } from "Contexts"

const CodeProperty = () => {

    const { entity } = useContext(EntityContext)
    const { code } = entity.relatedItems

    return <div class="flex gap-2">
        <span>{t("InfraCode")}</span>
        <CodeIcon />
        <span>{code?.title}</span>
    </div>

}

export default CodeProperty
