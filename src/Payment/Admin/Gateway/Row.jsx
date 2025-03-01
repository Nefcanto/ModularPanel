import {
    BooleanProperty,
    Image,
} from "List"

const Row = entity => <>
    <Image />
    <td>{entity.title}</td>
    <BooleanProperty
        actionUrl={`/gateway/toggleBoolean?id=${entity.id}&property=IsActive`}
        value={entity.isActive}
    />
    <BooleanProperty
        actionUrl={`/gateway/setAsDefault?id=${entity.id}`}
        reloadListOnSuccess
        value={entity.isDefault}
    />
</>

export default Row
