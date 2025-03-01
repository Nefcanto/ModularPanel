import ShuffleIcon from "@mui/icons-material/Shuffle"
import SearchIcon from "@mui/icons-material/Search"
import { post } from "App"
import {
    EntityAction,
    List,
    ListAction,
} from "List"
import {
    TypeFilters,
    TypeHeaders,
    TypeRow,
    TypeSorts,
} from "PartsCommon"
import { AssignSettings } from "Settings"

const listActions = <>
    <ListAction
        icon={SearchIcon}
        post="/type/findAll"
        superAdmin
        text="InfraFindAll"
        title="InfraFindAll"
    />
    <ListAction
        post="/type/setRandomDefaultImages"
        devOnly
        icon={ShuffleIcon}
        minCardinality={1}
        superAdmin
        text="PartsSetRandomImages"
        title="PartsSetRandomImages"
    />
</>

const entityActions = entity => {
    const setRandomDefaultImage = ({
        error,
        setEntity,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(`/type/setRandomDefaultImage?id=${entity.id}`)
            .then(data => {
                success("InfraDone")
                setProgress(false)
                setEntity(data)
            }, e => {
                error(e)
                setProgress(false)
            })
    }

    return <>
        <EntityAction
            devOnly
            icon={ShuffleIcon}
            onClick={params => setRandomDefaultImage(params)}
            superAdmin
            title="PartsSetRandomImages"
        />
        <AssignSettings />
    </>
}

const Types = () => {
    return <List
        entityActions={entityActions}
        type="type"
        filters={TypeFilters}
        headers={TypeHeaders}
        listActions={listActions}
        row={TypeRow(true)}
        sorts={TypeSorts}
        title="PartsTypes"
    />
}

export default Types
