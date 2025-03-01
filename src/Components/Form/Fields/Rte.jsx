import {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react"
import { createEditor } from "slate"
import {
    Editable,
    Slate,
    withReact,
} from "slate-react"
import { withHistory } from "slate-history"
import isHotkey from "is-hotkey"
import app, { t } from "App"
import { FormContext } from "Contexts"
import { useLocalStorage } from "Hooks"
import { useField } from "Hooks"
import HotKeys from "../../Form/Fields/Rte/HotKeys"
// import toggleMark from "./Rte/ToggleMark"
import withLinks from "../../Form/Fields/Rte/WithLinks"
import ComplexToolbar from "../../Form/Fields/Rte/ComplexToolbar"
import SimpleToolbar from "../../Form/Fields/Rte/SimpleToolbar"
import SlateElement from "../../Form/Fields/Rte/Element"
import Leaf from "../../Form/Fields/Rte/Leaf"

const Rte = ({
    placeholder,
    property,
    simple,
    ...rest
}) => {
    const defaultValue = [
        {
            type: "paragraph",
            children: [{ text: "" }],
        },
    ]
    const localStorageKey = `${window?.location.pathname.replaceAll("/", "")}_${app.camelize(property)}_rte`
    // const [initialLocalStorageValue] = useLocalStorage({
    //     defaultValue,
    //     initialValue: defaultValue,
    //     key: localStorageKey
    // })
    // const [currentValue, setCurrentValue] = useLocalStorage({
    //     defaultValue,
    //     initialValue: defaultValue,
    //     key: localStorageKey
    // })
    const [currentValue, setCurrentValue] = useState(defaultValue)
    const renderElement = useCallback(props => <SlateElement {...props} />, [])
    const renderLeaf = useCallback(props => <Leaf {...props} />, [])
    const editor = useMemo(() => withHistory(withReact(withLinks(createEditor()))), [])
    editor.children = currentValue
    const { currentEntity } = useContext(FormContext)

    const isApiJsonValid = apiJson => Array.isArray(apiJson) && apiJson.length > 0

    const field = useField({
        placeholder,
        property,
        type: "Rte",
        ...rest
    })
    const {
        isDirty,
        setChosenValue,
        setIsDirty,
    } = field

    useEffect(() => {
        if (currentEntity) {

            let value = currentEntity[app.camelize(property)]

            if (!value) {
                value = currentEntity["relatedItems"][app.camelize(property)]
            }
            const apiJson = JSON.parse(value)
            if (isApiJsonValid(apiJson)) {
                setCurrentValue(apiJson)
            }
        }
    }, [property, currentEntity])

    useEffect(() => {
        const json = JSON.stringify(currentValue)
        app.rteJson = json
        if (!isDirty) {
            setIsDirty(true)
        }
        setChosenValue(app.rteJson)
    }, [currentValue])

    return <div className="mb-12 pb-12 border-b-2">
        <Slate
            editor={editor}
            initialValue={currentValue}
            onChange={val => setCurrentValue(val)}
        >
            {
                simple
                    ?
                    <SimpleToolbar editor={editor} />
                    :
                    <ComplexToolbar
                        editor={editor}
                        {...rest}
                    />
            }
            <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                placeholder={t(placeholder || "Write your content here ...")}
                spellCheck
                className="prose md:prose-lg lg:prose-xl xl:prose-2xl max-w-none dark:text-gray-200 outline-hidden"
                autoFocus
            // onKeyDown={event => {
            //     for (const hotkey in HotKeys) {
            //         console.log("ishotkey", isHotkey(hotkey, event))
            //         if (isHotkey(hotkey, event)) {
            //             event.preventDefault()
            //             const mark = HotKeys[hotkey]
            //             toggleMark(editor, mark)
            //         }
            //     }
            // }}
            />
        </Slate>
    </div>
}

export default Rte
