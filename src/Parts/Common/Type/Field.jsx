import { Lookup } from "Form"

const TypeField = ({
    part,
    onChange,
    required
}) => {

    return part
        ?
        <Lookup
            choose={i => i.key}
            display={i => i.title}
            type="Type"
            onChange={value => (onChange instanceof Function) && onChange(value)}
            placeholder="PartsType"
            property="Type"
            query={{
                part: part
            }}
            required={required}
        />
        :
        null
}

export default TypeField
