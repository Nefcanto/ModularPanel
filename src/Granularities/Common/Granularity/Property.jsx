import { useContext } from "react"
import {
    pascalize,
    t,
} from "App"
import {
    EntityContext,
    ListContext,
} from "Contexts"
import { LabelValue } from "Panel"

const GranularityProperty = props => {

    const { entity } = useContext(EntityContext)
    const {
        card,
        isTable,
    } = useContext(ListContext)

    const getLevel = () => {
        if (!entity.module) {
            return t("GranularitiesApplication")
        }
        if (entity.module && !entity.entityType) {
            return `${t("GranularitiesPart")}: ${t(pascalize(entity.module))}`
        }
        if (entity.entityType && !entity.group && !entity.entity) {
            return `${t("GranularitiesType")}: ${t(pascalize(entity.module) + pascalize(entity.entityType))}`
        }
        if (entity.group) {
            return <div>
                <div>{t("GranularitiesGroup")}: {t(pascalize(entity.module) + pascalize(entity.entityType))}</div>
                <div dir="ltr">{entity.group}</div>
            </div>
        }
        return `${t("GranularitiesItem")}: ${t(pascalize(entity.module) + pascalize(entity.entityType))}`
    }

    const getMetadata = () => {
        if (!entity.module) {
            return "-"
        }
        if (entity.module && !entity.entityType) {
            return entity.relatedItems.moduleEntity?.title
        }
        if (entity.entityType && !entity.group && !entity.entity) {
            return t(entity.module) + "/" + t(entity.entityType)
        }
        if (entity.group) {
            return t(entity.module) + "/" + t(entity.entityType)
        }
        return t(entity.module) + "/" + t(entity.entityType) + "/" + entity.entity

    }

    if (!isTable) {
        return <LabelValue
            label="InfraScope"
            value={getLevel()}
            valueTitle={getMetadata()}
            {...props}
        />
    }

    const jsx = <span
        className={"text-xs flex flex-row gap-2 justify-center"}>
        <span>{getLevel()}</span>
        <span>{getMetadata()}</span>
    </span>

    return <td>{jsx}</td>
}

export default GranularityProperty
