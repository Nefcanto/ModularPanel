import {
    useEffect,
    useState,
} from "react"
import {
    Route,
    Routes,
    useLocation,
    useSearchParams,
} from "react-router"
import {
    camelize,
    isDevOrSuperAdmin,
    isSuperAdmin,
    parseQuery,
} from "App"
import { useMessage } from "Hooks"
import NotFound from "./NotFound"
import Test from "./Test"
import routes from "../Runnable/Routes"
import Unify from "../Components/Unify"
import * as Dependencies from "../Dependencies"
import BigFileUpload from "./Simulation/BigFileUpload"
import TabsSample from "./Samples/Tabs"
import Order from "./Order"
import Search from "./Search"
import Content from "./Content"
import Graph from "../Components/Graph/Graph"

let initialRoutes = routes
initialRoutes = [
    ...initialRoutes,
    {
        path: "/order",
        component: Order
    },
    {
        path: "/search",
        component: Search
    },
    {
        path: "/graph",
        component: Graph
    },
    {
        path: "/content",
        component: Content
    }
]
if (isDevOrSuperAdmin()) {
    initialRoutes = [
        ...initialRoutes,
        {
            path: "/bigFileUpload",
            component: BigFileUpload
        },
        {
            path: "/tabs",
            component: TabsSample
        }
    ]
}

const Routing = ({
    grandparent,
    greatGrandparent,
    greatGreatGrandparent,
    parent,
    progress,
    relatedItem,
    setProgress,
}) => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [allRoutes, setAllRoutes] = useState(initialRoutes)
    const [modulesRoutes, setModulesRoutes] = useState({})
    window.emptyRoutes = () => setAllRoutes(initialRoutes)
    const [params, setParams] = useState(parseQuery())
    const [renderCount, forceRerender] = useState(0)
    const location = useLocation()

    const {
        error,
        info,
        success,
        warning,
    } = useMessage()

    useEffect(() => {
        setParams(parseQuery())
    }, [location])

    useEffect(() => {
        forceRerender(prev => prev + 1)
    }, [location])

    useEffect(() => {
        const addRoutes = (module, moduleRoutes) => {
            setModulesRoutes(previousModulesRoutes => {
                const newModulesRoutes = {
                    ...previousModulesRoutes,
                    [module]: moduleRoutes
                }
                return newModulesRoutes
            })
            let newRoutes = []
            for (let i = 0; i < moduleRoutes.length; i++) {
                const moduleRoute = moduleRoutes[i]
                if (moduleRoute.superAdmin && !isSuperAdmin()) {
                    continue
                }
                moduleRoute.path.split("/").forEach(i => {
                    if (i !== camelize(i)) {
                        throw `Route path is not camelCased. Change ${i} to ${camelize(i)} in ${JSON.stringify(moduleRoute)}`
                    }
                })
                if (!allRoutes.find(route => route.path === moduleRoute.path)) {
                    newRoutes.push(moduleRoute)
                }
            }

            setAllRoutes(previousRoutes => {
                const previousRoutesAndNewRoutes = [...previousRoutes, ...newRoutes]
                const groupedRoutes = previousRoutesAndNewRoutes
                    .reduce((grouped, route) => {
                        if (grouped[route.path]) {
                            if (!grouped[route.path].includes(route.component)) {
                                grouped[route.path].push(route.component)
                            }
                        }
                        else {
                            grouped[route.path] = [route.component]
                        }
                        return grouped
                    }, {})
                for (let route in groupedRoutes) {
                    if (groupedRoutes[route].length > 1) {
                        // console.error("Duplicate route", groupedRoutes[route])
                    }
                }
                const combinedRoutes = [...new Set(previousRoutesAndNewRoutes)]
                    .sort((a, b) => a.path.localeCompare(b.path))
                combinedRoutes.forEach(i => i.isList = i.component?.toString().includes("jsxDEV(List"))
                return combinedRoutes
            })
        }
        for (const module in Dependencies) {
            const moduleRoutes = Dependencies[module][`${module}Routes`]
            if (moduleRoutes instanceof Function) {
                const routes = moduleRoutes(window.settings)
                if (routes && Array.isArray(routes)) {
                    addRoutes(module, routes)
                    addRoutes(module, routes)
                }
                else {
                    // console.warn(`Misconfiguration for routes of module ${module}. A function, but not returning an array.`, moduleRoutes)
                }
            }
            else {
                if (moduleRoutes && Array.isArray(moduleRoutes)) {
                    addRoutes(module, moduleRoutes)
                    addRoutes(module, moduleRoutes)
                }
                else {
                    // console.warn(`Misconfiguration for routes of module ${module}. Not returning an array.`, moduleRoutes)
                }
            }
        }
    }, [])

    useEffect(() => {
        window.routes = allRoutes
    }, [allRoutes])

    useEffect(() => {
        window.modulesRoutes = modulesRoutes
    }, [modulesRoutes])

    return <Routes>
        <Route
            element={<Test />}
            path="/test"
        />
        {
            allRoutes
                .filter(entity => {
                    if (entity.superAdmin === true) {
                        return isSuperAdmin()
                    }
                    else {
                        return true
                    }
                })
                .map(route => {
                    return <Route
                        element={
                            <Unify
                                component={<>
                                    {route.component}
                                </>}
                                error={error}
                                grandparent={grandparent}
                                greatGrandparent={greatGrandparent}
                                greatGreatGrandparent={greatGreatGrandparent}
                                info={info}
                                isSuperAdmin={isSuperAdmin()}
                                parent={parent}
                                progress={progress}
                                query={searchParams.toString()}
                                relatedItem={relatedItem}
                                setProgress={setProgress}
                                success={success}
                                warning={warning}
                                {...params}
                            />
                        }
                        key={route.path}
                        path={route.path}
                    />
                })
        }
        <Route
            element={<NotFound />}
            path="*"
        />
    </Routes>
}

export default Routing
