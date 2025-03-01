import {
    useContext,
    useEffect,
    useState,
} from "react"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import {
    isDevOrSuperAdmin,
    t,
} from "App"
import {
    DialogContext,
    ListContext,
} from "Contexts"
import Dialog from "../Dialog/Dialog"
import OkCancel from "../Dialog/OkCancel"

const textStyle = "text-blue-900 dark:text-slate-200 p-2 font-light text-xs items-center cursor-pointer uppercase hover:bg-blue-50 dark:hover:bg-gray-500 rounded-lg"

const PageSize = () => {

    const {
        metadata,
        setPageSize,
    } = useContext(ListContext)

    const {
        from,
        to,
        pageSize,
        totalCount
    } = metadata

    const [pageSizeDialogIsOpen, setPageSizeDialogVisibility] = useState(false)
    const [internalPageSize, setInternalPageSize] = useState(pageSize)

    useEffect(() => {
        setInternalPageSize(pageSize)
    }, [pageSize])

    const pageSizeDialog = <Dialog
        tiny
        title="InfraSelectPageSize"
        onOpened={() => { /*document.querySelector("#pageSizeSelect").focus()*/ }}
        content={<FormControl fullWidth className="mt-4">
            <InputLabel>
                {t("InfraPageSize")}
            </InputLabel>
            <Select
                label={t("InfraPageSize")}
                value={internalPageSize}
                onChange={(e) => { setInternalPageSize(e.target.value) }}
            >
                {isDevOrSuperAdmin() && <MenuItem value={1}>1</MenuItem>}
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
            </Select>
        </FormControl>}
        actions={<OkCancel
            okText="InfraSave"
            okClick={() => {
                setPageSize(internalPageSize)
                setPageSizeDialogVisibility(false)
            }}
            cancelClick={() => setPageSizeDialogVisibility(false)}
        />}
    />

    return <>
        <DialogContext.Provider
            value={{
                open: pageSizeDialogIsOpen,
                setOpen: setPageSizeDialogVisibility
            }}
        >
            {pageSizeDialogIsOpen && pageSizeDialog}
        </DialogContext.Provider>
        <Tooltip
            disableInteractive
            title={t("InfraClickToChangePageSize")}
        >
            <Button
                id="statsAndPageSize"
                className={textStyle + " text-end"}
                onClick={() => setPageSizeDialogVisibility(true)}
            >
                {
                    from
                        ?
                        <>
                            <span>{from?.digitGroup()}</span>
                            <span className="mx-2">-</span>
                            <span>{to?.digitGroup()}</span>
                        </>
                        :
                        null
                }
                {
                    totalCount
                        ?
                        <>
                            <span className="mx-2">/</span>
                            <span>{totalCount?.digitGroup()}</span>
                        </>
                        :
                        null
                }
            </Button>
        </Tooltip>
    </>
}

export default PageSize
