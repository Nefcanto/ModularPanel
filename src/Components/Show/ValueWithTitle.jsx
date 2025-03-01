import Tooltip from "@mui/material/Tooltip"

const ValueWithTitle = ({ value, title }) => {
    return <Tooltip
        disableInteractive
        placement="bottom-start"
        title={title || ""}
    >
        <div>{value}</div>
    </Tooltip>
}

export default ValueWithTitle
