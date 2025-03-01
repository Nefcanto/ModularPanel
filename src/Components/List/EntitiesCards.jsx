import { useContext } from "react"
import Checkbox from "@mui/material/Checkbox"
import Tooltip from "@mui/material/Tooltip"
import Collapse from "@mui/material/Collapse"
import {
    isDevOrSuperAdmin,
    t,
} from "App"
import {
    EntityContext,
    ListContext,
} from "Contexts"
import Pagination from "./Pagination"
import EntityActions from "./EntityActions/EntityActions"
import NoEntitiesFound from "../NoEntitiesFound"
import LabelValue from "../../Components/Show/LabelValue"

const Cards = () => {

    const {
        card,
        classProvider,
        create,
        data,
        deselectEntities,
        deselectEntity,
        edit,
        entityActions,
        entityType,
        hasData,
        hasDelete,
        hasEdit,
        hasEntitySelection,
        isBrowse,
        multicolumn,
        reload,
        selectedEntities,
        selectEntities,
        selectEntity,
        setEntity,
        setEntityActionProgress,
        showTopPagination,
        totalsCard,
        upsert,
    } = useContext(ListContext)

    const keyJsx = entity => isDevOrSuperAdmin() && entity.key &&
        <LabelValue
            full
            label="InfraKey"
            value={entity.key}
            className="mb-2"
        />

    const entitiesJsx = data?.map((entity, index) =>
        <EntityContext.Provider
            key={entity.id}
            value={{
                entity: entity,
            }}
        >
            <div
                className=
                {
                    "entity w-full overflow-hidden relative " +
                    (multicolumn ? " group border " : "py-4 px-6 ") +
                    (!multicolumn && index !== 0 ? "border-t " : "") +
                    (classProvider ? classProvider(entity) : "")
                }
            >
                {
                    hasEntitySelection
                        ?
                        <div className="flex flex-row ">
                            <div className="flex items-center justify-center w-10 ">
                                <Checkbox
                                    checked={selectedEntities.indexOf(entity.id) > -1}
                                    color="primary"
                                    onChange={(event) => {
                                        event.target.checked
                                            ?
                                            selectEntity(entity.id)
                                            :
                                            deselectEntity(entity.id)
                                    }}
                                />
                            </div>
                            <div className="flex-1">
                                {
                                    keyJsx(entity)
                                }
                                {
                                    card(entity)
                                }
                            </div>
                        </div>
                        :
                        <div className="">
                            {
                                keyJsx(entity)
                            }
                            {
                                card(entity)
                            }
                        </div>
                }
                {
                    (entityActions || hasDelete || hasEdit || edit || isDevOrSuperAdmin())
                        ?
                        <div
                            className={(multicolumn ? " flex bg-white dark:bg-stone-900 border-t bottom-0 end-0 z-50 " : "")}
                        >
                            <EntityActions
                                entityActions={entityActions}
                            />
                        </div>
                        :
                        null
                }
            </div>
        </EntityContext.Provider>
    )

    const cardJsx = <>
        <Collapse
            className="w-full"
            in={showTopPagination}
            unmountOnExit
        >
            <div className="px-6 w-full">
                <Pagination />
            </div>
            <br />
        </Collapse>
        {

            hasEntitySelection ?
                <div className="w-full flex justify-start px-6">
                    <Tooltip
                        disableInteractive
                        placement="top"
                        title={t("Select all")}
                    >
                        <Checkbox
                            color="primary"
                            onChange={(event) => {
                                event.target.checked
                                    ?
                                    selectEntities(data)
                                    :
                                    deselectEntities(data)
                            }}
                        />
                    </Tooltip>
                </div>
                :
                null
        }
        <div
            className={"w-full "
                + (multicolumn ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 px-6" : "")
            }
        >
            {entitiesJsx}
            {totalsCard && totalsCard(data)}
        </div>
        {
            !isBrowse &&
            <div className="px-6 w-full">
                <Pagination />
            </div>
        }
    </>

    return <>
        {
            hasData
                ?
                cardJsx
                :
                <NoEntitiesFound
                    className="grid place-items-center"
                />
        }
    </>
}

export default Cards
