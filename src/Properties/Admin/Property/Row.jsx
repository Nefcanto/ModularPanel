import { EnumProperty } from "List"
import {
    PropertyRow,
    styleProvider,
} from "PropertiesCommon"

const Row = entity => {

    const propertyRowCommon = PropertyRow(entity)

    return <>
        {propertyRowCommon.props.children}
        <EnumProperty
            actionUrl={`/property/changeState/${entity.id}`}
            currentKey={entity.propertyState}
            currentKeyTranslation={entity.relatedItems.stateKeyTranslation}
            currentStyle={styleProvider(entity.propertyState)}
            enumeration="PropertyState"
            property="PropertyState"
            styleProvider={styleProvider}
        />
        <td>{entity.contactsPersonDisplayName}</td>
        <td>{entity.relatedItems.hasVisitCounts ? entity.relatedItems.visitCounts[0].count : 0}</td>
        {globalThis.settings.PropertiesPhoneClickCount && <td>{entity.relatedItems?.clickCount}</td>}
    </>
}

export default Row
