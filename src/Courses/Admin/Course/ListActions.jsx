import Face2Icon from "@mui/icons-material/Face2"
import ApprovalIcon from "@mui/icons-material/Approval"
import { post } from "App"
import { ListAction } from "List"
import { DefineAttributes } from "Attributes"
import {
    DefineCategories,
    DefineTags,
} from "NewTaxonomy"

const listActions = () => {

    const updateInstructorPersonGuidsCsv = ({
        error,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post("/course/updateInstructorPersonGuidsCsv").then(data => {
            setProgress(false)
            success("InfraDone")
        }, e => {
            setProgress(false)
            error(e)
        })
    }

    return <>
        <DefineCategories />
        <DefineTags />
        <ListAction
            icon={ApprovalIcon}
            notApplicableToEntities
            title="CoursesLevels"
            url="/courses/levels"
        />
        <DefineAttributes />
        <ListAction
            icon={Face2Icon}
            notApplicableToEntities
            onClick={updateInstructorPersonGuidsCsv}
            superAdmin
            title="CoursesFix"
        />
    </>
}

export default listActions
