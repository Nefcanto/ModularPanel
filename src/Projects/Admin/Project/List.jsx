import {
    Boolean,
    List,
    TitleSort,
} from "List"
import ListActions from "./ListActions"
import ProjectForm from "./Form"
import Row from "./Row"
import EntityActions from "./EntityActions"

const filters = <>
    <Boolean
        label="ProjectsIsRecommended"
        property="IsRecommended"
    />
</>

const sorts = [
    ...TitleSort
]

const headers = <>
    <th></th>
    <th start>InfraTitle</th>
    <th>GeoLocation</th>
    <th>ProjectsIsActive</th>
    <th>ProjectsIsRecommended</th>
</>

const Projects = () => {
    return <List
        entityActions={EntityActions}
        entityType="Project"
        filters={filters}
        hasActivation
        hasContent
        hasDelete
        hasEdit
        headers={headers}
        listActions={ListActions}
        module="Projects"
        row={Row}
        sorts={sorts}
        title="ProjectsProjects"
        upsert={ProjectForm}
    />
}

export default Projects
