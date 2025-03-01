import TranslateIcon from "@mui/icons-material/Translate"
import {
    get,
    isDev,
    post,
    setLocale,
    setTranslations,
    t,
} from "App"
import {
    BooleanProperty,
    List,
    ListAction,
} from "List"

const listActions = entityIds => {

    const insertTranslations = ({ setProgress, success, error }) => {
        setProgress(true)
        post("/locale/insertTranslations", entityIds)
            .then(data => {
                get("/locale/data")
                    .then(data => {
                        setTranslations(data.translations)
                        setLocale(data.locale)
                        setProgress(false)
                        success("InfraDone")
                    }, e => {
                        setProgress(false)
                        error(e)
                    })
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <>
        <ListAction
            devOnly
            icon={TranslateIcon}
            minCardinality={1}
            onClick={params => insertTranslations(params)}
            superAdmin
            title="GlobalizationInsertTranslations"
        />
    </>
}

const headers = <>
    <th>InfraKey</th>
    <th>GlobalizationLocalKey</th>
    <th>InfraIsRtl</th>
    <th>InfraIsActive</th>
    <th>InfraIsDefault</th>
</>

const row = ({
    entity,
    isSuperAdmin
}) => {
    const activeProps = {}
    if (isSuperAdmin) {
        activeProps.title = t(entity.isActive ? "Yes, click to deactivate" : "No, click to activate")
        activeProps.actionUrl = `/locale/toggleIsActive/${entity.id}`
    }
    const defaultProps = {}
    if (isSuperAdmin) {
        defaultProps.title = entity.isDefault ? "" : t("No, click to set it as the default")
        defaultProps.actionUrl = `/locale/setAsDefault/${entity.id}`
    }
    return <>
        <td>{entity.key || entity.englishName}</td>
        <td>{entity.localKey || entity.localName}</td>
        <BooleanProperty
            value={entity.isRtl || entity.rtl}
        />
        <BooleanProperty
            {...activeProps}
            value={entity.isActive || entity.rtl}
        />
        {
            (entity.isDefault || entity.default)
                ?
                <BooleanProperty
                    value={entity.isDefault || entity.default}
                />
                :
                <BooleanProperty
                    {...defaultProps}
                    reloadListOnSuccess
                    value={entity.isDefault || entity.default}
                />
        }
    </>
}

const Locales = ({ isSuperAdmin }) => {
    return <List
        entityType="locale"
        hasActivation
        headers={headers}
        listActions={(isSuperAdmin && isDev()) && listActions}
        row={row}
        title="GlobalizationLocales"
    />
}

export default Locales
