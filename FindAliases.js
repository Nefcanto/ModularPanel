import path from "path"
import fs from "fs"
import glob from "glob"

const findAliases = () => {

    const parts = []
    const aliases = {
        "App": "src/Base/Exports",
        "BreadcrumbProviders": "src/BreadcrumbProviders",
        "Browse": "src/Components/Browse/Exports",
        "FieldBrowsersAndLookups": "src/FieldBrowsersAndLookups.jsx",
        "FilterBrowsersAndLookups": "src/FilterBrowsersAndLookups.jsx",
        "CartRendererComponents": "src/CartRendererComponents.jsx",
        "ClientInitializers": "src/ClientInitializer.jsx",
        "Contexts": "src/Contexts/Exports",
        "Dashboard": "src/Components/Dashboard/Exports",
        "Dependencies": "src/Dependencies.jsx",
        "EntityRenderer": "src/Modules/Common/Entity/Renderer",
        "EntityRenderers": "src/EntityRenderers.jsx",
        "Fields": "src/Modules/Common/Entity/Field",
        "Filters": "src/Modules/Common/Entity/Filter",
        "Form": "src/Components/Form/Exports",
        "Hooks": "src/Hooks/Exports",
        "List": "src/Components/List/Exports",
        "Page": "src/Components/Page/Exports",
        "Panel": "src/Panel/Exports",
        "QueryParameterAugmentComponents": "src/QueryParameterAugmentComponents",
        "RichTextComponents": "src/RichTextComponents",
        "HeaderActionAugmenters": "src/HeaderActionAugmenters",
        "Tab": "src/Components/Tab/Exports",
        "Tree": "src/Components/Tree/Exports",
        "GranularityProperty": "src/Granularities/Common/Granularity/Property.jsx",
        "GranularityFilter": "src/Granularities/Common/Granularity/Filter.jsx",
        "GranularityField": "src/Granularities/Common/Granularity/Field.jsx"
    }

    try {
        const dirs = fs.readdirSync(path.resolve(__dirname, "src"))
        const baseDirs = ["Base", "Components", "Contexts", "Hooks", "Panel"]
        dirs.forEach(dir => {
            if (baseDirs.indexOf(dir) > -1) {
                return
            }
            if (dir === ".git" || dir === "favicons" || dir === "Branding") {
                return
            }
            if (!fs.lstatSync(path.resolve(__dirname, "src", dir)).isDirectory()) {
                return
            }
            const partBaseDirectory = path.resolve(__dirname, "src", dir)
            const commonExports = partBaseDirectory + "/Common/Exports.jsx"
            const mergedExports = partBaseDirectory + "/Exports.jsx"
            if (fs.existsSync(commonExports)) {
                const aliasPath = `src${commonExports.split("src")[1].replace(".jsx", "")}`
                aliases[`${dir}Common`] = aliasPath
            }
            if (fs.existsSync(mergedExports)) {
                parts.push(dir)
                const aliasPath = `src${mergedExports.split("src")[1].replace(".jsx", "")}`
                aliases[dir] = aliasPath
            }
            else {
                console.error(`${dir} does not have Exports.jsx`)
            }
        })
    } catch (error) {
        console.log(error)
    }

    const orderedAliases = Object.keys(aliases).sort().reduce(
        (obj, key) => {
            obj[key] = aliases[key]
            return obj
        },
        {}
    )

    console.log("Aliases: ", orderedAliases)
    console.log("Parts: ", parts)

    const resolvedAliases = Object.fromEntries(
        Object.entries(orderedAliases).map(([key, value]) => [key, path.resolve(__dirname, value)]),
    )
    return resolvedAliases
}

export default findAliases
