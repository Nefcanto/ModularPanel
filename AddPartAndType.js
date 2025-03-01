import { transform } from "@babel/core"
import jsx from "@babel/plugin-syntax-jsx"

export default function addPartAndType() {
    return {
        name: "addPartAndType",
        enforce: "pre",
        transform(code, id) {
            if (shouldIgnoreFile(id)) return null
            if (!isTargetFile(id)) return null
            return transformCode(code, id)
        },
    }
}

function shouldIgnoreFile(id) {
    return id.includes("node_modules") || id.includes("/Components/")
}

function isTargetFile(id) {
    return ["Form.jsx", "List.jsx", "Filter.jsx", "Field.jsx"].some((suffix) => id.endsWith(suffix))
}

function transformCode(code, id) {
    const result = transform(code, {
        plugins: [
            [jsx],
            createBabelPlugin(id),
        ],
    })
    return { code: result.code, map: null }
}

function createBabelPlugin(id) {
    return function ({ types: t }) {
        return {
            visitor: {
                JSXOpeningElement(path) {
                    addAttributes(path, id, t)
                },
            },
        }
    }
}

function addAttributes(path, id, t) {
    const hasPart = path.node.attributes.some(attr => attr.name && attr.name.name === "part")
    if (!hasPart) {
        path.node.attributes.push(
            t.jsxAttribute(t.jsxIdentifier("part"), t.stringLiteral(id.split("/")[4]))
        )
    }
    const hasType = path.node.attributes.some(attr => attr.name && attr.name.name === "type")
    if (!hasType) {
        path.node.attributes.push(
            t.jsxAttribute(t.jsxIdentifier("type"), t.stringLiteral(id.split("/")[6]))
        )
    }
}
