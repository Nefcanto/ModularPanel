import { useContext } from "react"
import {
    EntityContext,
    ListContext,
} from "Contexts"
import {
    AmountOrPercent,
    CellForm,
    Hidden,
    Percent,
} from "Form"
import { MonetaryValueField } from "MonetaryValues"

const SetDiscountProperty = props => {

    const { entity } = useContext(EntityContext)
    const {
        isTable,
        reloadEntity,
    } = useContext(ListContext)

    const monetaryValue = <>
        <MonetaryValueField
            property="Quantity"
            entity={entity.relatedItems.discount}
        />
    </>

    const percent = <>
        <Percent
            placeholder="InfraPercent"
            property="Percentage"
            required
        />
    </>

    const inputs = <>
        <Hidden
            property="Id"
            value={entity.discountId}
        />
        <Hidden
            property="Module"
            value={entity.relatedItems.module}
        />
        <Hidden
            property="EntityType"
            value={entity.relatedItems.entityType}
        />
        <Hidden
            property="Entity"
            value={entity.guid}
        />
        <AmountOrPercent
            amountControl={monetaryValue}
            percentControl={percent}
            property="IsPercentage"
        />
    </>

    const extraProps = {}
    if (entity.discountId) {
        extraProps.submitTo = "/discount/update"
    }

    let jsx = <div className="flex items-top gap-4 justify-end">
        <CellForm
            entityType="Discount"
            inputs={inputs}
            onCompleted={() => reloadEntity(entity)}
            row
            entity={entity.relatedItems.discount}
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

export default SetDiscountProperty
