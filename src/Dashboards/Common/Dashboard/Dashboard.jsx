import {
    useEffect,
    useState,
} from "react"
import Tooltip from "@mui/material/Tooltip"
import CachedIcon from "@mui/icons-material/Cached"
import {
    get,
    t,
    url,
} from "App"
import {
    useLocalStorage,
    useMessage,
    useTop,
} from "Hooks"
import {
    Browse,
    Progress,
} from "Panel"
import { useEntitySettings } from "Settings"
import useDashboard from "../Hooks/UseDashboard"
import Block from "./Block"

const Dashboard = () => {

    const {
        dashboardStyle
    } = useDashboard()

    const { getSetting } = useEntitySettings()
    const { error } = useMessage()
    const [open, setOpen] = useState(false)
    const [svg, setSvg] = useState()
    const [progress, setProgress] = useState()
    const [dashboardKey, setDashboardKey] = useLocalStorage({
        initialValue: "",
        defaultValue: "",
        key: `dashboard`
    })
    const [dashboard, setDashboard] = useState({})
    const [blocks, setBlocks] = useState([])

    useTop({
        title: "InfraDashboard",
    })

    const load = () => {
        const apiUrl = url({
            path: "/dashboards/data",
            query: {
                dashboard: dashboardKey
            }
        })
        setProgress(true)
        get(apiUrl)
            .then(data => {
                const {
                    blocks,
                    dashboard,
                } = data || {}
                setDashboard(dashboard)
                setSvg(getSetting(dashboard, "svg"))
                setBlocks(blocks)
                setProgress(false)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    useEffect(() => {
        load()
    }, [dashboardKey])

    const reloadAction = <span
        className="cursor-pointer"
        onClick={() => load()}
    >
        <Tooltip
            disableInteractive
            title={t("InfraReload")}
        >
            <CachedIcon className="dark:fill-white font-light fill-slate-600 dark:fill-slate-300" />
        </Tooltip>
    </span>

    const dashboardBrowser = <Browse
        entityType="Dashboard"
        headers={<><th>InfraTitle</th></>}
        onChange={entity => setDashboardKey(entity.key)}
        open={open}
        row={entity => <><td>{entity.title}</td></>}
        setOpen={setOpen}
    />

    return progress
        ?
        <Progress />
        :
        dashboard
            ?
            <>
                <div className="flex items-center justify-between my-4 ">
                    <span
                        className="font-semibold text-2xl cursor-pointer"
                        onClick={e => setOpen(true)}
                    >
                        {dashboardBrowser}
                        {dashboard.title}
                    </span>
                    <span className="flex gap-2">
                        {reloadAction}
                        {
                            svg &&
                            <span
                                className="w-6 aspect-square text-slate-600 dark:text-slate-300"
                                dangerouslySetInnerHTML={{
                                    __html: svg
                                }}
                            />
                        }
                    </span>
                </div>
                <div className={dashboardStyle}>
                    {
                        blocks.map(block => <Block
                            block={block}
                            key={block.id}
                        />)
                    }
                </div>
            </>
            :
            <div>{dashboardKey}</div>

}

export default Dashboard
