import { execSync } from "child_process"

const findParts = () => {
    const command = `
        find . -mindepth 3 -maxdepth 3 -name Exports.jsx \
        -path "*/src/*" \
        -not -path "*/src/Components/*" \
        -not -path "*/src/Base/*" \
        -not -path "*/src/Panel/*" \
        -not -path "*/src/Contexts/*" \
        -not -path "*/src/Hooks/*" \
        | sort`
    try {
        const stdout = execSync(command).toString()
        const exportPaths = stdout.split("\n").filter(Boolean)
        const modules = []
        exportPaths.forEach(path => {
            path = path.split("src/")[1].replace("/Exports.jsx", "")
            modules.push({
                name: path.split("/")[0],
                role: path.split("/")[1],
            })
        })
        return modules
    } catch (error) {
        console.error("Error:", error)
    }
}

export default findParts
