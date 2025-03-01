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

const SetStockQuantity = props => {

    const { entity } = useContext(EntityContext)
    const { stocks } = entity.relatedItems
    const {
        isTable,
        reloadEntity,
    } = useContext(ListContext)

    const inputs = (warehouse, stock) => <div>
        {
            stock &&
            <Hidden
                property="Id"
                value={stock.id}
            />
        }
        <Hidden
            property="Warehouse"
            value={warehouse.id.toString()}
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
            initialValue={stock?.quantity}
            placeholder="InventoryStock"
            property="Quantity"
            realNumbers
            required
        />
    </div>

    let jsx = <>
        {
            window.warehouses?.map(warehouse => {

                const stock = stocks?.find(i => i.warehouse === warehouse.id.toString())

                const extraProps = {}
                if (stock) {
                    extraProps.submitTo = "/stock/updateQuantity"
                }

                return <div
                    className="flex items-top gap-4 justify-end"
                    key={warehouse.id}
                >
                    <div>{warehouse.title}</div>
                    <div>{stock?.quantity?.digitGroup()}</div>
                    <CellForm
                        entityType="Stock"
                        inputs={inputs(warehouse, stock)}
                        onCompleted={() => reloadEntity(entity)}
                        row
                        {...extraProps}
                    />
                </div>
            })
        }
    </>

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

export default SetStockQuantity
