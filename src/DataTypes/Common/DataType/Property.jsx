import { useContext } from "react"
import { EntityContext } from "Contexts"
import {
    EnumItem,
    LabelValue,
} from "Panel"
import icon from "./Icon"

const DataTypeProperty = props => {

    const {
        entity,
        isTable,
    } = useContext(EntityContext)
    const { dataType } = entity.relatedItems

    let jsx = <EnumItem
        enumItem={dataType}
        getIcon={icon}
        {...props}
    />

    if (!isTable) {
        jsx = <LabelValue
            label="DataTypesDataType"
            value={jsx}
            {...props}
        />
    }

    return jsx
}

export default DataTypeProperty
