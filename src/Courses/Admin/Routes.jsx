import Courses from "./Course/List"
import FullCourses from "./Course/FullList"
import Instructors from "./Instructor/List"
import Levels from "./Level/List"
import {
    LessonFiles,
    Lessons,
} from "CoursesCommon"
import ViewCourse from "./Course/View"

const CoursesRoutes = ({ SinglePanel }) => [
    {
        path: "/courses/courses",
        component: SinglePanel ? FullCourses : Courses
    },
    {
        path: "/courses/levels",
        component: Levels
    },
    {
        path: "/courses/lessons",
        component: Lessons
    },
    {
        path: "/courses/lessonFiles",
        component: LessonFiles
    },
    {
        path: "/courses/instructors",
        component: Instructors
    },
    {
        path: "/courses/viewCourse",
        component: ViewCourse
    }
]

export default CoursesRoutes
