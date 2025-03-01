import { get } from "App"

const initialize = () => {

    const defaultValue = window.settings.DefaultContentPolicy && window.settings.DefaultContentPolicy === false ? false : true

    get("/contentPolicies/data")
        .then(data => {
            window.contentPolicies = data
        }, e => {
            console.error(e)
        })

    window.checkContentPolicy = ({
        entityGuid,
        entityType,
        key,
        module,
    }) => {
        let value = defaultValue
        const contentPolicies = window.contentPolicies || {}
        value = (
            contentPolicies.system &&
            contentPolicies.system[key] !== undefined
        )
            ?
            contentPolicies.system[key]
            :
            value
        if (module) {
            value = (
                contentPolicies.modules &&
                contentPolicies.modules[module] &&
                contentPolicies.modules[module][key] !== undefined
            )
                ?
                contentPolicies.modules[module][key]
                :
                value

            if (entityType) {
                value = (
                    contentPolicies.modules[module] &&
                    contentPolicies.modules[module].entityTypes &&
                    contentPolicies.modules[module].entityTypes[entityType] &&
                    contentPolicies.modules[module].entityTypes[entityType][key] !== undefined
                )
                    ?
                    contentPolicies[module].entityTypes[entityType][key]
                    :
                    value

                if (entityGuid) {
                    value = (
                        contentPolicies.modules[module] &&
                        contentPolicies.modules[module].entityTypes &&
                        contentPolicies.modules[module].entityTypes[entityType] &&
                        contentPolicies.modules[module].entityTypes[entityType].entities &&
                        contentPolicies.modules[module].entityTypes[entityType].entities[entityGuid] &&
                        contentPolicies.modules[module].entityTypes[entityType].entities[entityGuid][key] !== undefined
                    )
                        ?
                        contentPolicies[module].entityTypes[entityType].entities[entityGuid][key]
                        :
                        value
                }
            }
        }
        // if (key === "bold") {
        //     console.table({
        //         [key]: {
        //             module,
        //             entityType,
        //             entityGuid,
        //             value,
        //         }
        //     })
        // }
        return value
    }
}

export default initialize
