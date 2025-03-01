import LinkOffIcon from "@mui/icons-material/LinkOff"
import Backdrop from "@mui/material/Backdrop"
import {
    useEffect,
    useState,
} from "react"
import { Transforms } from "slate"
import {
    ReactEditor,
    useFocused,
    useSelected,
    useSlateStatic,
} from "slate-react"
import { t } from "App"
import { DialogContext } from "Contexts"
import removeLink from "./RemoveLink"
import HolismIcon from "../../../HolismIcon"
import Dialog from "../../../Dialog/Dialog"

const Link = ({
    attributes,
    children,
    element,
}) => {
    const [href, setHref] = useState(element.href)
    const [showInNewTab, setShowInNewTab] = useState(element.target === "_blank")
    const [isDownload, setIsDownload] = useState(element.isDownload)
    const [isOpenEdit, setIsOpenEdit] = useState(false)
    const [isOpenAction, setIsOpenAction] = useState(false)
    const editor = useSlateStatic()
    const selected = useSelected()
    const focused = useFocused()
    const path = ReactEditor.findPath(editor, element)
    const handleInputChange = ({ target }) => {
        if (target.type === "checkbox") {
            setShowInNewTab(prev => !prev)
        }
        else {
            setHref(target.value)
            if (path) {
                Transforms.setNodes(editor, { href: target.value }, { at: path })
            }
        }
    }
    const handleIsDownloadLink = () => {
        setIsDownload(prev => !prev)
    }

    useEffect(() => {
        if (path) {
            Transforms.setNodes(editor, { target: showInNewTab ? "_blank" : "_self", isDownload: isDownload }, { at: path })
        }
    }, [isDownload, showInNewTab])

    return (
        <div className="link inline relative z-10" >
            <a
                href={element.href}
                {...attributes}
                {...element.attr}
                target={element.target}
                onClick={() => setIsOpenAction(true)}
                title={`link:${href}`}
            >
                {children}</a>

            <div className={`absolute z-50 top-10 start-0 rounded-lg border bg-white shadow-sm p-4 flex items-center gap-2 text-blue-600 text-xs ${isOpenAction ? "block" : "hidden"}`}>
                <a
                    href={href}
                    target="_blank"
                    className="text-blue-600 inline-block"
                >{element.href}</a>
                <span className="w-2 h-[1px] bg-black/60" />
                <span onClick={() => {
                    setIsOpenEdit(true)
                    setIsOpenAction(false)
                }}>
                    {t("change")}
                </span>
                <span className="w-[1px] h-4 bg-black/80" />
                <span onClick={() => removeLink(editor)}>
                    {t("remove")}
                </span>
            </div>
            <Backdrop
                sx={{ color: "#fff", zIndex: 30 }}
                open={isOpenAction}
                onClick={() => setIsOpenAction(false)}
            >
            </Backdrop>
            <DialogContext.Provider
                value={{
                    open: isOpenEdit,
                    setOpen: setIsOpenEdit,
                }}
            >
                <Dialog
                    title="edit link"
                    tiny
                    onOpened={() => { document.querySelector("#linkAddress").focus() }}
                    content={<div className="mt-4">
                        <div className="flex gap-x-2 items-center">
                            <input
                                type="text"
                                id="linkAddress"
                                className="border px-1 dark:text-gray-800 outline-hidden py-1"
                                placeholder="https://google.com"
                                value={href}
                                onChange={handleInputChange} />
                            <button
                                type="button"
                                onClick={() => removeLink(editor)}>
                                <HolismIcon icon={LinkOffIcon} />
                            </button>
                        </div>
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
                />
            </DialogContext.Provider>
        </div>
    )
}

export default Link
