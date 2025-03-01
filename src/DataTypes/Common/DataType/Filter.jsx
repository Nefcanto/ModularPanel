import { EnumItem } from "Panel"
import { Enum } from "List"
import icon from "./Icon"

const DataTypeFilter = props => {
    return <Enum
        choose={item => item.key}
        entityType="DataType"
        placeholder="DataTypesType"
        property="DataType"
        show={enumItem => <EnumItem
            enumItem={enumItem}
            getIcon={icon}
            {...props}
        />}
        {...props}
    />
}

export default DataTypeFilter
