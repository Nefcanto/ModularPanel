import Text from "../../Form/Fields/Text"
import DialogProperty from "./DialogProperty"

const TextProperty = (props) => {

    return <DialogProperty
        display={value => <span>{value.cut(20)}</span>}
        inputs={<Text
            property="value"
        />}
        {...props}
    />
}

export default TextProperty
