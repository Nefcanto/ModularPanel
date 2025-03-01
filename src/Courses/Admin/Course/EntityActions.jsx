import VisibilityIcon from "@mui/icons-material/Visibility"
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import { post } from "App"
import { EntityAction } from "List"
import {
    ManageCategories,
    ManageTags,
} from "NewTaxonomy"
import RejectCourse from "./Reject"

const entityActions = entity => {

    const approve = ({
        error,
        setEntity,
        setProgress,
        success,
    }) => {

        setProgress(true)
        post(`/course/approve/${entity.id}`)
            .then(data => {
                setProgress(false)
                success("CoursesCourseIsApproved")
                setEntity(data)
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <>
        <ManageCategories />
        <ManageTags />
        <EntityAction
            goTo={`/courses/viewCourse?id=${entity.id}`}
            icon={VisibilityIcon}
            title="CoursesView"
        />

        {
            (entity.state != "Approved") &&
            <EntityAction
                color="text-green-400"
                icon={CheckIcon}
                onClick={approve}
                title="CoursesApprove"
            />

        }
        {
            entity.state != "Rejected" &&
            <EntityAction
                color="text-red-400"
                dialog={RejectCourse(entity)}
                icon={CloseIcon}
                title="CoursesReject"
            />
        }
    </>
}

export default entityActions
