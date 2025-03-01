import Text from "./Text"

const Title = ({ optional }) => {
    const props = {}
    if (!optional) {
        props.required = true
    }
    return <Text
        property="Title"
        placeholder="InfraTitle"
        {...props}
    />
}

export default Title
