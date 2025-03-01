import {
    Children,
    cloneElement,
    useContext,
    useEffect,
} from "react"
import { useNavigate } from "react-router"
import app from "App"
import {
    ListContext,
    PanelContext,
} from "Contexts"
import AddAction from "./AddAction"
import CollapseExpandAction from "./CollapseExpandAction"
import DeleteAllAction from "./DeleteAllAction"
import DeleteBatchAction from "./DeleteBatchAction"
import FakeDataAction from "./FakeDataAction"
import OrderAction from "./OrderAction"
import Unify from "../../Unify"
import CalculateNestedSetAndHierarchicalAttributes from "./CalculateNestedSetAndHierarchicalAttributes"
import ExportToSpreadsheetAction from "./ExportToSpreadsheetAction"

const ListActions = () => {
    let navigate = useNavigate()

    const {
        deleteAll,
        deleteBatch,
        entityType,
        flat,
        hasOrder,
        isTree,
        listActions,
        selectedEntities,
        setHasEntitySelection,
    } = useContext(ListContext)

    let actionItems = null

    if (typeof listActions === "function") {
        let actionsReturn = listActions(selectedEntities)
        if (actionsReturn.props.children) {
            actionItems = actionsReturn.props.children
            if (actionItems.type) {
                actionItems = [actionItems]
            }
            else if (actionItems.props?.children) {
                actionItems = actionItems.props.children
            }
        }
        else {
            actionItems = actionsReturn
        }
    }
    else {
        if (listActions) {
            if (listActions.props?.children) {
                actionItems = listActions.props?.children
                if (actionItems.type) {
                    actionItems = [actionItems]
                }
                else if (actionItems.props?.children) {
                    actionItems = actionItems.props.children
                }
            }
            else {
                actionItems = listActions
            }
        }
    }

    useEffect(() => {
        if (deleteBatch) {
            setHasEntitySelection(true)
        }
        else if (deleteAll) {
            setHasEntitySelection(true)
        }
        else {
            setHasEntitySelection(actionItems && actionItems.filter && actionItems?.filter(i => i.toString().indexOf("notApplicableToEntities") > -1).length > 0)
        }
    }, [])

    return <div
        className="flex flex-wrap items-center mb-2 lg:mb-0 gap-y-0.5"
        id="listActions"
    >
        <AddAction />
        {(app.isDev() || deleteBatch) && <DeleteBatchAction />}
        {(app.isDev() || deleteAll) && <DeleteAllAction />}
        {isTree && !flat && <CollapseExpandAction />}
        {isTree && <CalculateNestedSetAndHierarchicalAttributes />}
        {app.isDev() && <FakeDataAction />}
        {
            actionItems
                ?
                actionItems.map
                    ?
                    actionItems?.map((action, index) => {

                        if (action.props.minCardinality) {
                            if (selectedEntities.length >= action.props.minCardinality) {
                                return <span key={index}>
                                    <Unify
                                        component={action}
                                    />
                                </span>
                            }
                            return <span key={index}>
                                <Unify
                                    component={action}
                                />
                            </span>
                        }
                        else {
                            return <span key={index}>
                                <Unify
                                    component={action}
                                />
                            </span>
                        }
                    })
                    :
                    <span>Action items is not an array</span>
                :
                null
        }
        <ExportToSpreadsheetAction />
        {hasOrder && <OrderAction />}
    </div>
}

export default ListActions
