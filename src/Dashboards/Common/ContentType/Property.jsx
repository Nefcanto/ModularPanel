import { useContext } from "react"
import BarChartIcon from "@mui/icons-material/BarChart"
import NumbersIcon from "@mui/icons-material/Numbers"
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted"
import GridOnIcon from "@mui/icons-material/GridOn"
import MapIcon from "@mui/icons-material/Map"
import { EntityContext } from "Contexts"
import { EnumItem } from "Panel"

const ContentTypeProperty = () => {

    const { entity } = useContext(EntityContext)

    const getIcon = enumItem => {
        switch (enumItem.key) {
            case "chart":
                return BarChartIcon
            case "metric":
                return NumbersIcon
            case "list":
                return FormatListBulletedIcon
            case "table":
                return GridOnIcon
            case "map":
                return MapIcon
            default:
                return null
        }
    }

    return <EnumItem
        enumItem={entity.relatedItems.contentType}
        getIcon={getIcon}
    />
}

export default ContentTypeProperty
