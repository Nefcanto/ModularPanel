import app, {
    get,
    url,
} from "App"

const useEntitySettings = () => {

    const getSetting = (entity, setting) => {
        if (!entity) {
            return ""
        }
        if (!entity.relatedItems) {
            return ""
        }
        if (!entity.relatedItems.hasEntitySettings) {
            return ""
        }
        const settings = entity.relatedItems.entitySettings
        const foundSetting = settings.find(i => i.key.toLowerCase().includes(setting.toLowerCase()))
        return foundSetting?.value
    }

    const getEntitySettings = async ({
        module,
        entityType,
        entity
    }) => {

        const link = url({
            path: "/entitySetting/all",
            query: {
                module: app.camelize(module),
                entityType: app.camelize(entityType),
                entity: entity
            }
        })

        return await get(link)

    }

    const getEntitySetting = async ({
        module,
        entityType,
        entity,
        key
    }) => {
        let query = {}
        if (app.isSomething(module)) {
            query.module = app.camelize(module)
        }
        if (app.isSomething(entityType)) {
            query.entityType = app.camelize(entityType)
        }
        if (app.isSomething(entity)) {
            query.entity = entity

        }
        query.key = key
        const link = url({
            path: "/entitySetting/getSetting",
            query
        })
        return await get(link)
    }

    return {
        getSetting,
        getEntitySettings,
        getEntitySetting
    }
}

export default useEntitySettings
