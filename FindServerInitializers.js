import glob from "glob"

let initializationFiles = glob.sync("./src/**/ServerInitializer.js")
for (let i = 0; i < initializationFiles.length; i++) {
    const file = initializationFiles[i]
    try {
        await import(file)
    } catch (error) {
        console.error(error)
    }
}
