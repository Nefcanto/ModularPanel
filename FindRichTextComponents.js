import fs from "fs"
import glob from "glob"

const findRichTextComponents = () => {
    const searchPath = "./src/**/*RichText.jsx"
    const richTextComponentFiles = glob.sync(searchPath)
    let richTextComponentsContent = ""
    richTextComponentFiles.map(i => {
        const content = fs.readFileSync(i).toString()
        const result = /export\s+default\s+(\w+)/.exec(content)
        if (result) {
            const componentName = result[1]
            const path = i.replace("./src", ".").replace(".jsx", "")
            richTextComponentsContent += `import ${componentName} from "${path}";\n`
            richTextComponentsContent += `export { ${componentName} };\n`
            richTextComponentsContent += `\n`
        }
    })

    fs.writeFileSync("./src/RichTextComponents.jsx", richTextComponentsContent)
}

export default findRichTextComponents
