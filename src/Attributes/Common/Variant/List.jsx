import { parseQuery } from "App"
import {
    Image,
    List,
    TitleSubtitle,
    ValueWithTitle,
} from "List"
import {
    ManageImages,
    Thumbnails,
} from "Media"
import { SetPrice } from "Pricing"
import AssignAttributes from "../EntityAttribute/Manage"
import VariantForm from "./Form"

const headers = <>
    <th></th>
    <th start>InfraTitle</th>
    <th></th>
</>

const row = entity => <>
    <Image />
    <TitleSubtitle
        subtitle={entity.slug}
        title={<ValueWithTitle
            title={entity.summary}
            value={entity.title}
        />}
    />
    <Thumbnails />
</>

const entityActions = entity => <>
    <ManageImages />
    <AssignAttributes
        entityGuid={entity.guid}
        entityType="Variant"
    />
    <SetPrice />
</>

const Variants = props => {

    const { entityGuid } = parseQuery()

    return <List
        create={VariantForm}
        entityActions={entityActions}
        entityType="Variant"
        hasContent
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        separateRowForActions
        title="AttributesVariants"
        {...props}
    />
}

export default Variants
