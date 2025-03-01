import LongText from "../../Form/Fields/LongText"
import DialogProperty from "./DialogProperty"

const LongTextProperty = (props) => {

    return <DialogProperty
        display={value => <span>{value.cut(20)}</span>}
        inputs={<LongText
            property="value"
            rows={10}
        />}
        {...props}
    />
}

export default LongTextProperty
