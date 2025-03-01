import ShuffleIcon from "@mui/icons-material/Shuffle"
import SearchIcon from "@mui/icons-material/Search"
import { post } from "App"
import {
    EntityAction,
    List,
    ListAction,
} from "List"
import {
    EntityTypeFilters,
    EntityTypeHeaders,
    EntityTypeRow,
    EntityTypeSorts,
} from "ModulesCommon"
import { AssignSettings } from "Settings"

const listActions = <>
    <ListAction
        icon={SearchIcon}
        post="/entityType/findAll"
        superAdmin
        text="InfraFindAll"
        title="InfraFindAll"
    />
    <ListAction
        post="/entityType/setRandomDefaultImages"
        devOnly
        icon={ShuffleIcon}
        minCardinality={1}
        superAdmin
        text="ModulesSetRandomImages"
        title="ModulesSetRandomImages"
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
        post(`/entityType/setRandomDefaultImage?id=${entity.id}`)
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
            title="ModulesSetRandomImages"
        />
        <AssignSettings />
    </>
}

const EntityTypes = () => {
    return <List
        entityActions={entityActions}
        entityType="entityType"
        filters={EntityTypeFilters}
        headers={EntityTypeHeaders}
        listActions={listActions}
        row={EntityTypeRow(true)}
        sorts={EntityTypeSorts}
        title="ModulesEntityTypes"
    />
}

export default EntityTypes
