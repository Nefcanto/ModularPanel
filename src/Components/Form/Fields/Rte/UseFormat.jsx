import {
    useEffect,
    useState,
} from "react"
import {
    Editor,
    Element as SlateElement,
} from "slate"

const useFormat = (editor, format) => {
    const [isFormat, setIsFormat] = useState(false)
    useEffect(() => {
        if (editor.selection) {
            const [node] = Editor.nodes(editor, {
                match: n => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format
            })

            setIsFormat(!!node)
        }
        else {
            setIsFormat(false)
        }
    }, [editor.selection])

    return isFormat
}

export default useFormat
