import {
    DialogForm,
    Numeric,
    Text,
} from "Form"

const Inputs = <>
    <Text
        property="SiName"
        placeholder="UnitsSiName"
    />
    <Text
        property="CommonName"
        placeholder="UnitsCommonName"
    />
    <Numeric
        placeholder="UnitsMagnitude"
        property="Magnitude"
    />
</>

const PrefixForm = () => {

    return <DialogForm
        title="UnitsCreatePrefix"
        entityType="Prefix"
        inputs={Inputs}
    />
}

export default PrefixForm
