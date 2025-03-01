import {
    useEffect,
    useState,
} from "react"
import { useNavigate } from "react-router"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import PersonIcon from "@mui/icons-material/Person"
import SettingsIcon from "@mui/icons-material/Settings"
import app, {
    get,
    t,
} from "App"
import HolismIcon from "../Components/HolismIcon"

const Item = ({
    background,
    handler,
    icon,
    title,
    url,
}) => <li
    className={background + " transition-colors dark:bg-gray-400 dark:hover:bg-gray-600 me-1 ms-1 rounded-md cursor-pointer"}
    onClick={handler}
>
        <a
            className="h-9 w-12 flex items-center justify-center dark:hover:text-gray-100"
            href={url}
            title={t(title)}
        >
            <HolismIcon
                className="w-4 h-4 text-gray-900 dark:text-inherit"
                icon={icon}
            />
        </a>
    </li>

export default function User({ onClick }) {

    const navigate = useNavigate()
    const [entity, setEntity] = useState({})
    const [role] = useState(app.role())

    const loadEntity = () => {
        let url = "/contacts/get?"
        if (window.role) {
            url += `role=${window.role}&`
        }
        if (window.defaultPersonType) {
            url += `defaultPersonType=${window.defaultPersonType}`
        }
        get(url).then(data => setEntity(data), e => console.error(e))
    }

    useEffect(() => {
        loadEntity()
    }, [])

    return <div
        className="flex flex-col justify-center	"
        id="userPanel"
    >
        <div className="flex flex-col justify-center mt-4">
            <div className="flex flex-row gap-2 justify-center items-center mb-4 ">
                {
                    entity?.relatedItems?.imageUrl
                        ?
                        <img
                            className="w-12 h-12 rounded-full object-cover shadow-md border ms-1"
                            src={entity.relatedItems.imageUrl}
                        />
                        :
                        <HolismIcon
                            className="w-12 h-12 text-gray-400 ms-1"
                            icon={AccountCircleOutlinedIcon}
                        />
                }
                <div className="flex flex-col justify-center items-start">
                    <div className="text-center font-medium antialiased tracking-wide text-gray-800 dark:text-gray-300 transition-colors line-clamp-1">
                        {entity?.fullName}
                    </div>
                    <p className="text-center text-gray-400 text-sm line-clamp-1">{t(role)}</p>
                </div>
            </div>
            <ul className="flex items-center justify-center">
                <Item
                    background="bg-green-200 hover:bg-green-400"
                    handler={() => {
                        onClick()
                        navigate("/profile")
                    }}
                    icon={PersonIcon}
                    title="InfraProfile"
                />
                <Item
                    background="bg-blue-200 hover:bg-blue-400"
                    handler={() => {
                        onClick()
                        navigate("/settings")
                    }}
                    icon={SettingsIcon}
                    title="InfraSettings"
                />
                <Item
                    background="bg-red-200 hover:bg-red-400"
                    handler={() => app.signOut()}
                    icon={ExitToAppIcon}
                    title="InfraSignOut"
                />
            </ul>
        </div>
    </div>
}
