import { EnumItem } from "Panel"
import { Enum } from "Form"
import icon from "./Icon"

const DataTypeField = props => <Enum
    choose={item => item.key}
    entityType="DataType"
    placeholder="DataTypesType"
    property="DataType"
    required
    show={enumItem => <EnumItem
        enumItem={enumItem}
        getIcon={icon}
        {...props}
    />}
    {...props}
/>

export default DataTypeField
