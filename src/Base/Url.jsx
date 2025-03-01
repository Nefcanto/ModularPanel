import filterOperator from "./FilterOperator"
import camelize from "./Camelize"
import kebabize from "./Kebabize"

const Url = {
    parseQuery: () => {
        let params = new URLSearchParams(window.location.search)
        let result = {}
        params.forEach((value, key) => result[key] = decodeURIComponent(value))
        return result
    },
    parseGranularityFromQuery: () => {
        let {
            entity,
            entityType,
            hetero,
            module,
        } = Url.parseQuery()
        if (entity?.includes("_")) {
            module = entity.split("_")[2]
            entityType = entity.split("_")[3]
        }
        const granularity = {
            entity,
            entityType,
            module,
        }
        if (hetero) {
            granularity.hetero = JSON.parse(hetero)
        }
        return granularity
    },
    parseQueryAsArray: () => {
        let params = new URLSearchParams(window.location.search)
        let result = []
        params.forEach((value, key) => result.push({
            key,
            value
        }))
        return result
    },
    hasQuery: key => {
        if (!key) {
            return false
        }
        key = key.toLowerCase()
        let params = new URLSearchParams(window.location.search)
        let has = false
        params.forEach((value, queryKey) => {
            if (queryKey.toLowerCase() === key) {
                has = true
                return
            }
        })
        return has
    },
    getUrlParameter: key => {
        if (!key) {
            return
        }
        key = key.toLowerCase()
        let params = new URLSearchParams(window.location.search)
        let result = undefined
        params.forEach((value, queryKey) => {
            if (queryKey.toLowerCase() === key) {
                result = value
                return
            }
        })
        return result
    },
    setQueryString: (key, value) => {
        const url = new URL(window.location)
        url.searchParams.set(key, value)
        url.searchParams.sort()
        window.history.replaceState(null, "", url.toString())
    },
    removeQuery: key => {
        const url = new URL(window.location)
        url.searchParams.delete(key)
        url.searchParams.sort()
        window.history.replaceState(null, "", url.toString())
    },
    ensurePropertyIsCamelCased: property => {
        const camelized = camelize(property)
        if (property !== camelized) {
            // throw `Property ${property} is not camelized. Convert it to ${camelized}`
        }
    },
    appendQueryToApiUrl: url => {
        if (window.location.search) {
            const query = new URLSearchParams(window.location.search)
            query.delete("returnTo")
            query.delete("parentId")
            if (url.indexOf("?") > -1) {
                url += "&"
            }
            else {
                url += "?"
            }
            url += query.toString()
        }
        return url
    },
    equalTo: (property, value) => {
        Url.ensurePropertyIsCamelCased(property)
        const filter = `${property}=${filterOperator.equalTo}_${value}`
        return filter
    },
    containing: (property, value, isCsv = false) => {
        Url.ensurePropertyIsCamelCased(property)
        let filter = `${property}=${filterOperator.containing}_${value}`
        if (isCsv) {
            filter = `${property}=${filterOperator.containing}_,${value},`
        }
        return filter
    },
    notContaining: (property, value, isCsv = false) => {
        Url.ensurePropertyIsCamelCased(property)
        let filter = `${property}=${filterOperator.notContaining}_${value}`
        if (isCsv) {
            filter = `${property}=${filterOperator.notContaining}_,${value},`
        }
        return filter
    },
    url: ({
        extractGranularityFromQuery,
        filters,
        grandparent,
        granularAssignment,
        granularity,
        granularityExtractionEntity,
        greatGrandParent,
        greatGreatGrandParent,
        hetero,
        ignoreStoredListParameters,
        parent,
        path,
        query,
        relatedEntity,
    }) => {
        const params = new URLSearchParams(filters?.join("&"))
        if (query) {
            for (const [key, value] of Object.entries(query)) {
                if (value) {
                    params.append(key, value)
                }
            }
        }
        if (parent) {
            params.set("pet", parent.relatedItems?.entityType)
            params.set("pm", parent.relatedItems?.module)
            params.set("pid", parent.id)
        }
        if (grandparent) {
            params.set("gpet", grandparent.relatedItems?.entityType)
            params.set("gpm", grandparent.relatedItems?.module)
            params.set("gpid", grandparent.id)
        }
        if (greatGrandParent) {
            params.set("ggpet", greatGrandParent.relatedItems?.entityType)
            params.set("ggpm", greatGrandParent.relatedItems?.module)
            params.set("ggpid", greatGrandParent.id)
        }
        if (greatGreatGrandParent) {
            params.set("gggpet", greatGreatGrandParent.relatedItems?.entityType)
            params.set("gggpm", greatGreatGrandParent.relatedItems?.module)
            params.set("gggpid", greatGreatGrandParent.id)
        }
        if (relatedEntity) {
            params.set("module", relatedEntity.relatedItems?.module)
            params.set("entityType", relatedEntity.relatedItems?.entityType)
            params.set("entity", relatedEntity.guid || relatedEntity.key)
        }
        if (granularity) {
            params.set("fixedGranularity", true)
            params.set("granularity", granularity)
            if (granularAssignment) {
                params.set("granularAssignment", true)
            }
            if (hetero) {
                if (Array.isArray(hetero)) {
                    const filteredHetero = hetero.filter(i => i)
                    params.set("hetero", JSON.stringify(filteredHetero))

                }
                else {
                    params.set("module", hetero.module)
                    params.set("entityType", hetero.entityType)
                    params.set("entity", hetero.entity)
                }
                const module = granularityExtractionEntity.module || granularityExtractionEntity.relatedItems?.module
                if (module) {
                    params.set("module", module)
                }
                const entityType = granularityExtractionEntity.entityType || granularityExtractionEntity.relatedItems?.entityType
                if (entityType) {
                    params.set("entityType", entityType)
                }
                const entity = granularityExtractionEntity.entity || granularityExtractionEntity.key || granularityExtractionEntity.guid
                if (entity) {
                    params.set("entity", entity)
                }
            }
            else if (extractGranularityFromQuery) {
                const {
                    module,
                    entityType,
                    entity,
                } = Url.parseGranularityFromQuery()
                if (module) {
                    params.set("module", module)
                }
                if (entityType) {
                    params.set("entityType", entityType)
                }
                if (entity) {
                    params.set("entity", entity)
                }
            }
            else {
                const module = granularityExtractionEntity.relatedItems?.module || granularityExtractionEntity.module
                if (module) {
                    params.set("module", module)
                }
                const entityType = granularityExtractionEntity.relatedItems?.entityType || granularityExtractionEntity.entityType
                if (entityType) {
                    params.set("entityType", entityType)
                }
                const entity = granularityExtractionEntity.key || granularityExtractionEntity.guid || granularityExtractionEntity.entity
                if (entity) {
                    params.set("entity", entity)
                }
            }
        }
        if (params.size === 0) {
            return path
        }
        if (ignoreStoredListParameters) {
            params.set("ignoreStoredListParameters", true)
        }
        params.sort()
        const finalUrl = `${path}?${params.toString()}`
        return finalUrl
    }
}

export default Url
