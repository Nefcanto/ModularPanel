const parseKey = key => {

    if (!key) {
        return {}
    }
    const parts = key.split("_")
    const tenant = parts[0]
    const locale = parts[1]
    const module = parts[2]
    const entityType = parts[3]
    const entity = parts[4]
    const hasParent = key.includes("_parent_")
    const hasHetero = !hasParent && key.includes("_hetero_")
    let parent = {}
    let hetero = {}
    if (hasParent) {
        parent = parseKey(key.split("_parent_")[1])
    }
    if (hasHetero) {
        const heteroSection = key.split("_hetero_")[1]
        if (heteroSection === "system") {
            hetero.granularity = "system"
        }
        else {
            const heteroParts = heteroSection.split("_")
            if (heteroParts.length === 1) {
                hetero.granularity = "module"
                hetero.module = heteroParts[0]
            }
            else if (heteroParts.length === 2) {
                hetero.granularity = "entityType"
                hetero.module = heteroParts[0]
                hetero.entityType = heteroParts[1]
            }
            else {
                hetero.granularity = "entity"
                hetero.module = heteroParts[0]
                hetero.entityType = heteroParts[1]
                hetero.entity = heteroParts[2]
            }
        }
    }
    return {
        entity,
        entityType,
        hasHetero,
        hasParent,
        hetero,
        locale,
        module,
        parent,
        tenant,
    }
}

export default parseKey
