import { resolve } from "path"

const findBundles = (parts) => {
    const bundles = {}
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i]
        const path = resolve(`${__dirname}/src/${part.name}/Exports.jsx`)
        const camelizedPart = part.name.charAt(0).toLowerCase() + part.name.slice(1)
        bundles[camelizedPart] = path
    }
    // console.log(bundles)
    return bundles
}

export default findBundles
