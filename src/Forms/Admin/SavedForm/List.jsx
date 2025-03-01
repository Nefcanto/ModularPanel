import {
    DateTimeTitleAgo,
    List,
    Lookup,
} from "List"

const filters = <>
    <Lookup
        choose={form => form.key}
        display={form => form.title}
        entityType="Form"
        placeholder="FormsForms"
        property="Form"
        radio
        required
        row
    />
</>

const headers = <>
    <th>InfraKey</th>
</>

const card = entity => <>
    <div className="bg-slate-200 dark:bg-gray-500 p-5 rounded-sm text-lg min-h-fit">
        <p>{entity.title}</p>
        <p><small>{entity.key}</small></p>
        <DateTimeTitleAgo
            date={entity.lastUpdateUtcDate || entity.utcDate}
        />
        <ul className="text-sm text-slate-500 dark:text-gray-900">
            {
                entity?.relatedItems?.savedFields?.map(savedField => <>
                    <li key={savedField.id}>
                        {savedField.title}: {savedField?.relatedItems?.fileUrl ?? savedField.value}
                    </li>
                </>)
            }
        </ul>
    </div>
</>

const SavedForms = () => {
    return <List
        card={card}
        entityType="SavedForm"
        filters={filters}
        hasDelete
        multicolumn
        title="FormsSavedForms"
    />
}

export default SavedForms
