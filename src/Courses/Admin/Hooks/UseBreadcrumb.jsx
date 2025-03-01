import CoursesRoutes from "../Routes"
import {
    equalTo,
    parseQuery,
    url,
} from "App"

const useCoursesBreadcrumb = ({
    path,
    query,
    parent,
}) => {

    const { entityType } = parseQuery()
    const isModuleRoute = false; // CoursesRoutes?.find(i => i.path == path)
    const hasModule =
        query["module"]?.toLowerCase() == "courses" ||
        entityType == "course" ||
        entityType == "courseContent".toLowerCase()

    if (isModuleRoute || hasModule) {
        return [
            {
                title: "CoursesCourses",
                link: path !== "/courses" && "/courses"
            },
            parent && {
                title: parent.title,
                link: url({
                    path: "/courses",
                    filters: [
                        equalTo("id", parent.id)
                    ]
                })
            }
        ]
    }
}

export default useCoursesBreadcrumb
