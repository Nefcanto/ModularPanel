import {
    LongText,
    Slug,
    Title,
} from "Form"
import { GranularityField } from "Granularities"
import { DataTypeField } from "DataTypes"

const AttributeInputs = <>
    <GranularityField />
    <Title />
    <Slug />
    <DataTypeField />
    <LongText
        placeholder="InfraDescription"
        property="Description"
    />
</>

export default AttributeInputs
