import { useState } from "react"
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess"
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore"
import ListAction from "./ListAction"

const CollapseExpandAction = () => {

    const [isExpanded, setIsExpanded] = useState(true)

    const toggleCollapse = ({
        setTreeExpanded,
        treeExpanded,
    }) => {
        setTreeExpanded(!treeExpanded)
        setIsExpanded(prev => !prev)
    }

    return <ListAction
        title={isExpanded ? "InfraCollapseAll" : "InfraExpandAll"}
        icon={isExpanded ? UnfoldLessIcon : UnfoldMoreIcon}
        onClick={toggleCollapse}
    />
}

export default CollapseExpandAction
