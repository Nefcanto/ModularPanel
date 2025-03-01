import { useRef } from "react"
import {
    useDrag,
    useDrop,
} from "react-dnd"

const OrderCard = ({
    id,
    index,
    moveCard,
    children,
}) => {
    const ref = useRef(null)
    const [{ handlerId }, drop] = useDrop({
        accept: "card",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            moveCard(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })
    const [{ isDragging }, drag] = useDrag({
        type: "card",
        item: () => {
            return { id, index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    const opacity = isDragging ? 0 : 1
    drag(drop(ref))
    return (
        <div
            className="border border-[1px] border-dashed border-gray-400 py-2 px-4 mb-2 bg-slate-200 dark:bg-gray-600 dark:text-gray-100 dark:border-gray-300 cursor-move "
            data-handler-id={handlerId}
            ref={ref}
            style={{ opacity }}
        >
            {children}
        </div>
    )
}

export default OrderCard
