import ChatIcon from "@mui/icons-material/Chat"
import CloudIcon from "@mui/icons-material/Cloud"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"
import HeadphonesIcon from "@mui/icons-material/Headphones"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PreviewIcon from "@mui/icons-material/Preview"
import SettingsIcon from "@mui/icons-material/Settings"
import SmartphoneIcon from "@mui/icons-material/Smartphone"
import SportsEsportsIcon from "@mui/icons-material/SportsEsports"
import TvIcon from "@mui/icons-material/Tv"
import WatchIcon from "@mui/icons-material/Watch"
import WebIcon from "@mui/icons-material/Web"

const icon = enumItem => {
    switch (enumItem.key || enumItem.id) {
        case "api":
            return CloudIcon
        case "watch":
            return WatchIcon
        case "headset":
            return HeadphonesIcon
        case "tv":
            return TvIcon
        case "panel":
            return WebIcon
        case "site":
            return PreviewIcon
        case "app":
            return SmartphoneIcon
        case "console":
            return SportsEsportsIcon
        case "kiosk":
            return PointOfSaleIcon
        case "chatbot":
            return ChatIcon
        case "car":
            return DirectionsCarIcon
        case "all":
            return SettingsIcon
        default:
            return null
    }
}

export default icon
