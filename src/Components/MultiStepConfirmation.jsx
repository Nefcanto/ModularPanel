import {
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react"
import WarningIcon from "@mui/icons-material/Warning"
import { t } from "App"
import {
    DialogContext,
    PanelContext,
} from "Contexts"
import HolismIcon from "./HolismIcon"
import Dialog from "./Dialog/Dialog"
import OkCancel from "./Dialog/OkCancel"

const MultiStepConfirmation = ({ onConfirmed }) => {

    const [simpleOpen, setSimpleOpen] = useState(false)
    const [additionOpen, setAdditionOpen] = useState(false)
    const firstNumber = useMemo(() => Number.parseInt(Math.random() * 10) + 1, [additionOpen])
    const secondNumber = useMemo(() => Number.parseInt(Math.random() * 10) + 1, [additionOpen])
    const [sum, setSum] = useState("")

    const {
        multiStepConfirmationShown,
        setMultiStepConfirmationShown,
    } = useContext(PanelContext)
    const [open, setOpen] = useState(false)
    const [confirmed, setConfirmed] = useState(false)

    const reset = () => {
        setConfirmed(false)
        setOpen(false)
        setMultiStepConfirmationShown(false)
    }

    useEffect(() => {
        if (multiStepConfirmationShown) {
            setSum(0)
            setSimpleOpen(true)
        }
    }, [multiStepConfirmationShown])

    const simpleConfirmationDialog = <DialogContext.Provider
        value={{
            open: simpleOpen,
            setOpen: setSimpleOpen
        }}
    >
        <Dialog
            actions={<OkCancel
                cancelClick={() => {
                    setSimpleOpen(false)
                    setMultiStepConfirmationShown(false)
                }}
                cancelText="InfraNo"
                okClick={() => {
                    setSimpleOpen(false)
                    setTimeout(() => {
                        setAdditionOpen(true)
                    }, 100)
                }}
                okText="InfraYes"
            />}
            content={<div className="flex justify-center items-center flex-col sm:flex-row">
                <HolismIcon
                    className="text-red-400 text-5xl me-4"
                    icon={WarningIcon}
                />
                <span>
                    {t("InfraAreYouSureForDeletion")}
                </span>
                {/* todo: Show some information form the selected entity, to enhance UX */}
            </div>}
            tiny
            title={t("InfraConfirmation")}
        />
    </DialogContext.Provider>

    const additionConfirmationDialog = <DialogContext.Provider
        value={{
            open: additionOpen,
            setOpen: setAdditionOpen
        }}
    >
        <Dialog
            actions={
                firstNumber + secondNumber === sum
                    ?
                    <OkCancel
                        cancelClick={() => {
                            setAdditionOpen(false)
                            setMultiStepConfirmationShown(false)
                        }}
                        cancelText="InfraNo"
                        okClick={() => {
                            setAdditionOpen(false)
                            setMultiStepConfirmationShown(false)
                            if (onConfirmed instanceof Function) {
                                onConfirmed()
                            }
                        }}
                        okText="InfraYes"
                    />
                    :
                    <div></div>
            }
            content={<div className="flex justify-center items-center flex-col sm:flex-row">
                <HolismIcon
                    className="text-red-400 text-5xl me-4"
                    icon={WarningIcon}
                />
                <div className="flex flex-col">
                    <span>{t("InfraPleaseWriteTheSumBelow")}</span>
                    {
                        additionOpen &&
                        <div>
                            <span>{`${firstNumber} + ${secondNumber} = `}</span>
                            <input
                                className="border dark:bg-stone-900 dark:text-white"
                                onChange={e => setSum(e.target.value * 1)}
                                value={sum === 0 ? "" : sum}
                            />
                        </div>
                    }
                </div>
                {/* todo: Show some information form the selected entity, to enhance UX */}
            </div>}
            tiny
            title={t("InfraConfirmation")}
        />
    </DialogContext.Provider>

    return <>
        {simpleOpen && simpleConfirmationDialog}
        {additionOpen && additionConfirmationDialog}
    </>
}

export default MultiStepConfirmation
