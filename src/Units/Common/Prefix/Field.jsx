import { Lookup } from "Form"

const PrefixField = ({
    si,
    ...rest
}) => {

    return <Lookup
        {...rest}
        autocomplete
        byKey
        choose={i => i.key}
        display={i => si ? i.siName : i.commonName}
        entityType="Prefix"
        hasEmpty
        placeholder="UnitsPrefix"
        property="Prefix"
    />
}

export default PrefixField
