import { useContext } from "react"
import { EntityContext } from "Contexts"
import { BooleanProperty } from "List"

const Intangible = () => {

    const { entity } = useContext(EntityContext)
    const idProduct = entity.productsProductId ?? entity.id
    const isReload = entity.relatedItems.entityType != "Product"

    return <BooleanProperty
        actionUrl={`/product/toggleBoolean?id=${idProduct}&property=Intangible`}
        reloadListOnSuccess={isReload}
        value={entity.intangible}
    />
}

export default Intangible
