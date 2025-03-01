const useModules = () => {

    const getEntityTypes = module => {
        return []
    }

    const isRelatedToModule = ({
        module,
        query,
    }) => {
        if (query.module?.toLowerCase() === module.toLowerCase()) {
            return true
        }
        const entityTypes = getEntityTypes(module)
        if (query.entityType) {
            const match = entityTypes.find(i => query.entityType.toLower() === i.toLowerCase())
            if (match) {
                return true
            }
        }
        return false
    }

    return {
        getEntityTypes,
        isRelatedToModule,
    }
}

export default useModules
