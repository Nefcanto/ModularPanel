import fs from "fs"

const findDependencies = modules => {
    let content = ""
    modules.forEach(module => {
        if (module.role === "Common") {
            return
        }
        content += `
import * as ${module.name} from "./${module.name}${module.role ? "/" + module.role : ""}/Exports.jsx"
export { ${module.name} }
        `
    })
    content += `
    const dependencies = ["${modules.filter(i => i.role !== "Common").map(i => i.name).join(`","`)}"]
    export { dependencies }
    `
    fs.writeFileSync("./src/Dependencies.jsx", content);
}

export default findDependencies
