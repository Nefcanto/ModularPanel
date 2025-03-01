import { useContext } from "react"
import {
    EntityContext,
    ListContext
} from "Contexts"
import Node from "./Node"
import NoEntitiesFound from "../NoEntitiesFound"

const Tree = () => {

    const { data } = useContext(ListContext)

    return data?.length === 0
        ?
        <div className="tree w-full px-6 text-center">
            <NoEntitiesFound />
        </div>
        :
        <ul className="tree w-full px-6 min-w-[640px]">
            {
                data?.map(entity => <EntityContext.Provider
                    key={entity.id}
                    value={{
                        entity: entity,
                    }}
                >
                    <Node />
                </EntityContext.Provider>)
            }
        </ul>
}

export default Tree
