import { useContext } from "react"
import WidgetsIcon from "@mui/icons-material/Widgets"
import { get } from "App"
import { EntityAction } from "List"
import { EntityContext } from "Contexts"

const EntityPackaging = ({
    hasContent,
    ...rest
}) => {

    const { entity } = useContext(EntityContext)
    const entityType = entity.relatedItems.entityType
    const module = entity.relatedItems.entityType

    const handleClick = ({
        entity,
        error,
        reload,
        setEntity,
        setProgress,
        success,
    }) => {
        setProgress(true)
        get(`/packaging/getPackaging?entityGuid=${entity?.guid}`)
            .then(data => {
                setProgress(false)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <EntityAction
        goTo={`/packaging/entity?module=${module}&entityType=${entityType}&entityGuid=${entity?.guid}&pp=${module}&pt=${entityType}&pid=${entity?.id}`}
        icon={WidgetsIcon}
        superAdmin
        title="PackagingManagePackaging"
        {...rest}
    />

}

export default EntityPackaging
