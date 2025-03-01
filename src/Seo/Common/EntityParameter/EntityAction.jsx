import { useContext } from "react"
import { useNavigate } from "react-router"
import FindInPageIcon from "@mui/icons-material/FindInPage"
import TextSnippetIcon from "@mui/icons-material/TextSnippet"
import { get } from "App"
import { EntityContext } from "Contexts"
import { EntityAction } from "List"

const EntitySeo = ({
    entityGuid,
    entityType,
    hasContent,
    module,
    ...rest
}) => {

    const { entity } = useContext(EntityContext)
    const navigate = useNavigate()
    const handleClick = ({
        error,
        setProgress,
    }) => {
        setProgress(true)
        get(`/entityParameter/getRecord?module=${module ?? entity.relatedItems.module}&entityType=${entityType ?? entity.relatedItems.entityType}&entity=${entityGuid ?? entity.guid}`)
            .then(data => {
                setProgress(false)
                navigate(`/content?id=${data.id}&entityType=parameterContent&pp=${entity.relatedItems.module}&pt=${entity.relatedItems.entityType}&pid=${entity.id}&&centralized=true&module=seo`)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <>
        <EntityAction
            {...rest}
            goTo={`/seo/entity?module=${module ?? entity.relatedItems.module}&entityType=${entityType ?? entity.relatedItems.entityType}&entity=${entityGuid ?? entity.guid}&pp=${module ?? entity.relatedItems.module}&pt=${entityType ?? entity.relatedItems.entityType}&pid=${entity?.id}`}
            icon={FindInPageIcon}
            title="SeoManageSeo"
        />
        {
            hasContent &&
            <EntityAction
                icon={TextSnippetIcon}
                onClick={handleClick}
                title="SeoPageDescription"
            />
        }
    </>
}

export default EntitySeo
