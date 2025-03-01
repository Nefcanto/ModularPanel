import InsertLinkIcon from "@mui/icons-material/InsertLink"
import {
    useRef,
    useState,
} from "react"
import { Transforms } from "slate"
import { t } from "App"
import { DialogContext } from "Contexts"
import insertLink from "./InsertLink"
import isBlockActive from "./IsBlockActive"
import Button from "./Button"
import HolismIcon from "../../../HolismIcon"
import Dialog from "../../../Dialog/Dialog"
import OkCancel from "../../../Dialog/OkCancel"

const LinkButton = (props) => {
    const { editor, title } = props
    const linkInputRef = useRef(null)
    const [showInput, setShowInput] = useState(false)
    const [url, setUrl] = useState("")
    const [showInNewTab, setShowInNewTab] = useState(false)
    const [selection, setSelection] = useState()
    const [isDownload, setIsDownload] = useState(false)
    const handleInsertLink = () => {
        Transforms.select(editor, selection)
        insertLink(editor, { url, showInNewTab, isDownload })
        setUrl("")
        setShowInput(prev => !prev)
        setShowInNewTab(false)
    }
    const toggleLink = () => {
        setSelection(editor.selection)
        setShowInput(prev => !prev)
    }
    const handleInputChange = ({ target }) => {
        if (target.type === "checkbox") {
            setShowInNewTab(prev => !prev)
        }
        else {
            setUrl(target.value)
        }
    }
    const handleIsDownloadLink = () => {
        setIsDownload(prev => !prev)
    }
    return (
        <div
            ref={linkInputRef}
            className={`popup-wrapper inline relative w-fit`}
            title={title}
        >
            <Button
                className={showInput ? "text-slate-900" : "text-slate-200"}
                active={isBlockActive(editor, "link")}
                format="link"
                onClick={toggleLink}
            >
                <HolismIcon icon={InsertLinkIcon} />
            </Button>
            <DialogContext.Provider
                value={{
                    open: showInput,
                    setOpen: setShowInput,
                }}
            >
                <Dialog
                    title="add link"
                    tiny
                    onOpened={() => { document.querySelector("#linkAddress").focus() }}
                    content={<div className="mt-4">
                        <input
                            type="text"
                            id="linkAddress"
                            className="border px-1 dark:text-gray-800 outline-hidden py-1"
                            placeholder="https://google.com"
                            value={url}
                            onChange={handleInputChange} />
                        <div className="flex gap-x-3 gap-y-2 mt-4 flex-col">
                            <label
                                htmlFor="openNewTab"
                                className="flex gap-1 items-center">
                                <input
                                    type="checkbox"
                                    id="openNewTab"
                                    checked={showInNewTab}
                                    onChange={handleInputChange}
                                />
                                <span>{t("Open in new tab")}</span>
                            </label>
                            <label
                                htmlFor="downloadable"
                                className="flex gap-1 items-center"
                            >
                                <input
                                    type="checkbox"
                                    id="downloadable"
                                    checked={isDownload}
                                    onChange={handleIsDownloadLink} />
                                <span>{t("Downloadable")}</span>
                            </label>
                        </div>
                    </div>}
                    actions={<OkCancel
                        okText="add"
                        okClick={handleInsertLink}
                        cancelClick={toggleLink}
                    />}
                />
            </DialogContext.Provider>

        </div>
    )
}

export default LinkButton
