import Holism from "./Holism"

const originalStorage = {}
const transformedStorage = {}

const Enums = {
    setEnum: (...params) => {
        if (window.settings?.NodeApi) {
            const [part, type, items] = params
            const camelizedPart = Holism.camelize(part)
            const camelizedType = Holism.camelize(type)
            originalStorage[camelizedPart] = {}
            transformedStorage[camelizedPart] = {}
            originalStorage[camelizedPart][camelizedType] = items
            transformedStorage[camelizedPart][camelizedType] = {}
            items.map(item => {
                transformedStorage[camelizedPart][camelizedType][item.id] = item.id
            })
        }
        else {
            const [entityType, items] = params
            const key = Holism.camelize(entityType)
            originalStorage[key] = items
            transformedStorage[key] = {}
            items.map(entity => {
                transformedStorage[key][Holism.camelize(entity.key)] = entity.id
            })
        }
    },
    getEnum: (...params) => {
        if (window.settings?.NodeApi) {
            const [part, type] = params
            const camelizedPart = Holism.camelize(part)
            const camelizedType = Holism.camelize(type)
            return originalStorage[camelizedPart]?.[camelizedType]
        }
        else {
            const [entityType] = params
            const key = Holism.camelize(entityType)
            return originalStorage[key]
        }
    },
    getEnums: () => {
        if (window.settings?.NodeApi) {
            return transformedStorage
        }
        else {
            return transformedStorage
        }
    }
}

export default Enums
