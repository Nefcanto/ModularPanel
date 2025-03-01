import {
    DialogForm,
    LongText,
    Slug,
    Text,
    Title,
} from "Form"

const inputs = <>
    <Title />
    <Text
        property="Subtitle"
        placeholder="InfraSubtitle"
    />
    <Slug />
    <LongText
        property="Summary"
        placeholder="InfraSummary"
    />
</>

const ProjectForm = () => {
    return <DialogForm
        entityType="Project"
        humanReadableEntityType="ProjectsProject"
        inputs={inputs}
    />
}

export default ProjectForm
