import { Rectangle } from "recharts"

const Cursor = ({
    height,
    onClick,
    payload,
    width,
    x,
    y,
}) => {
    const handleClick = () => {
        if (payload && payload.length > 0) {
            const data = payload[0].payload
            if (onClick instanceof Function) {
                onClick({ payload: data })
            }
        }
    }

    return <Rectangle
        fill="rgba(0, 0, 0, 0.2)"
        onClick={handleClick}
        x={x}
        y={y}
        width={width}
        height={height}
    />
}

export default Cursor
