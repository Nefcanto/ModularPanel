import HtmlIcon from "@mui/icons-material/Html"
import DoneIcon from "@mui/icons-material/Done"
import {
    useRef,
    useState,
} from "react"
import { Transforms } from "slate"
import { useEditor } from "slate-react"
import isBlockActive from "./IsBlockActive"
import usePopup from "./UsePopup"
import Button from "./Button"
import HolismIcon from "../../../HolismIcon"

const AddRawHtml = () => {

    const editor = useEditor()
    const linkInputRef = useRef(null)
    const [showInput, setShowInput] = usePopup(linkInputRef)
    const [htmlContent, setHtmlContent] = useState("")
    const [selection, setSelection] = useState()

    const insertHtmlHandler = () => {

        const componentNode = {
            type: "raw-html",
            content: htmlContent,
            children: [{ text: "" }]
        }
        if (htmlContent) {

            Transforms.insertNodes(editor, componentNode)
            setShowInput(prev => !prev)
            setHtmlContent("")
        }
    }
    const handleHtmlContent = ({ target }) => {
        setHtmlContent(target.value)
    }
    const toggleLink = () => {
        setSelection(editor.selection)
        setShowInput(prev => !prev)
    }

    return (
        <div
            ref={linkInputRef}
            className={`popup-wrapper inline relative w-fit`}
            title="Add HTML"
        >
            <Button
                className={showInput ? "text-slate-900" : "text-slate-200"}
                active={isBlockActive(editor, "raw-html")}
                format="raw-html"
                onClick={toggleLink}
            >
                <HolismIcon icon={HtmlIcon} />
            </Button>
            {
                showInput &&
                <div className="popup absolute z-20 bg-gray-200 top-12 start-0 translate-x-[-50%] rtl:translate-x-[50%] w-[400px] p-1 border text-sm rounded-xs py-4">
                    <div
                        className="flex gap-2 mx-1 my-2 justify-center"
                    >
                        <textarea
                            dir="ltr"
                            rows={10}
                            className="border h-full w-full p-2 dark:text-gray-700"
                            placeholder="Html Content"
                            value={htmlContent}
                            onChange={handleHtmlContent} />
                        <div
                            className="cursor-pointer"
                            onClick={insertHtmlHandler}
                        >
                            <HolismIcon
                                icon={DoneIcon}
                                className="fill-green-500 hover:bg-green-100 transition-all rounded-xs hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default AddRawHtml
