import {
    BooleanProperty,
    Image,
    TitleSubtitle,
} from "List"
import { GranularityProperty } from "GranularitiesCommon"
import { DataTypeProperty } from "DataTypesCommon"

const row = fixedGranularity => entity => <>
    <Image url={entity.relatedItems.imageUrl ?? entity.relatedItems.attributeImageUrl} />
    <TitleSubtitle title={entity.title} />
    <BooleanProperty value={entity.displayOnly} />
    <BooleanProperty value={entity.filterable} />
    <BooleanProperty value={entity.createsVariant} />
    <BooleanProperty value={entity.affectsValue} />
    <td>
        <DataTypeProperty />
    </td>
</>

export default row
