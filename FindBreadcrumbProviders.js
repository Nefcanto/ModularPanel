import fs from "fs"
import glob from "glob"

const findBreadcrumbProviders = () => {
    const breadcrumbProviderFiles = glob.sync("./src/**/UseBreadcrumb.jsx")
    let breadcrumbProvidersContent = ""
    breadcrumbProviderFiles.map(i => {
        const parts = i.split("/")
        const module = parts[2]
        breadcrumbProvidersContent += `import use${module}Breadcrumb from "${i.replace("/src", "")}"\n`
        breadcrumbProvidersContent += `export { use${module}Breadcrumb }\n`
    })

    fs.writeFileSync("./src/BreadcrumbProviders.jsx", breadcrumbProvidersContent)
}

export default findBreadcrumbProviders
