import { useContext } from "react"
import { EntityContext } from "Contexts"
import {
    DynamicValue,
    LabelValue,
    MultiCol,
} from "Panel"

const ItemValuesProperty = props => {

    const { entity } = useContext(EntityContext) || { entity: props.entity }
    const { itemValues } = entity.relatedItems

    let jsx = <MultiCol>
        {
            itemValues?.map(i => <LabelValue
                key={i.id}
                label={i.itemPart}
                value={<DynamicValue
                    dataType={i.dataType}
                    value={i.value}
                />}
            />)
        }
    </MultiCol>

    return jsx
}

export default ItemValuesProperty
