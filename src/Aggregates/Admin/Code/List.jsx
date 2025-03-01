import VisibilityIcon from "@mui/icons-material/Visibility"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import ArchitectureIcon from "@mui/icons-material/Architecture"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import { post } from "App"
import {
    EntityAction,
    List,
    ListAction,
} from "List"
import CodeForm from "./Form"
import card from "./Card"

const listActions = () => {

    const execute = ({
        setProgress,
        error,
        success,
        reload,
    }) => {
        setProgress(true)
        post("/code/executeAll")
            .then(data => {
                setProgress(false)
                reload()
                success("InfraDone")
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <>
        <ListAction
            icon={PlayArrowIcon}
            onClick={execute}
            title="InfraExecution"
        />
    </>
}

const entityActions = entity => {

    const execute = ({
        error,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(`/code/execute?key=${entity.key}`)
            .then(data => {
                setProgress(false)
                success("InfraDone")
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <>
        <EntityAction
            goTo={`/aggregates/cubes?key=${entity.key}`}
            icon={VisibilityIcon}
            title="InfraView"
        />
        <EntityAction
            icon={PlayArrowIcon}
            onClick={execute}
            title="InfraExecution"
        />
        <EntityAction
            goTo={`/aggregates/structures?type=code&key=${entity.key}`}
            icon={ArchitectureIcon}
            title="AggregatesStructure"
        />
        {
            entity.relatedItems.hasParameters &&
            <EntityAction
                goTo={`/aggregates/parameters?type=code&key=${entity.key}`}
                icon={FilterAltIcon}
                title="InfraParameters"
            />
        }
    </>
}

const Codes = () => {
    return <List
        card={card}
        create={CodeForm}
        entityActions={entityActions}
        entityType="Code"
        hasDelete
        hasEdit
        listActions={listActions}
        title="InfraCodes"
    />
}

export default Codes
