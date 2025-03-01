import {
    useContext,
    useEffect,
    useState,
} from "react"
import ApartmentIcon from "@mui/icons-material/Apartment"
import {
    get,
    isDevOrSuperAdmin,
    post,
} from "App"
import { PanelContext } from "Contexts"
import { useMessage } from "Hooks"
import {
    Browse,
    HeaderAction,
    HolismIcon,
    SimpleText,
} from "Panel"

const ChooseTenant = () => {

    const { error } = useMessage()
    const [open, setOpen] = useState(false)
    const [progress, setProgress] = useState(true)
    const {
        tenant,
        setTenant
    } = useContext(PanelContext)

    const load = () => {
        setProgress(true)
        get("/tenant/current")
            .then(data => {
                setProgress(false)
                setTenant(data)
            }, e => {
                setProgress(false)
                console.log(e)
            })
    }

    useEffect(() => {
        load()
    }, [])

    const set = tenant => {
        setProgress(true)
        post(`/tenant/setCurrent?tenant=${tenant.key}`)
            .then(data => {
                setProgress(false)
                load()
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    const show = <span className="flex gap-0.5 items-center">
        <HolismIcon
            className="w-5 h-5"
            icon={ApartmentIcon}
        />
        <SimpleText className="text-xs text-slate-600">
            {tenant?.displayName}
        </SimpleText>
    </span>

    const tenantsBrowser = <Browse
        entityType="Tenant"
        headers={<><th>InfraTitle</th></>}
        onChange={entity => set(entity)}
        open={open}
        row={entity => <><td>{entity.displayName}</td></>}
        setOpen={setOpen}
    />

    return isDevOrSuperAdmin() &&
        <>
            {tenantsBrowser}
            <HeaderAction
                onClick={() => setOpen(!open)}
                progress={progress}
                show={show}
                title="TenantsChoosingTenant"
            />
        </>
}

export default ChooseTenant
