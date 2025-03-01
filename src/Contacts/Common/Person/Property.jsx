import { useContext } from "react"
import { t } from "App"
import {
    EntityContext,
    ListContext,
} from "Contexts"
import { LabelValue } from "Panel"

const PersonProperty = props => {

    const { entity } = useContext(EntityContext)
    const { isTable } = useContext(ListContext)

    const jsx = <div>
        <span>{entity.contactsPersonDisplayName}</span>
        <sup className="ms-1 text-slate-600 dark:text-slate-300">({t(`Contacts${entity.contactsPersonPersonType}`)})</sup>
    </div>

    if (isTable) {
        return <td {...props}>
            {jsx}
        </td>
    }

    return <LabelValue
        label="ContactsPerson"
        value={jsx}
        {...props}
    />
}

export default PersonProperty
