import {
    useContext,
    useState,
} from "react"
import { useSearchParams } from "react-router"
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation"
import {
    camelize,
    post,
    t,
} from "App"
import {
    DialogContext,
    ListContext,
} from "Contexts"
import ListAction from "./ListAction"
import Radio from "../../Form/Fields/Radio"
import DialogForm from "../../Form/DialogForm"

const options = [
    {
        value: 10
    },
    {
        value: 100
    },
    {
        value: 1_000
    },
    {
        value: 10_000
    },
    {
        value: 100_000
    },
    {
        value: 1_000_000
    },
    {
        value: 10_000_000
    },
    {
        value: 100_000_000
    },
    {
        value: 1_000_000_000
    }
]

const inputs = <>
    <Radio
        choose={entity => entity.value}
        display={entity => entity.value?.digitGroup()}
        options={options}
        placeholder="InfraCount"
        property="Count"
        required
    />
</>

const FakeDataAction = () => {

    let [searchParams] = useSearchParams()

    const [open, setOpen] = useState(false)

    const {
        entityType,
        part,
        reload,
        type,
    } = useContext(ListContext)

    const insertData = ({
        currentEntity,
        data,
        error,
        setProgress,
        success,
    }) => {
        const { Count: count } = data
        let url = window.settings?.NodeApi
            ?
            `/${camelize(part)}/${camelize(type)}`
            :
            `/${camelize(entityType)}`
        url += `/insertFakeData?count=${count}&${searchParams}`
        setProgress(true)
        post(url)
            .then(data => {
                setProgress(false)
                setOpen(false)
                success("InfraFakeDataInserted")
                reload()
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <DialogContext.Provider
        value={{
            open,
            setOpen
        }}
    >
        {
            open &&
            <DialogForm
                explanations="InfraDueToDuplicateRecordsAPercentageOfDataMightBeInserted"
                inputs={inputs}
                okAction={insertData}
                okText="InfraInsert"
                tiny
                title={t("InfraFakeDataInsertion")}
            />
        }
        <ListAction
            icon={LocalGasStationIcon}
            onClick={() => setOpen(true)}
            title="InfraFakeData"
        />
    </DialogContext.Provider>
}

export default FakeDataAction
