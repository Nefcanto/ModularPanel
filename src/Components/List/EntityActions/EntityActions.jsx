import React, {
    useContext,
    useEffect,
} from "react"
import CircularProgress from "@mui/material/CircularProgress"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import Fade from "@mui/material/Fade"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import app, { isDevOrSuperAdmin } from "App"
import {
    EntityContext,
    ListContext
} from "Contexts"
import { useEntityActions } from "Hooks"
import AddChildAction from "./AddChildActions"
import ChangeKeyAction from "./ChangeKeyAction"
import ChangeTenantAction from "./ChangeTenant"
import ContentAction from "./ContentAction"
import DeleteAction from "./DeleteAction"
import EditAction from "./EditAction"
import ReloadEntityAction from "./ReloadEntityAction"
import ShareBetweenTenants from "./ShareBetweenTenants"
import ViewAction from "./ViewAction"
import ViewRecordAction from "./ViewRecordAction"
import Unify from "../../Unify"

const EntityActions = ({ className }) => {

    const {
        isTable,
        isBrowse,
    } = useContext(ListContext)

    const {
        anchorEl,
        clonedEntityActions,
        contentEntityType,
        contentIdChooser,
        contentModule,
        create,
        edit,
        entity,
        flat,
        handleClose,
        handleMenuIconClick,
        hasContent,
        hasDelete,
        hasEdit,
        hasKeyChanging,
        hasView,
        isTree,
        menuForActions,
        multicolumn,
        open,
        setOpen,
        upsert,
    } = useEntityActions()

    const deleteRecord = hasDelete && <DeleteAction />

    /*
        upsert={EntityForm}
        hasEdit
        edit={entity => `/entity/edit/${entity.id}`}
        edit={EditEntity}

        either upsert, or edit URL, or edit component, or create + hasEdit
    */

    const editRecord = ((hasEdit && create) || edit || upsert) && <EditAction />

    const changeKey = !isBrowse && entity.key && (hasKeyChanging || isDevOrSuperAdmin()) && <ChangeKeyAction />

    const view = hasView && <ViewAction />

    const viewRecord = app.isDevOrSuperAdmin() && <ViewRecordAction />

    const reloadEntity = app.isDev() && !isBrowse && <ReloadEntityAction />

    const addChild = isTree && !flat && <AddChildAction />

    const editContent = hasContent && <ContentAction
        centralized
        contentEntityType={contentEntityType}
        contentIdChooser={contentIdChooser}
        contentModule={contentModule}
    />
    const shareBetweenTenants = !isBrowse && <ShareBetweenTenants />
    const changeTenant = !isBrowse && <ChangeTenantAction />

    const getSize = () => {
        return 32
    }

    const jsx = clonedEntityActions.map((entityAction, index) => {
        return <span key={index}>
            {entityAction}
        </span>
    })

    return (menuForActions && isTable)
        ?
        <>
            <IconButton
                onClick={handleMenuIconClick}
            >
                <MoreVertIcon />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: app.isRtl() ? "left" : "right",
                }}
                onClose={handleClose}
                open={open}
                transformOrigin={{
                    vertical: "top",
                    horizontal: app.isRtl() ? "left" : "right",
                }}
            >
                {jsx}
                {editContent}
                {addChild}
                {deleteRecord}
                {changeKey}
                {shareBetweenTenants}
                {changeTenant}
                {editRecord}
                {view}
                {viewRecord}
                {reloadEntity}
            </Menu>
        </>
        :
        <span className={`entityActions block ${className} ${(!isTable && !isTree && !multicolumn) ? "" : ""}`}>
            {
                entity.progress
                    ?
                    <span className="flex flex-wrap items-center justify-end px-2">
                        <Fade in={entity.progress}>
                            <CircularProgress
                                className="mt-2"
                                size={getSize()}
                            />
                        </Fade>
                    </span>
                    :
                    <span className="flex flex-wrap items-center justify-end ">
                        {/* <Fade in={!entity.progress}> */}
                        <>
                            {jsx}
                            {editContent}
                            {addChild}
                            {deleteRecord}
                            {changeKey}
                            {shareBetweenTenants}
                            {changeTenant}
                            {editRecord}
                            {view}
                            {viewRecord}
                            {reloadEntity}
                        </>
                        {/* </Fade> */}
                    </span>
            }
        </span>
}

export default EntityActions
