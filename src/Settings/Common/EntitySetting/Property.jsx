import { useContext } from "react"
import { t } from "App"
import { EntityContext } from "Contexts"

const AssignedSettingsProperty = props => {

    const {
        entity,
        isTable,
    } = useContext(EntityContext)
    const { entitySettings } = entity?.relatedItems

    const getFormattedValue = entitySetting => {
        const {
            dataType,
            value,
        } = entitySetting
        switch (dataType) {
            case "boolean":
                if (value.toLowerCase() === "true") {
                    return <span>{t("InfraYes")}</span>
                }
                else {
                    return <span>{t("InfraNo")}</span>
                }
            case "nullableBoolean":
                if (value === "HolismNull") {
                    return <span>{t("InfraNull")}</span>
                }
                if (value.toLowerCase() === "true") {
                    return <span>{t("InfraYes")}</span>
                }
                else {
                    return <span>{t("InfraNo")}</span>
                }
            case "link":
                return <span dir="ltr">{value}</span>
            case "code":
                return <span
                    className="whitespace-pre text-left"
                    dir="ltr"
                    title={value}
                >
                    {value.cut(20)}
                </span>
            case "svg":
                return <span
                    dangerouslySetInnerHTML={{
                        __html: value
                    }}
                />
            case "color":
                return <span
                    className="w-5 aspect-square"
                    style={{ backgroundColor: value }}
                />
            default:
                return <span>{value}</span>
        }
    }

    let jsx = <ul className="divide-y inline-block">
        {
            entitySettings
                ?.filter(i => i.value)
                .map(i => <li
                    className="flex items-center gap-1 justify-center py-1"
                    key={i.id}
                >
                    <span>{i.title}</span>
                    <span>:</span>
                    {getFormattedValue(i)}
                </li>)
        }
    </ul>

    if (isTable) {
        jsx = <td {...props}>
            {jsx}
        </td>
    }

    return jsx
}

export default AssignedSettingsProperty
