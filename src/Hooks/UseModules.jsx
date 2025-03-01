import {
    useEffect,
    useState,
} from "react"
import * as CartRendererComponents from "CartRendererComponents"

const useModules = () => {

    const [entityRenderers, setEntityRenders] = useState([])

    const registerRenderer = (exportedName, renderer) => {

        setEntityRenders(previousRenderers => {
            const entityType = exportedName.replace("Renderer", "")
            if (previousRenderers.find(i => i.entityType === entityType)) {
                return previousRenderers
            }
            return [...previousRenderers, {
                entityType,
                renderer: renderer
            }]
        })
    }

    const extractEntityRenderers = () => {
        import("Dependencies")
            .then(Dependencies => {
                for (const dependency in Dependencies) {
                    const dependencyExports = Dependencies[dependency]
                    for (const exportedName in dependencyExports) {
                        if (exportedName.endsWith("Renderer")) {
                            const renderer = dependencyExports[exportedName]
                            registerRenderer(exportedName, renderer)
                            registerRenderer(exportedName, renderer)
                        }
                    }
                }
            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        extractEntityRenderers()
    }, [])

    useEffect(() => {
        console.log(entityRenderers)
    }, [entityRenderers])

    const getRenderer = entityType => {
        const renderer = CartRendererComponents[`${entityType}CartRenderer`]
          return renderer || (() => {
            return <div>No renderer for {entityType}</div>
        })
    }

    return {
        getRenderer
    }
}

export default useModules
