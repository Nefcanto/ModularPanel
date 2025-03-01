import Numeric from "../../Form/Fields/Numeric"
import DialogProperty from "./DialogProperty"

const NumberProperty = (props) => {

    return <DialogProperty
        display={value => <span>{value}</span>}
        inputs={<Numeric
            property="value"
        />}
        {...props}
    />
}

export default NumberProperty
