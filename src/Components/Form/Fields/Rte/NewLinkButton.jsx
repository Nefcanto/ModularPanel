import InsertLinkIcon from "@mui/icons-material/InsertLink"
import { useState } from "react"
import { Transforms } from "slate"
import insertLink from "./InsertLink"
import isBlockActive from "./IsBlockActive"
import Button from "./Button"
import { useForm } from "Hooks"
import { Dialog } from "List"
import {
    Check,
    FormElement,
    HolismIcon,
    Link,
} from "Form"
import { OkCancel } from "Panel"
import {
    DialogContext,
    FormContext,
} from "Contexts"

const NewLinkButton = (props) => {
    const { editor, title } = props
    const [showInput, setShowInput] = useState(false)
    const [selection, setSelection] = useState()

    const {
        ...formRest
    } = useForm({
    })

    const handleInsertLink = () => {

        const url = formRest.fields.find(item => item.id.includes("url"))
        const showInNewTab = formRest.fields.find(item => item.id.includes("showInNewTab"))
        const isDownload = formRest.fields.find(item => item.id.includes("isDownload"))

        Transforms.select(editor, selection)
        insertLink(editor, {
            url,
            showInNewTab,
            isDownload
        })

        setShowInput(prev => !prev)
    }
    const toggleLink = () => {
        setSelection(editor.selection)
        setShowInput(prev => !prev)
    }

    const Inputs = <>
        <Link
            property="url"
            required
            id="linkAddress"
        />
        <Check
            property="showInNewTab"
            placeholder="open in new tab"
        />
        <Check
            property="isDownload"
            placeholder="downloadable"
        />
    </>
    return (
        <div
            className={`popup-wrapper inline relative w-fit`}
            title={title}
        >
            <Button
                className={showInput ? "text-slate-900 " : "text-slate-200"}
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
                <FormContext.Provider
                    value={{
                        setHasFile: () => { },
                        ...formRest
                    }}
                >
                    <Dialog
                        title={title}
                        onOpened={() => { document.querySelector("#linkAddress").focus() }}
                        content={<div className="mt-4">
                            <FormElement
                                inputs={Inputs}
                            />
                        </div>}
                        actions={<OkCancel
                            okText="add"
                            okClick={handleInsertLink}
                            cancelClick={toggleLink}
                        />}
                    />
                </FormContext.Provider>
            </DialogContext.Provider>

        </div >
    )
}

export default NewLinkButton
