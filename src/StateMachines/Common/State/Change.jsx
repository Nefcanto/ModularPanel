import { useContext } from "react"
import { EntityContext } from "Contexts"

const ChangeState = () => {

    const { entity } = useContext(EntityContext)

    return <div>Hi</div>
}

export default ChangeState
