import {
    Boolean,
    Enum,
    List,
    Text,
    Title,
} from "List"
import { TaskCard } from "TasksCommon"
import TaskForm from "./Form"
import DoerFilter from "../Doer/Filter"
import ListActions from "./ListActions"
import EntityActions from "./EntityActions"

const filters = <>
    <Title />
    <Text
        placeholder="InfraDescription"
        property="Description"
    />
    <Enum
        entityType="TaskState"
        placeholder="InfraState"
        property="StateId"
    />
    <DoerFilter placeholder="TasksFilterDoer" />
    <Boolean
        falseLabel="No"
        nullable
        property="Urgent"
        trueLabel="Yes"
    />
</>

const sorts = [
    {
        caption: "Newer",
        direction: "Descending",
        property: "Id"
    },
    {
        caption: "Older",
        direction: "Ascending",
        property: "Id"
    },
    {
        caption: "More worked on",
        direction: "Descending",
        property: "DurationInMinutes"
    },
    {
        caption: "Less worked on",
        direction: "Ascending",
        property: "DurationInMinutes"
    }
]

const Tasks = () => {
    return <List
        card={TaskCard}
        create={TaskForm}
        entityActions={EntityActions}
        entityType="Task"
        filters={filters}
        hasDelete
        hasEdit
        listActions={ListActions}
        multicolumn
        notUpdatingQuery
        sorts={sorts}
        title="TasksTasks"
    />
}

export default Tasks
