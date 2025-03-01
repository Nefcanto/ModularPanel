const Field = ({ entity }) => {

    const { dataType } = entity
    const props = { disabled: true }
    let input = <input />
    switch (dataType) {
        case "text":
        case "naturalNumber":
        case "integer":
        case "realNumber":
            input = <input />
            break
        case "boolean":
            input = <input type="checkbox" />
        case "longText":
            input = <textarea />
            break
        case "date":
        case "time":
        case "dateTime":
            input = <input type="datetime-local" />
            break
        case "file":
        case "image":
        case "audio":
        case "video":
            input = <input type="file" />
        default:
            break
    }

    return <div>
        <label>{entity.label || entity.placeholder}</label>
        {input}
    </div>
}

export default Field
