import { useContext } from "react"
import {
    DialogContext,
    FormContext,
} from "Contexts"
import Browse from "./Browse"
import Hidden from "./Hidden"

const Parent = props => {

    const form = useContext(FormContext)
    const dialogContext = useContext(DialogContext) || {}
    const parentId = dialogContext?.parentId

    return parentId
        ?
        <Hidden
            property="ParentId"
            value={parentId}
        />
        :
        <Browse
            isTree
            placeholder="InfraParent"
            property="ParentId"
            {...props}
        />
}

export default Parent
