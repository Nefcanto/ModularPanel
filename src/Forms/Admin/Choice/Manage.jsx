import {
    useContext,
    useEffect,
    useState,
} from "react"
import AttributionIcon from "@mui/icons-material/Attribution"
import { url } from "App"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"

const ManageChoices = () => {

    const [hasManageChoices, setHasManageChoices] = useState(false)
    const { entity } = useContext(EntityContext)

    useEffect(() => {
        setHasManageChoices(() => entity.dataType == "singleChoice" || entity.dataType == "multiChoice")
    }, [entity])
    return <>
        {
            hasManageChoices &&
            <EntityAction
                goTo={url({
                    path: "/forms/fieldChoices",
                    query: {
                        field: entity.key
                    },
                    parent: entity
                })}
                icon={AttributionIcon}
                title="FormsManageChoices"
            />
        }
    </>

}

export default ManageChoices
