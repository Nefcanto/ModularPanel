import DatePart from "./DatePart"
import TimePart from "./TimePart"
import DateTime from "./DateTime"
import Boolean from "./Boolean"
import Image from "../Image"

const DynamicValue = ({
    dataType,
    value,
}) => {
    switch (dataType) {
        case "link":
            return <a href={value}>{value}</a>
        case "svg":
            return <span
                className="block w-8 aspect-square text-slate-400"
                dangerouslySetInnerHTML={{
                    __html: value
                }}
            />
        case "text":
        case "longText":
        case "singleChoice":
        case "multiChoice":
            return value
        case "naturalNumber":
        case "integer":
        case "realNumber":
        case "percent":
            return value?.digitGroup()
        case "boolean":
        case "nullableBoolean":
            return <Boolean value={value} />
        case "dateTime":
            return <DateTime date={value} />
        case "date":
            return <DatePart date={value} />
        case "time":
            return <TimePart date={value} />
        case "color":
            return <span
                className="w-5 aspect-square"
                style={{ backgroundColor: value }}
            />
        case "code":
            return value
        case "image":
            return <Image
                className="max-h-6"
                source={value}
            />
        case "audio":
            return "audio"
        case "video":
            return "video"
        case "file":
            return "file"
        default:
            return value
    }
}

export default DynamicValue
