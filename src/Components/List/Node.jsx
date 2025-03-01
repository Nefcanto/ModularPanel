import {
    useContext,
    useEffect,
    useState,
} from "react"
import Collapse from "@mui/material/Collapse"
import Checkbox from "@mui/material/Checkbox"
import Tooltip from "@mui/material/Tooltip"
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined"
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault"
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined"
import RemoveIcon from "@mui/icons-material/Remove"
import {
    post,
    t,
} from "App"
import {
    EntityContext,
    ListContext,
} from "Contexts"
import {
    useEntityActions,
    useMessage,
} from "Hooks"
import HolismIcon from "../HolismIcon"
import Progress from "../Progress"
import EntityActions from "./EntityActions/EntityActions"

const Node = () => {

    const { error } = useMessage()

    const {
        anchorEl,
        clonedEntityActions,
        create,
        edit,
        entity,
        entityActions,
        handleClose,
        hasDelete,
        hasEdit,
        menuForActions,
        open,
        setOpen,
        show,
        treeExpanded,
        upsert,
    } = useEntityActions()

    const {
        camelizedEntityType,
        hasActivation,
        setEntity,
    } = useContext(ListContext)

    const [nodeExpanded, setNodeExpanded] = useState(treeExpanded)
    const [activationProgress, setActivationProgress] = useState(false)

    useEffect(() => {
        setNodeExpanded(treeExpanded)
    }, [treeExpanded])

    const handleClick = e => {
        setNodeExpanded(!nodeExpanded)
    }

    const handleActivation = e => {
        setActivationProgress(true)
        post(`/${camelizedEntityType}/changeActivation/${entity.id}`)
            .then(data => {
                setActivationProgress(false)
                const newEntity = {
                    ...entity,
                    isActive: data.isActive
                }
                setEntity(newEntity)
            }, e => {
                setActivationProgress(false)
                error(e)
            })
    }

    return <li className={`node ${entity?.parentId && "ms-8 border-s border-dashed border-slate-400"}`}>
        <div
            className="group relative hover:bg-slate-100 dark:hover:bg-gray-800 px-5 py-2 border-b dark:border-b-zinc-600 flex items-center"
        >
            {
                entity.relatedItems.hasChildren
                    ?
                    nodeExpanded
                        ?
                        <HolismIcon
                            className="text-slate-500 cursor-pointer "
                            icon={IndeterminateCheckBoxOutlinedIcon}
                            onClick={handleClick}
                        />
                        :
                        <HolismIcon
                            className="text-slate-500 cursor-pointer "
                            icon={AddBoxOutlinedIcon}
                            onClick={handleClick}
                        />
                    :
                    <HolismIcon
                        className="text-slate-300 "
                        icon={RemoveIcon}
                    />
            }
            {
                hasActivation
                    ?
                    activationProgress
                        ?
                        <Progress
                            className="ms-3 me-2 mt-2"
                            size={22}
                        />
                        :
                        entity.isActive === true
                            ?
                            <Tooltip
                                disableInteractive
                                className="relative z-10"
                                title={t("InfraConvertingToInactive")}
                            >
                                <Checkbox
                                    className="text-green-500 cursor-pointer"
                                    defaultChecked
                                    onClick={handleActivation}
                                />
                            </Tooltip>
                            :

                            <Tooltip
                                disableInteractive
                                className="relative z-10"
                                title={t("InfraConvertingToActive")}
                            >
                                <Checkbox
                                    checkedIcon={<DisabledByDefaultIcon />}
                                    className="text-red-500 cursor-pointer "
                                    defaultChecked
                                    onClick={handleActivation}
                                />
                            </Tooltip>
                    :
                    null
            }

            <div className="flex flex-col lg:flex-row justify-between w-full items-center">
                <div className="ms-1 text-sm font-normal text-slate-900 dark:text-slate-300 w-full">
                    {
                        (show && typeof show === "function")
                            ? show(entity)
                            :
                            "Either show function is not provided, or it is not a function"
                    }
                </div>
                {
                    (entityActions || hasDelete || hasEdit || edit)
                        ?
                        <EntityActions className="w-full justify-end flex ms-7" />
                        :
                        null
                }
            </div>
        </div>
        <Collapse in={nodeExpanded}>
            {
                entity.relatedItems.children?.map(childEntity => <ul
                    key={childEntity.id}
                >
                    <EntityContext.Provider
                        value={{
                            entity: childEntity,
                        }}
                    >
                        <Node />
                    </EntityContext.Provider>
                </ul>)
            }
        </Collapse>
    </li>
}

export default Node
