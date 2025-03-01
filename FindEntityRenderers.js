import fs from "fs"
import glob from "glob"

const findEntityRenderers = () => {
    let entityRendererFiles = glob.sync("./src/**/Entity.jsx")
    let entityRenderersContent = ""
    entityRendererFiles.map(i => {
        const parts = i.split("/")
        const module = parts[2]
        if (module === "Components") {
            return
        }
        let entityType = "";
        if (parts.includes("Admin") || parts.includes("Common")) {
            entityType = parts[4]
        }
        else {
            entityType = parts[3]
        }
        if (entityType === "Entity") {
            return
        }
        entityRenderersContent += `import ${module}${entityType} from "${i.replace("/src", "")}"\n`
    })
    entityRenderersContent += `
const EntityRenderers = ({
    entity,
    entityType,
    fallback,
    module,
}) => {

    let Renderer = () => fallback || (
        typeof entity === "string" && entity.toLowerCase() === "system"
        ?
        <div>System</div>
        :
        <div>NoRendererFor{module}{entityType}</div>
    )
    const moduleEntityType = module + entityType
    switch (moduleEntityType)
    {`
    entityRendererFiles.map(i => {
        const parts = i.split("/")
        const module = parts[2]
        if (module === "Components") {
            return
        }
        let entityType = "";
        if (parts.includes("Admin") || parts.includes("Common")) {
            entityType = parts[4]
        }
        else {
            entityType = parts[3]
        }
        if (entityType === "Entity") {
            return
        }
        entityRenderersContent += `
        case "${module}${entityType}":
        case "${module}${module}${entityType}":
            Renderer = ${module}${entityType}
            break`
    })
    entityRenderersContent += `
    }

    return <Renderer entity={entity} />
}

export default EntityRenderers
    `

    fs.writeFileSync("./src/EntityRenderers.jsx", entityRenderersContent)
}

export default findEntityRenderers
