import {
    useEffect,
    useState,
} from "react"
import {
    get,
    parseQuery,
} from "App"
import {
    Page,
    RichText,
} from "Panel"
import { useMessage } from "Hooks"

const ViewCourse = ({ setProgress }) => {

    const [data, setData] = useState()
    const { error } = useMessage()
    const { id } = parseQuery()

    useEffect(() => {
        setProgress(true)
        get(`/course/getForView?id=${id}`)
            .then(data => {
                setProgress(false)
                setData(data)
            }, e => {
                setProgress(false)
                error(e)
            })
    }, [])

    const { course, content, lessons } = data || {}
    const { images } = course?.relatedItems || {}

    return <Page
        breadcrumb={[
            {
                title: "CoursesCourses",
                link: "/courses/courses"
            },
            {
                title: "This course",
                link: "/courses/courses?title="
            }
        ]}
        className="px-6 prose max-w-none"
        title="CoursesCourse"
    >
        <h1>{course?.title}</h1>
        <p>{course?.summary}</p>
        <hr />
        <RichText content={content} />
        <hr />
        <h2>Lessons</h2>
        <ul>
            {
                lessons?.map(lesson => <li key={lesson.id}>
                    <div className="flex items-center gap-6">
                        <h3>{lesson.title}</h3>
                        <span className="mt-6">{lesson.minutes && `${lesson.minutes} Minutes`}</span>
                    </div>
                    <p>{lesson.description}</p>
                    {
                        lesson.relatedItems.files?.length > 0 &&
                        <>
                            <div>Files</div>
                            <ul>
                                {
                                    lesson.relatedItems.files?.map(file => <li key={file.id}>
                                        <a href={file.relatedItems.fileUrl}>{file.title}</a>
                                    </li>)
                                }
                            </ul>
                        </>
                    }
                    {
                        lesson.relatedItems?.videoUrl &&
                        <>
                            <div>Video</div>
                            <video
                                className="w-full md:w-[700px] h-full mx-auto"
                                controls
                                src={lesson.relatedItems?.videoUrl}
                            >
                                Your browser does not support HTML video.
                            </video>
                        </>
                    }

                </li>)
            }
        </ul>
    </Page>
}

export default ViewCourse
