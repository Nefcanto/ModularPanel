import { useContext } from "react"
import {
    EntityContext,
    ListContext,
} from "Contexts"
import {
    CellForm,
    Hidden,
    Numeric,
} from "Form"
import price from "./Price"

const SetPriceProperty = props => {

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
        <Numeric
            initialValue={entity.pricingPriceAmount}
            placeholder="PricingPrice"
            property="Amount"
            realNumbers
            required
        />
    </>

    const extraProps = {}
    if (entity.pricingPriceId) {
        extraProps.submitTo = "/price/updateAmount"
    }

    let jsx = <div className="flex items-top gap-4 justify-end">
        {price(entity)}
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

export default SetPriceProperty
