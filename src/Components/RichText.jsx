import Element from "./Element"

const RichText = ({
    content,
    ...rest
}) => {

    const items = content && JSON.parse(content)

    return <div
        className={"richText " + (rest.class || "")}
    >
        {
            items?.map(item => <Element
                {...item}
                {...rest}
            />)
        }
    </div>
}

export default RichText
