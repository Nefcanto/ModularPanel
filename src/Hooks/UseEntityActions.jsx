import React, {
    useContext,
    useState,
} from "react"
import app from "App"
import {
    EntityContext,
    ListContext,
    PanelContext,
} from "Contexts"
import Unify from "../Components/Unify"

const useEntityActions = () => {

    const [anchorEl, setAnchorEl] = useState(null)
    const [open, setOpen] = useState(false)
    const {
        contentEntityType,
        contentIdChooser,
        contentModule,
        create,
        edit,
        entityActions,
        flat,
        hasContent,
        hasDelete,
        hasEdit,
        hasView,
        isTree,
        menuForActions,
        reload,
        setEntity,
        show,
        treeExpanded,
        upsert,
    } = useContext(ListContext)

    const {
        parent,
        grandparent,
        greatGrandParent,
        greatGreatGrandParent,
    } = useContext(PanelContext)

    const {
        entity
    } = useContext(EntityContext)

    let clonedEntityActions = []

    const handleMenuIconClick = (e) => {
        if (!anchorEl) {
            setAnchorEl(e.currentTarget)
        }
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    if (entityActions) {
        let entityActionsArray = null
        if (typeof entityActions === "function") {
            let entityActionsList = entityActions(entity)
            if (entityActionsList === undefined) {
                throw "No entity actions is returned. Use fragments, or do not forget the \"return\" keyword."
            }
            entityActionsArray = entityActionsList.props.children
            if (entityActionsArray && entityActionsArray.props && entityActionsArray.props.children) {
                entityActionsArray = entityActionsArray.props.children
            }
        }
        else {
            entityActionsArray = entityActions.props.children
        }

        if (entityActionsArray) {
            clonedEntityActions = React
                .Children
                .toArray(entityActionsArray)
                .map((entityAction, index) => {
                    return <Unify
                        key={index}
                        component={entityAction}
                        {...entityAction.props}
                        entity={entity}
                        setEntity={setEntity}
                        reload={reload}
                        closeMenu={handleClose}
                    />
                })
        }
    }
    return {
        anchorEl,
        clonedEntityActions,
        contentEntityType,
        contentIdChooser,
        contentModule,
        create,
        edit,
        entity,
        entityActions,
        flat,
        handleClose,
        handleMenuIconClick,
        hasContent,
        hasDelete,
        hasEdit,
        hasView,
        isTree,
        menuForActions,
        open,
        reload,
        setEntity,
        setOpen,
        show,
        treeExpanded,
        upsert,
    }
}

export default useEntityActions
