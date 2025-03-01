import { Files } from "Media"

const LessonFiles = ({
    grandparentEntity,
    parentEntity,
    progress,
}) => {

    return !progress &&
        <Files

            breadcrumbItems={
                [
                    {
                        title: "CoursesCourses",
                        link: "/courses/courses"
                    },
                    {
                        title: grandparentEntity?.title,
                        link: `/courses/courses?title=${grandparentEntity?.title}`
                    },
                    {
                        title: parentEntity?.title,
                        link: `/courses/lessons?title=${parentEntity?.title}&pp=courses&pt=course&pid=${grandparentEntity?.id}`
                    }
                ]
            }
        />
}

export default LessonFiles
