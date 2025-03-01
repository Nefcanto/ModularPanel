import AttachFileIcon from "@mui/icons-material/AttachFile"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import { t } from "App"
import {
    EntityAction,
    Image,
    List,
    Title,
    TitleSubtitle,
    UploadVideoAction,
    ValueWithTitle,
} from "List"
import { ManageEntityFlashcards } from "Flashcards"
import LessonForm from "./Form"

const filters = <>
    <Title />
</>

const headers = <>
    <th></th>
    <th>InfraTitle</th>
    <th>CoursesDuration</th>
</>

const row = entity => <>
    <Image />
    <TitleSubtitle
        subtitle={entity.slug}
        title={<ValueWithTitle
            title={entity.description}
            value={entity.title}
        />}
    />
    <td>{entity.minutes} {entity.minutes && t("CoursesMinutes")}</td>
</>

const entityActions = entity => <>
    <EntityAction
        title="CoursesManageFiles"
        icon={AttachFileIcon}
        goTo={`/courses/lessonFiles?entityGuid=${entity?.guid}&entityType=${entity.relatedItems.entityType}&gpp=courses&gpt=course&gpid=${entity.courseId}&pp=courses&pt=lesson&pid=${entity.id}`}
    />
    {
        entity.videoGuid &&
        <EntityAction
            title="InfraPlay"
            icon={PlayArrowIcon}
            goTo={entity.relatedItems.videoUrl}
        />
    }
    <UploadVideoAction
        uploadUrl={`/lesson/uploadVideo?id=${entity.id}`}
    />
    <ManageEntityFlashcards />
</>

const Lessons = ({
    parentEntity,
    progress,
}) => {

    return progress || <List
        breadcrumbItems={[
            {
                title: "CoursesCourses",
                link: "/courses/courses"
            },
            {
                title: parentEntity?.title,
                link: `/courses/courses?title=${parentEntity?.title}`
            }
        ]}
        create={LessonForm}
        entityActions={entityActions}
        entityType="Lesson"
        filters={filters}
        hasContent
        hasDelete
        hasEdit
        headers={headers}
        row={row}
        title="CoursesLessons"
    />
}

export default Lessons
