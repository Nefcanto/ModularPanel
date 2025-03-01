import {
    useContext,
    useEffect,
    useState,
} from "react"
import HomeIcon from "@mui/icons-material/Home"
import { get } from "App"
import { PanelContext } from "Contexts"
import { HeaderAction } from "Panel"

const HomePage = () => {

    const [domain, setDomain] = useState("")
    const [progress, setProgress] = useState(true)
    const { tenant } = useContext(PanelContext)

    const load = () => {
        setProgress(true)
        if (window && window.tenant) {
            setDomain(tenant?.domain)
            setProgress(false)
        }
        else {
            get("/tenant/current")
                .then(data => {
                    setProgress(false)
                    setDomain(data.domain)
                }, e => {
                    setProgress(false)
                })
        }
    }

    useEffect(() => {
        load()
    }, [tenant])

    return <HeaderAction
        icon={HomeIcon}
        progress={progress}
        title="TenantsHomePage"
        url={`https://${domain}`}
    />
}

export default HomePage
