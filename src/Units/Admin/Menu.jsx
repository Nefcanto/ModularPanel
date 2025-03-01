import SquareFootIcon from "@mui/icons-material/SquareFoot"
import ViewInArIcon from "@mui/icons-material/ViewInAr"
import StraightenIcon from "@mui/icons-material/Straighten"

const UnitsMenu = [
    {
        title: "UnitsUnits",
        icon: SquareFootIcon,
        children: [
            {
                title: "UnitsDimensions",
                path: "/units/dimensions"
            },
            {
                title: "UnitsUnits",
                path: "/units/units"
            },
            {
                title: "UnitsPrefixes",
                path: "/units/prefixes"
            },
            {
                title: "UnitsConversions",
                path: "/units/conversions"
            }
        ]
    }
]

export default UnitsMenu
