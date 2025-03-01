import fs from "fs"
import glob from "glob"

const searchPath = "./src/**/QueryParametersAugmenter.jsx"
const queryParameterComponentFiles = glob.sync(searchPath)
let queryParameterComponentsContent = ""
queryParameterComponentFiles.map(i => {
    const content = fs.readFileSync(i).toString()
    const result = /export\s+default\s+(\w+)/.exec(content)
    if (result) {
        const componentName = result[1]
        const path = i.replace("./src", ".").replace(".jsx", "")
        const moduleName = i.split("/")[2]
        queryParameterComponentsContent += `import ${moduleName}${componentName} from "${path}";\n`
        queryParameterComponentsContent += `export { ${moduleName}${componentName} };\n`
        queryParameterComponentsContent += `\n`
    }
})
fs.writeFileSync("./src/QueryParameterAugmentComponents.jsx", queryParameterComponentsContent)
