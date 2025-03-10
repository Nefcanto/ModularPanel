import {
    Editor,
    Element as SlateElement,
} from "slate"

const isBlockActive = (editor, format) => {
    const { selection } = editor
    if (!selection) return false

    const [match] = Array.from(
        Editor.nodes(editor, {
            at: Editor.unhangRange(editor, selection),
            match: n =>
                !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
        })
    )

    return !!match
}

export default isBlockActive
