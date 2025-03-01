import fs from "fs"
import glob from "glob"

const findClientInitializers = () => {

    let initializationFiles = glob.sync("./src/**/ClientInitializer.jsx")
    let initializationContent = ""
    initializationFiles.map(i => {
        const parts = i.split("/")
        const module = parts[2]
        if (module === "Components" || module === "ClientInitializer.jsx") {
            return
        }
        initializationContent += `import initialize${module} from "${i.replace("/src", "")}"\n`
        initializationContent += `export { initialize${module} }\n`
    })
    fs.writeFileSync("./src/ClientInitializer.jsx", initializationContent)
}

export default findClientInitializers
