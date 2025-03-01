import { Lookup } from "Form"

const EntityTypeField = ({
    module,
    onChange,
    required
}) => {

    return module
        ?
        <Lookup
            choose={i => i.key}
            display={i => i.title}
            entityType="EntityType"
            onChange={value => (onChange instanceof Function) && onChange(value)}
            placeholder="ModulesEntityType"
            property="EntityType"
            query={{
                module: module
            }}
            required={required}
        />
        :
        null
}

export default EntityTypeField
