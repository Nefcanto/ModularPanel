import {
    BooleanProperty,
    Image,
    TitleSubtitle,
} from "List"
import { DataTypeProperty } from "DataTypes"

const Row = fixedGranularity => entity => <>
    <Image
        uploadUrl={`/attribute/setImage?id=${entity.id}`}
        url={entity.relatedItems.imageUrl ?? entity.relatedItems.attributeImageUrl}
    />
    <TitleSubtitle
        title={entity.title}
    />
    <BooleanProperty
        value={entity.displayOnly}
    />
    <BooleanProperty
        actionable
        property="Filterable"
        value={entity.filterable}
    />
    <BooleanProperty
        actionable
        property="CreatesVariant"
        value={entity.createsVariant}
    />
    <BooleanProperty
        actionable
        property="AffectsValue"
        value={entity.affectsValue}
    />
    <BooleanProperty
        actionable
        property="Comparable"
        value={entity.comparable}
    />
    <BooleanProperty
        actionable
        property="IsMain"
        value={entity.isMain}
    />
    <BooleanProperty
        actionable
        property="HasUnits"
        value={entity.hasUnits}
    />
    <DataTypeProperty />
</>

export default Row
