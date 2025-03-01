import {
    useContext,
    useState,
} from "react"
import { useNavigate } from "react-router"
import Button from "@mui/material/Button"
import AddIcon from "@mui/icons-material/Add"
import {
    appendQueryToApiUrl,
    camelize,
    parseQuery,
    post,
    t,
} from "App"
import {
    DialogContext,
    ListContext,
} from "Contexts"
import { useMessage } from "Hooks"
import Unify from "../../Unify"
import HolismIcon from "../../HolismIcon"

const AddAction = () => {

    const navigate = useNavigate()
    const { error, success } = useMessage()
    const [progress, setProgress] = useState(false)
    const [open, setOpen] = useState(false)

    const {
        entityType,
        module,
    } = parseQuery()

    const {
        camelizedEntityType,
        camelizedModule,
        create,
        reload,
        upsert,
        upsertionIcon,
        upsertionText,
    } = useContext(ListContext)

    const createItem = () => {
        const data = {}
        new URLSearchParams(window.location.search).forEach((value, key) => {
            const dataKeys = Object.keys(data).map(key => key.toLowerCase())
            if (dataKeys.includes(key.toLowerCase())) {
                return
            }
            data[key] = value
        })
        setProgress(true)
        let url = `/${camelizedEntityType}/create`
        url = appendQueryToApiUrl(url)
        post(url, data)
            .then(data => {
                setProgress(false)
                success(t("InfraItemCreatedSuccessfully"))
                reload()
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    const handleClick = () => {
        if (typeof create === "string") {
            const currentURL = new URL(window.location)
            const url = new URL(create, currentURL)
            url.searchParams.set("module", module ? camelize(module) : camelizedModule)
            url.searchParams.set("entityType", entityType ? camelize(entityType) : camelizedEntityType)
            const augmentedUrl = url.toString().replace(currentURL.origin, "")
            navigate(augmentedUrl)
        }
        else if (typeof create === "boolean") {
            createItem()
        }
        else {
            setOpen(true)
        }
    }

    const icon = upsertionIcon
        ?
        <HolismIcon icon={upsertionIcon} />
        :
        <AddIcon />

    return <DialogContext.Provider
        value={{
            open,
            setOpen
        }}
    >
        <div>
            {
                create && typeof create !== "string" && open &&
                <Unify
                    component={create}
                />
            }
            {
                upsert && typeof upsert !== "string" && open &&
                <Unify
                    component={upsert}
                />
            }
            {
                create || upsert
                    ?
                    <Button
                        className="bg-green-200 text-gray-900 border-gray-400 hover:bg-green-400 mt-2 lg:mt-0 me-2 dark:bg-green-200 dark:text-black/80 dark:hover:bg-green-300 transition-all duration-300"
                        disabled={progress}
                        onClick={handleClick}
                        startIcon={icon}
                        variant="outlined"
                    >
                        {
                            (upsertionText)
                                ?
                                t(upsertionText)
                                :
                                t("InfraCreate")
                        }
                    </Button>
                    :
                    null
            }
        </div>
    </DialogContext.Provider>
}

export default AddAction
