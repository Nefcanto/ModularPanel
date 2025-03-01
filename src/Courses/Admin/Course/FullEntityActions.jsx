import MenuBookIcon from "@mui/icons-material/MenuBook"
import VisibilityIcon from "@mui/icons-material/Visibility"
import { EntityAction } from "List"
import { ManageImages } from "Media"
import { SetPrice } from "Pricing"
import { AssignAttributes } from "AttributesCommon"
import { ViewComments } from "Social"
import {
    ManageCategories,
    ManageTags,
} from "NewTaxonomy"
import {
    EntityFaqPage,
    EntitySeo,
} from "Seo"

const entityActions = entity => {

    return <>
        <EntityAction
            goTo={`/courses/viewCourse?id=${entity.id}`}
            icon={VisibilityIcon}
            title="CoursesView"
        />
        <EntitySeo />
        <EntityFaqPage />
        <ManageCategories />
        <ManageTags />
        <ManageImages />
        <SetPrice />
        <EntityAction
            goTo={`/courses/lessons?courseId=${entity.id}&pp=courses&pt=course&pid=${entity.id}`}
            icon={MenuBookIcon}
            title="CoursesManageLessons"
        />
        <AssignAttributes />
        <ViewComments />
    </>
}

export default entityActions
