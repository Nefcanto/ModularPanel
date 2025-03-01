import {
    useContext,
    useState,
} from "react"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import PositiveInteger from "../Inputs/PositiveInteger"
import { t } from "App"
import {
    DialogContext,
    ListContext,
} from "Contexts"
import Dialog from "../Dialog/Dialog"
import OkCancel from "../Dialog/OkCancel"

const textStyle = "text-blue-900 dark:text-slate-100 p-2 font-light text-xs items-center cursor-pointer uppercase hover:bg-blue-50 dark:hover:bg-gray-500 rounded-lg"

const PageNumber = () => {

    const {
        metadata,
        setPageNumber,
    } = useContext(ListContext)

    const { pagesCount } = metadata || {}

    const [pageNumberDialogIsOpen, setPageNumberDialogVisibility] = useState(false)

    const goToPage = number => {
        if (number > pagesCount) {
            setPageNumber(pagesCount)
        }
        else {
            setPageNumber(number)
        }
        setPageNumberDialogVisibility(false)
    }

    const pageNumberDialog = <Dialog
        tiny
        title="InfraGoToPage"
        onOpened={() => { document.querySelector("#goToPageInput").focus() }}
        content={<form
            noValidate
            onSubmit={() => { }}
        >
            <div id="fields">
                <PositiveInteger
                    id="goToPageInput"
                    placeholder="InfraPageNumber"
                    onEnter={value => {
                        if (value) {
                            goToPage(value)
                        }
                    }} />
            </div>
        </form>}
        actions={<OkCancel
            okText="InfraGo"
            okClick={() => {
                let value = document.querySelector("#goToPageInput").value
                if (value) {
                    goToPage(value)
                }
            }}
            cancelClick={() => setPageNumberDialogVisibility(false)}
        />}
    />

    return <>
        <DialogContext.Provider
            value={{
                open: pageNumberDialogIsOpen,
                setOpen: setPageNumberDialogVisibility
            }}
        >
            {pageNumberDialogIsOpen && pageNumberDialog}
        </DialogContext.Provider>
        <Button
            id="goToPage"
            className={textStyle + " text-start"}
            onClick={() => setPageNumberDialogVisibility(true)}
        >
            <Tooltip
                disableInteractive
                title={t("InfraClickToGoToASpecificPage")}
            >
                <span>{`${t("InfraPage")} #`}</span>
            </Tooltip>
        </Button>
    </>
}

export default PageNumber
