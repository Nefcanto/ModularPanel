import BlogPost from "./Blog/Admin/Post/Entity.jsx"
import BlogSequencePost from "./Blog/Admin/SequencePost/Entity.jsx"
import BrandsBrand from "./Brands/Common/Brand/Entity.jsx"
import ContentsItem from "./Contents/Admin/Item/Entity.jsx"
import CoursesCourse from "./Courses/Common/Course/Entity.jsx"
import FlowsStage from "./Flows/Common/Stage/Entity.jsx"
import FormsField from "./Forms/Admin/Field/Entity.jsx"
import GeoAdministrativeDivision from "./Geo/Admin/AdministrativeDivision/Entity.jsx"
import GeoCity from "./Geo/Admin/City/Entity.jsx"
import GeoCityDivision from "./Geo/Admin/CityDivision/Entity.jsx"
import GeoCountry from "./Geo/Admin/Country/Entity.jsx"
import MediaImage from "./Media/Common/Image/Entity.jsx"
import ProductsProduct from "./Products/Admin/Product/Entity.jsx"
import ProjectsProject from "./Projects/Admin/Project/Entity.jsx"
import QuestionsQuestion from "./Questions/Admin/Question/Entity.jsx"
import SalonsSalon from "./Salons/Admin/Salon/Entity.jsx"
import SettingsOption from "./Settings/Common/Option/Entity.jsx"

const EntityRenderers = ({
    entity,
    entityType,
    fallback,
    module,
}) => {

    let Renderer = () => fallback || (
        typeof entity === "string" && entity.toLowerCase() === "system"
        ?
        <div>System</div>
        :
        <div>NoRendererFor{module}{entityType}</div>
    )
    const moduleEntityType = module + entityType
    switch (moduleEntityType)
    {
        case "BlogPost":
        case "BlogBlogPost":
            Renderer = BlogPost
            break
        case "BlogSequencePost":
        case "BlogBlogSequencePost":
            Renderer = BlogSequencePost
            break
        case "BrandsBrand":
        case "BrandsBrandsBrand":
            Renderer = BrandsBrand
            break
        case "ContentsItem":
        case "ContentsContentsItem":
            Renderer = ContentsItem
            break
        case "CoursesCourse":
        case "CoursesCoursesCourse":
            Renderer = CoursesCourse
            break
        case "FlowsStage":
        case "FlowsFlowsStage":
            Renderer = FlowsStage
            break
        case "FormsField":
        case "FormsFormsField":
            Renderer = FormsField
            break
        case "GeoAdministrativeDivision":
        case "GeoGeoAdministrativeDivision":
            Renderer = GeoAdministrativeDivision
            break
        case "GeoCity":
        case "GeoGeoCity":
            Renderer = GeoCity
            break
        case "GeoCityDivision":
        case "GeoGeoCityDivision":
            Renderer = GeoCityDivision
            break
        case "GeoCountry":
        case "GeoGeoCountry":
            Renderer = GeoCountry
            break
        case "MediaImage":
        case "MediaMediaImage":
            Renderer = MediaImage
            break
        case "ProductsProduct":
        case "ProductsProductsProduct":
            Renderer = ProductsProduct
            break
        case "ProjectsProject":
        case "ProjectsProjectsProject":
            Renderer = ProjectsProject
            break
        case "QuestionsQuestion":
        case "QuestionsQuestionsQuestion":
            Renderer = QuestionsQuestion
            break
        case "SalonsSalon":
        case "SalonsSalonsSalon":
            Renderer = SalonsSalon
            break
        case "SettingsOption":
        case "SettingsSettingsOption":
            Renderer = SettingsOption
            break
    }

    return <Renderer entity={entity} />
}

export default EntityRenderers
    