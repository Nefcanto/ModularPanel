import { localizedSiteUrl } from "App"
import {
    EnumProperty,
    Image,
    List,
    TitleSubtitle,
    ValueWithTitle,
} from "List"
import TermForm from "./Form"
import ListActions from "./ListActions"
import EntityActions from "./EntityActions"
import Filters from "./Filters"

const headers = <>
    <th></th>
    <th start>GlossaryEntry</th>
    <th>InfraTitle</th>
    <th>GlossaryState</th>
</>

const row = entity => {

    const styleProvider = enumKey => {
        switch (enumKey.toLowerCase()) {
            case "draft":
            default:
                return "bg-red-400 text-white dark:text-black"
            case "published":
                return "bg-green-400 dark:text-black"
        }
    }

    return <>
        <Image />
        <TitleSubtitle
            link={`${localizedSiteUrl()}/glossary/${entity.slug}`}
            subtitle={entity.slug}
            title={<ValueWithTitle
                title={entity.definition}
                value={entity.term.cut(30)}
            />}
        />
        <td>
            {entity.title}
        </td>
        <EnumProperty
            actionUrl={`/entry/changeState/${entity.id}`}
            currentKey={entity.state}
            currentKeyTranslation={entity.relatedItems.stateTranslation}
            currentStyle={styleProvider(entity.state)}
            enumeration="GlossaryState"
            property="State"
            styleProvider={styleProvider}
        />
    </>
}

const Entries = () => {
    return <List
        create={TermForm}
        entityActions={EntityActions}
        entityType="Entry"
        filters={Filters}
        hasContent
        hasDelete
        hasEdit
        headers={headers}
        listActions={ListActions}
        row={row}
        title="GlossaryEntries"
    />
}

export default Entries
