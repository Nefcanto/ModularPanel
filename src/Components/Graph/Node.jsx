import { memo } from 'react'
import {
    NodeToolbar,
    Handle,
    Position,
} from "@xyflow/react"

const Node = memo(({ data }) => {

    const handleProps = {
        isConnectableStart: true,
        isConnectable: true,
        isConnectableEnd: true,
    }

    return <div className="border border-slate-600 min-w-48 rounded-sm grid place-content-center min-h-12 bg-white dark:bg-stone-900">
        <NodeToolbar
            isVisible={data.forceToolbarVisible || undefined}
            position={data.toolbarPosition}
        >
            <button>cut</button>
            <button>copy</button>
            <button>paste</button>
        </NodeToolbar>
        <div>{data?.label}</div>
        <Handle
            type="target"
            position={Position.Top}
            {...handleProps}
        />
        <Handle
            type="target"
            position={Position.Right}
            {...handleProps}
        />
        <Handle
            type="target"
            position={Position.Bottom}
            {...handleProps}
        />
        <Handle
            type="target"
            position={Position.Left}
            {...handleProps}
        />
        <Handle
            type="source"
            position={Position.Top}
            {...handleProps}
        />
        <Handle
            type="source"
            position={Position.Right}
            {...handleProps}
        />
        <Handle
            type="source"
            position={Position.Bottom}
            {...handleProps}
        />
        <Handle
            type="source"
            position={Position.Left}
            {...handleProps}
        />
    </div>
})

export default Node
