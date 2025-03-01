import {
    useEffect,
    useState,
} from "react"
import { get } from "App"
import { useMessage } from "Hooks"
import { Select } from "Form"

const SocialNetworkField = () => {

    const { error } = useMessage()

    const [SocialNetworks, setSocialNetworks] = useState([])
    const [SocialNetworkProgress, setSocialNetworkProgress] = useState(false)

    useEffect(() => {
        setSocialNetworkProgress(true)
        get("/socialNetwork/all")
            .then(data => {
                setSocialNetworks(data)
                setSocialNetworkProgress(false)
            }, e => {
                setSocialNetworkProgress(false)
                error(e)
            })
    }, [])

    return <>
        <Select
            property="SocialNetworkId"
            placeholder="ContactsSocialNetwork"
            options={SocialNetworks}
            display={i => i.title}
            choose={i => i.id}
            loading={SocialNetworkProgress}
            required
        />
    </>
}

export default SocialNetworkField
