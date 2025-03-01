import { useContext } from "react"
import { url } from "App"
import { EntityContext } from "Contexts"
import { BooleanProperty } from "List"

const BooleanAvailabilityProperty = ({ considerAvailableAsFalse }) => {

    const { entity } = useContext(EntityContext)
    const value = entity.inventoryAvailabilityState
        ?
        considerAvailableAsFalse
            ?
            entity.inventoryAvailabilityState === "inStock" ? false : true
            :
            entity.inventoryAvailabilityState === "inStock" ? true : false
        :
        false
    const getActionUrl = value => url({
        path: considerAvailableAsFalse
            ?
            `/availability/${value === true ? "setAsOutOfStock" : "setAsAvailable"}`
            :
            `/availability/${value === true ? "setAsAvailable" : "setAsOutOfStock"}`,
        relatedEntity: entity
    })

    return <BooleanProperty
        actionUrl={getActionUrl}
        reloadEntityOnSuccess
        value={value}
    />
}

export default BooleanAvailabilityProperty
