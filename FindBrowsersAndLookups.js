import fs from "fs"
import glob from "glob"

const find = what => {
    let files = glob.sync(`./src/**/${what}.jsx`)
    let content = `import { ${what}Context } from "Contexts"
    import { Text } from "${what === "Field" ? "Form" : "List"}"
    `
    files.map(i => {
        const pathParts = i.split("/")
        const part = pathParts[2]
        if (part === "Components") {
            return
        }
        let type = "";
        if (pathParts.includes("Admin") || pathParts.includes("Common")) {
            type = pathParts[4]
        }
        else {
            type = pathParts[3]
        }
        if (type === "Entity") {
            return
        }
        content += `import ${part}${type}${what} from "${i.replace("/src", "")}"\n`
    })
    content += `
const ${what}BrowsersAndLookups = ({
        type,
        part,
    }) => {

    if (part === "" || type === "") {
        return null
    }

    let component = <Text
        placeholder="InfraEntity"
        property="Entity"
    />
    `

    for (let i = 0; i < files.length; i++) {
        const browserFile = files[i]
        const pathParts = browserFile.split("/")
        const part = pathParts[2]
        if (part === "Components") {
            continue
        }
        let type = "";
        if (pathParts.includes("Admin") || pathParts.includes("Common")) {
            type = pathParts[4]
        }
        else {
            type = pathParts[3]
        }
        if (type === "Entity") {
            continue
        }
        content += `
    ${i === 0 ? "if" : "else if"} (part === "${part}" && (type === "${type}" || type === "${part}${type}")) {
        component = <${what}Context.Provider
            value={{
                type: "${type}",
                forGranularSelection: true,
                part: "${part}",
                property: "Entity",
            }}
        >
            <${part}${type}${what} />
        </${what}Context.Provider>
    }`
    }
    content += `
    return component
}

export default ${what}BrowsersAndLookups
    `

    fs.writeFileSync(`./src/${what}BrowsersAndLookups.jsx`, content)
}

const findBrowsersAndLookups = () => {
    find("Field")
    find("Filter")
}

export default findBrowsersAndLookups
