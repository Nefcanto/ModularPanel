const useParts = () => {

    const getTypes = part => {
        return []
    }

    const isRelatedToPart = ({
        part,
        query,
    }) => {
        if (query.part?.toLowerCase() === part.toLowerCase()) {
            return true
        }
        const types = getTypes(part)
        if (query.type) {
            const match = types.find(i => query.type.toLower() === i.toLowerCase())
            if (match) {
                return true
            }
        }
        return false
    }

    return {
        getTypes,
        isRelatedToPart,
    }
}

export default useParts
