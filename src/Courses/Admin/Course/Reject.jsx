import { post } from "App"
import {
    DialogForm,
    LongText,
} from "Form"

const inputs = <>
    <LongText
        property="Reason"
        placeholder="CoursesReason"
        required
    />
</>

const RejectCourse = entity => ({
    reloadEntity,
    ...rest
}) => {

    const action = ({
        data,
        error,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(`/course/reject/${entity?.id}`, data)
            .then(data => {
                setProgress(false)
                success("CoursesCourseIsRejected")
                reloadEntity(entity)
            }, e => {
                setProgress(false)
                error(e)
            })
    }
    return <DialogForm
        {...rest}
        title="CoursesPleaseSpecifyTheReason"
        entityType="Course"
        inputs={inputs}
        okAction={action}
    />
}

export default RejectCourse
