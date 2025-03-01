import {
    useContext,
    useEffect,
    useState,
} from "react"
import {
    get,
    post,
} from "App"
import { EntityContext } from "Contexts"
import {
    DialogForm,
    Select,
} from "Form"

const LevelsDialog = () => {

    const { entity: course } = useContext(EntityContext)
    const [levels, setLevels] = useState([])

    useEffect(() => {
        get("/level/all").then(data => {
            setLevels(data)
        }, e => {
            console.log(e)
        })
    }, [])

    const inputs = <>
        <Select
            options={levels}
            choose={entity => entity.id}
            display={entity => entity.title}
            placeholder="CoursesLevel"
            property="LevelId"
        />
    </>

    const save = ({
        data,
        error,
        reloadEntity,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(`/course/setLevel?courseId=${course.id}`, data)
            .then(data => {
                setProgress(false)
                success("CoursesLevelWasSet!")
                reloadEntity(entity)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <DialogForm
        entityType="Course"
        title="CoursesManageLevel"
        inputs={inputs}
        okAction={save}
    />
}

export default LevelsDialog
