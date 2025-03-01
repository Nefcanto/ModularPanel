import {
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react"
import {
    addEdge,
    Background,
    Controls,
    MiniMap,
    ReactFlow,
    ReactFlowProvider,
    useEdgesState,
    useNodesState,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import {
    get,
    parseQuery,
} from "App"
import {
    EntityContext,
    ListContext,
    PanelContext,
    TableContext,
} from "Contexts"
import { useMessage } from "Hooks"
import Node from "./Node"

const nodeTypes = {
    'nodeWithActions': Node,
}

const Graph = () => {

    const [nodes, setNodes, onNodesChange] = useNodesState([])
    const [edges, setEdges, onEdgesChange] = useEdgesState([])
    const [progress, setProgress] = useState(true)
    const { error } = useMessage()

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

    const {
        isDark,
        isSidebarOpen,
        maximized,
    } = useContext(PanelContext)

    const onConnect = useCallback(
        params => setEdges(eds => addEdge(params, eds)),
        [setEdges],
    )

    const setPosition = useCallback(
        (pos) =>
            setNodes((nodes) =>
                nodes.map((node) => ({
                    ...node,
                    data: { ...node.data, toolbarPosition: pos },
                })),
            ),
        [setNodes],
    )

    const transformData = () => {
        console.log(data)
        const nodes = data?.map(entity => ({
            id: entity.id.toString(),
            type: 'nodeWithActions',
            data: {
                label: entity.title,
                key: entity.key,
            },
            position: {
                x: 250,
                y: entity.order * 100
            }
        }))

        const edges = data?.sort((a, b) => a.order - b.order)
            .reduce((acc, entity, index, array) => {
                if (index < array.length - 1) {
                    acc.push({
                        id: `e${entity.id}-${array[index + 1].id}`,
                        source: entity.id.toString(),
                        target: array[index + 1].id.toString()
                    })
                }
                return acc
            }, [])
        setNodes(nodes)
        setEdges(edges)
    }

    useEffect(() => {
        transformData()
    }, [data])

    return <div className="flex-1">
        <ReactFlowProvider>
            <ReactFlow
                colorMode={isDark ? "dark" : "light"}
                edges={edges}
                nodes={nodes}
                nodeTypes={nodeTypes}
                onConnect={onConnect}
                onEdgesChange={onEdgesChange}
                onNodesChange={onNodesChange}
            >
                <Controls />
                <MiniMap />
                <Background
                    gap={12}
                    size={1}
                    variant="dots"
                />
            </ReactFlow>
        </ReactFlowProvider>
    </div>
}

export default Graph
