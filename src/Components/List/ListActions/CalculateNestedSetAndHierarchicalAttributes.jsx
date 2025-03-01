import {
    useContext,
    useState,
} from "react"
import CalculateIcon from "@mui/icons-material/Calculate"
import { post } from "App"
import {
    ListContext,
    PanelContext,
} from "Contexts"
import ListAction from "./ListAction"
import MultiStepConfirmation from "../../MultiStepConfirmation"

const CalculateNestedSetAndHierarchicalAttributes = () => {

    const { camelizedEntityType } = useContext(ListContext)

    const calculateNestedSetAndHierarchicalAttributes = ({
        error,
        reloadList,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(`/${camelizedEntityType}/calculateNestedSetAndHierarchicalAttributes`).then(data => {
            success("InfraDone")
            setProgress(false)
            reloadList()
        }, e => {
            error(e)
            setProgress(false)
        })
    }

    return <ListAction
        onClick={calculateNestedSetAndHierarchicalAttributes}
        icon={CalculateIcon}
        title="InfraPerformHierarchicalCalculations"
    />
}

export default CalculateNestedSetAndHierarchicalAttributes
