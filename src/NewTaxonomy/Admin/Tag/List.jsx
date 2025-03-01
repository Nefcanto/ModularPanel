import {
    Activation,
    BooleanProperty,
    Image,
    List,
    TitleSort,
    TitleSubtitle,
    ValueWithTitle,
} from "List"
import {
    EntityFaqPage,
    EntitySeo,
} from "Seo"
import {
    ChangeScope,
    GranularityFilter,
    GranularityProperty,
} from "Granularities"
import TagForm from "./Form"

const filters = <>
    <GranularityFilter />
</>

const sorts = [
    ...TitleSort
]

const headers = <>
    <th></th>
    <th>InfraScope</th>
    <th start>InfraTitle</th>
    <th>InfraActive</th>
</>

const row = entity => <>
    <Image />
    <GranularityProperty />
    <TitleSubtitle
        subtitle={entity.slug}
        title={
            <ValueWithTitle
                title={entity.description}
                value={entity.title}
            />}
    />
    <BooleanProperty
        actionUrl={`/tag/toggleBoolean?id=${entity.id}&property=IsActive`}
        value={entity.isActive}
    />
</>

const entityActions = <>
    <ChangeScope />
    <EntitySeo />
    <EntityFaqPage />
</>

const Tags = () => {
    return <List
        changeKeyEntityType="Tag"
        entityActions={entityActions}
        entityType="Tag"
        filters={filters}
        hasActivation
        hasChangeKey
        hasContent
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        separateRowForActions
        sorts={sorts}
        title="NewTaxonomyTags"
        upsert={TagForm}
    />
}

export default Tags
