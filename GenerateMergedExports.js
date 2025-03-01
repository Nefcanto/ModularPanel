import fs from "fs"
import { execSync } from "child_process"

const generateMergedExports = () => {

    const command = `find -mindepth 4 -maxdepth 4 -type f -name Exports.jsx -not -path "*/Components/*"  | sort`
    const result = execSync(command, { encoding: 'utf8' })
    const lines = result.trim().split('\n');
    const groupedPaths = lines.reduce((acc, line) => {
        const parts = line.split('/');
        const moduleName = parts[2];
        if (!acc[moduleName]) {
            acc[moduleName] = [];
        }
        acc[moduleName].push(line);
        return acc;
    }, {});

    for (const [module, paths] of Object.entries(groupedPaths)) {
        let mergedExports = "";
        paths.forEach(path => {
            const relativePath = path.replace(`src/${module}/`, "")
            mergedExports += `export * from "${relativePath}"\n`
        })
        fs.writeFileSync(`./src/${module}/Exports.jsx`, mergedExports)
    }
}

export default generateMergedExports
