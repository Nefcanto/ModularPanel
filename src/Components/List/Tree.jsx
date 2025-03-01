import { useState } from "react"
import List from "./List"

const Tree = ({
    entityType,
    show,
    ...rest
}) => {

    const [treeExpanded, setTreeExpanded] = useState(true)

    return <List
        {...rest}
        entityType={entityType}
        isTree
        show={show}
        treeExpanded={treeExpanded}
        setTreeExpanded={setTreeExpanded}
    />
}

export default Tree
