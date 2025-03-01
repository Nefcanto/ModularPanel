import { useContext } from "react"
import StorageIcon from "@mui/icons-material/Storage"
import { t } from "App"
import { EntityContext } from "Contexts"

const QueryProperty = () => {

    const { entity } = useContext(EntityContext)
    const { query } = entity.relatedItems

    return <div class="flex gap-2">
        <span>{t("InfraQuery")}</span>
        <StorageIcon />
        <span>{query?.title}</span>
    </div>

}

export default QueryProperty
