import React, {
    useContext,
    useEffect,
    useState,
    useRef,
} from "react"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import KeyIcon from "@mui/icons-material/Key"
import Checkbox from "@mui/material/Checkbox"
import Tooltip from "@mui/material/Tooltip"
import Collapse from "@mui/material/Collapse"
import DragIndicatorIcon from "@mui/icons-material/DragIndicator"
import {
    getLocale,
    isDev,
    isDevOrSuperAdmin,
    isSuperAdmin,
    t,
} from "App"
import {
    EntityContext,
    ListContext,
    PanelContext,
    TableContext,
} from "Contexts"
import Pagination from "./Pagination"
import EntityActions from "./EntityActions/EntityActions"
import NoEntitiesFound from "../NoEntitiesFound"
import HolismIcon from "../HolismIcon"

const Table = () => {

    const tableRef = useRef(null)
    const [calculatedMinWidth, setCalculatedMinWidth] = useState(0)

    const {
        autoExpansion,
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
        hasKey,
        hasOrder,
        hasSlug,
        hasUuid,
        hasView,
        headers,
        hiddenEntityActions,
        isBrowse,
        menuForActions,
        minWidth,
        numbered,
        relatedItems,
        reload,
        resizable,
        row: externalRow,
        selectedEntities,
        selectEntities,
        selectEntity,
        separateRowForActions,
        setEntity,
        showId,
        showTopPagination,
        state,
        totalsRow,
        upsert,
        width,
    } = useContext(ListContext)

    const { isSidebarOpen } = useContext(PanelContext)

    let headerElements = []

    const internalRow = () => <><td></td></>

    const row = externalRow || internalRow

    const doesDestructure = func => {
        return /\({.+}\)/gm.test(func.toString().replaceAll("\n", "").split("=>")[0])
    }

    const getMinWidth = () => {
        const minWidth = 600
        if (resizable) {
            if (width) {
                return width
            }
            return `${window.innerWidth}px`
        }
        if (autoExpansion) {
            return calculatedMinWidth + "px"
        }
        return `${minWidth}px`
    }

    if (headers) {

        const finalHeaders = headers instanceof Function
            ?
            headers({
                state,
                ...relatedItems,
            })
            :
            headers
        const elements = React.Children.toArray(finalHeaders.props.children).map(item => {
            if (item.type == Symbol.for("react.fragment")) {
                return item.props.children
            } else {
                return item
            }

        })

        headerElements = React.Children
            .toArray(elements.flat())
            .filter(header => {
                if (header.props && header.props.superAdmin) {
                    return isSuperAdmin()
                }
                return true
            })
            .map(header => {
                if (header.props.children?.props) {
                    return header.props.children
                }
                return header
            })
            .map(header => {
                const { start, superAdmin, ...rest } = header.props
                return <header.type
                    className={"text-gray-900 dark:text-gray-300 py-3 font-light text-xs "
                        + (header?.props?.start && " text-start ")
                        + (header?.props?.className || "")}
                    key={header.key}
                    ref={header.ref}
                    {...rest}
                >
                    {
                        React.Children.toArray(header.props.children).map(child => {
                            return typeof child === "string" ? t(child) : child
                        })
                    }
                </header.type>
            })
    }

    const head =

        <thead className="sticky top-0 border-b bg-white dark:bg-stone-900">
            <tr className={
                "text-xs uppercase font-light border-b h-10 "
                + (getLocale().supportsLetterSpacing && " tracking-wider ")
            }
            >
                {
                    hasOrder && <th className="w-6"></th>
                }
                {
                    hasEntitySelection ?
                        <th className="text-start">
                            <Tooltip
                                disableInteractive
                                title={t("Select all")}
                                placement="top"
                            >
                                <Checkbox
                                    color="primary"
                                    onChange={event => {
                                        event.target.checked
                                            ?
                                            selectEntities(data)
                                            :
                                            deselectEntities(data)
                                    }}
                                />
                            </Tooltip>
                        </th>
                        :
                        null
                }
                {
                    numbered && <th className="w-10 text-gray-900 dark:text-gray-300 font-light">{`#`}</th>
                }
                {
                    showId && <th className="w-10 text-gray-900 dark:text-gray-300 font-light">{t("InfraId")}</th>
                }
                {
                    isDevOrSuperAdmin() && hasData && data[0].key && <th className="w-24 text-gray-900 dark:text-gray-300 font-light">{t("InfraKey")}</th>
                }
                {
                    headerElements.length > 0
                        ?
                        headerElements
                        :
                        <th></th>
                }
                {
                    (entityActions || hasDelete || isDevOrSuperAdmin())
                        ?
                        !hiddenEntityActions && <th></th>
                        :
                        null
                }
            </tr>
        </thead>

    const rowStyle = (entity, index, hasBottomBorder) => "py-3 " +
        ((hasBottomBorder && index !== data?.length - 1) ? "border-b " : " ") +
        (classProvider ? classProvider(entity) : "")

    const drag = entity => hasOrder &&
        <td className="text-start w-6">
            {/* <DragIndicatorIcon className="cursor-move" /> */}
        </td>

    const itemSelection = entity => hasEntitySelection
        ?
        <td className="text-start">
            <Checkbox
                checked={selectedEntities?.indexOf(entity.id) > -1}
                color="primary"
                onChange={event => {
                    event.target.checked
                        ?
                        selectEntity(entity.id)
                        :
                        deselectEntity(entity.id)
                }}
            />
        </td>
        :
        null

    const rowNumber = index => numbered &&
        <td className="w-10">
            {index + 1}
        </td>

    const keyColumn = entity => isDevOrSuperAdmin() && entity.key &&
        <td dir="ltr">
            <span title={entity.key}>
                <HolismIcon
                    onClick={() => alert(entity.key)}
                    className="cursor-pointer"
                    icon={KeyIcon}
                />
            </span>
        </td>

    const id = entity => showId && <>
        <td className="w-10">
            {entity.id}
        </td>
    </>

    const clonedCells = entity => React.Children
        .toArray(
            doesDestructure(row)
                ?
                row({
                    entity,
                    isSuperAdmin: isSuperAdmin(),
                    state,
                    ...relatedItems,
                }).props.children
                :
                row(entity).props.children
        )
        .filter(entity => {
            if (entity.props && entity.props.superAdmin) {
                return isSuperAdmin()
            }
            return true
        })
        .map(td => {
            if (td.type === "td") {
                return td
            }
            if (td.type instanceof Function) {
                return td
            }

            return td.props.children
        })
        .map(td => {
            const {
                ltr,
                start,
                superAdmin,
                ...rest
            } = td.props
            const dynamicProps = {}
            if (ltr) {
                dynamicProps["dir"] = "ltr"
            }
            return <td.type
                key={td.key}
                ref={td.ref}
                className={"whitespace-pre-wrap text-gray-900 dark:text-white py-3 text-sm font-light tracking-wide "
                    + (autoExpansion ? " whitespace-nowrap " : "")
                    + (td?.props?.start ? " text-start " : "")
                    + td.props.className || ""}
                {...rest}
                {...dynamicProps}
            >
                {td.props.children}
            </td.type>
        })

    let clonedTotalsRow = () => { }

    if (totalsRow) {
        clonedTotalsRow = entity => React.Children
            .toArray(doesDestructure(totalsRow) ? totalsRow({
                entity,
                isSuperAdmin: isSuperAdmin()
            }).props.children : totalsRow(entity).props.children)
            .filter(entity => {
                if (entity.props && entity.props.superAdmin) {
                    return isSuperAdmin()
                }
                return true
            })
            .map(td => {
                if (td.type === "td") {
                    return td
                }
                if (td.type instanceof Function) {
                    return td
                }

                return td.props.children
            })
            .map(td => {
                const { start, superAdmin, ...rest } = td.props
                return <td.type
                    key={td.key}
                    ref={td.ref}
                    className={" text-gray-900 dark:text-white py-3 text-sm font-light tracking-wide "
                        + (autoExpansion ? " whitespace-nowrap " : "")
                        + (td?.props?.start && " text-start ")
                        + td.props.className}
                    {...rest}
                >
                    {td.props.children}
                </td.type>
            })
    }

    const actions = entity => (entityActions || hasDelete || hasEdit || edit || isDev())
        ?
        !hiddenEntityActions && <td {...(separateRowForActions && { colSpan: "100" })}>
            <EntityActions entityActions={entityActions} />
        </td>
        :
        null

    const body = <tbody
        className="item-start"
        suppressHydrationWarning={true}
    >
        {
            row && typeof row === "function"
                ?
                !hasData
                    ?
                    <tr>
                        <td colSpan="100"><NoEntitiesFound /></td>
                    </tr>
                    :
                    data?.map((entity, index) => !menuForActions && separateRowForActions
                        ?
                        <React.Fragment key={entity.id}>
                            <EntityContext.Provider
                                value={{
                                    entity: entity,
                                    isTable: true,
                                }}
                            >
                                <tr
                                    className={rowStyle(entity, index, hiddenEntityActions || state) + " relative "}
                                >
                                    {drag(entity)}
                                    {itemSelection(entity)}
                                    {rowNumber(index)}
                                    {id(entity)}
                                    {keyColumn(entity)}
                                    {clonedCells(entity)}
                                </tr>
                                {
                                    !hiddenEntityActions && !state &&
                                    <tr
                                        className={rowStyle(entity, index, true) + " h-12"}
                                    >
                                        {actions(entity)}
                                    </tr>
                                }
                            </EntityContext.Provider>
                        </React.Fragment>
                        :
                        <EntityContext.Provider
                            key={entity.id}
                            value={{
                                entity: entity,
                                isTable: true
                            }}
                        >
                            <tr
                                className={rowStyle(entity, index, true)}
                            >
                                {drag(entity)}
                                {itemSelection(entity)}
                                {rowNumber(index)}
                                {id(entity)}
                                {keyColumn(entity)}
                                {clonedCells(entity)}
                                {actions(entity)}
                            </tr>
                        </EntityContext.Provider>
                    )
                :
                null
        }
        {clonedTotalsRow(data)}
    </tbody>

    return <>
        {
            hasData
                ?
                <Collapse
                    in={showTopPagination}
                    className="topPagination w-full "
                >
                    <div className="w-full px-6">
                        <Pagination />
                    </div>
                </Collapse>
                :
                null
        }
        <div className={"table flex-1 w-full block overflow-x-auto " + (isBrowse ? " md:rounded-lg " : " px-6 ")}>
            <TableContext.Provider
                value={{
                    hasMoreRoom: !menuForActions && separateRowForActions && !hiddenEntityActions && !state
                }}
            >
                <table
                    className="w-full text-center overflow-x-auto"
                    ref={tableRef}
                    style={{
                        minWidth: getMinWidth()
                    }}
                >
                    {head}
                    {body}
                </table>
            </TableContext.Provider >
        </div>
        {
            !hasData
                ?
                null
                :
                !isBrowse
                &&
                <div className="bottomPagination mt-8 px-6 ">
                    <Pagination />
                </div>
        }
    </>
}

export default Table
