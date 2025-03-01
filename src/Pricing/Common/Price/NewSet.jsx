import { useContext } from "react"
import {
    EntityContext,
    ListContext,
} from "Contexts"
import {
    CellForm,
    Hidden,
} from "Form"
import { MonetaryValueField } from "MonetaryValues"

const NewSetPriceProperty = props => {

    const { entity } = useContext(EntityContext)
    const {
        isTable,
        reloadEntity,
    } = useContext(ListContext)

    const inputs = <>
        <Hidden
            property="Id"
            value={entity.pricingPriceId}
        />
        <Hidden
            property="Entity"
            value={entity.guid}
        />
        <Hidden
            property="Module"
            value={entity.relatedItems.module}
        />
        <Hidden
            property="EntityType"
            value={entity.relatedItems.entityType}
        />
        <MonetaryValueField
            entity={entity}
            property="Quantity"
        />
    </>

    const extraProps = {}
    if (entity.pricingPriceId) {
        extraProps.submitTo = "/newPrice/update"
    }

    let jsx = <div className="flex items-top gap-4 justify-end">
        <CellForm
            entityType="Price"
            inputs={inputs}
            onCompleted={() => reloadEntity(entity)}
            row
            {...extraProps}
        />
    </div>

    if (isTable) {
        jsx = <td
            {...props}
            width="50%"
        >
            {jsx}
        </td>
    }

    return jsx
}

export default NewSetPriceProperty
