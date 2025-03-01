import { Images } from "Media"

const CourseImages = ({
    grandParentEntity,
    parentEntity,
    progress,
}) => {
    return !progress && <Images
        breadcrumbItems={[
            {
                title: "CoursesCourses",
                link: "/courses/courses"
            },
            parentEntity && {
                title: parentEntity.title,
                link: `/courses/courses?title=containing_${parentEntity.title}`
            },
            grandParentEntity && {
                title: grandParentEntity.title,
            },
        ]}
    />
}

export default CourseImages
