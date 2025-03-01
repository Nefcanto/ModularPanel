const AttributeHeaders = fixedGranularity => <>
    <th></th>
    <th start>InfraTitle</th>
    {
        !fixedGranularity &&
        <td>InfraScope</td>
    }
    <th>AttributesDisplayOnly</th>
    <th>AttributesFilterable</th>
    <th>AttributesCreatesVariant</th>
    <th>AttributesAffectsValue</th>
    <th>AttributesComparable</th>
    <th>AttributesIsMain</th>
    <th>AttributesHasUnits</th>
    <th>DataTypesDataType</th>
</>

export default AttributeHeaders
