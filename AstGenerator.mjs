import esprima from "nightly-esprima"
import fs from "fs"
import path from "path"

try {
    var file = process.argv[2]
    var repo = process.env.Repository;
    var app = process.env.App;
    var code = fs.readFileSync(file, {
        encoding: "utf8",
        flag: "r"
    });
    code = code.replaceAll("<>", "<Fragment>")
    code = code.replaceAll("</>", "</Fragment>")
    var ast = esprima.parseModule(code, { "jsx": true })
    var tokens = esprima.tokenize(code, { "jsx": true })
    var astFile = file.replace(`/${repo}`, "")
        .replace(`/${app}`, "")
        .replace("/src", "")
        .replace("/routes", "")
        .replace("/Components", "")
        .replace("./", "/")
        .replace(".jsx", ".json")
    var astFile = `/Temp/${repo}/${app}/Ast${astFile}`
    var tokenFile = `${astFile}.tokens`
    var directory = path.dirname(astFile)
    fs.mkdirSync(directory, { recursive: true });
    fs.writeFileSync(astFile, JSON.stringify(ast));
    console.log(astFile)
} catch (e) {
    console.error(e)
}
