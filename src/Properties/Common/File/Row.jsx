import PropertyRow from '../Property/Row'

const Row = entity => {

    const propertyRowCommon = PropertyRow(entity)

    return <>
        {propertyRowCommon.props.children}
        <td>{entity.contactsPersonDisplayName}</td>
    </>
}

export default Row

