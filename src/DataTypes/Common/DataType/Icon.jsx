import AccessTimeIcon from "@mui/icons-material/AccessTime"
import AttachFileIcon from "@mui/icons-material/AttachFile"
import AudiotrackIcon from "@mui/icons-material/Audiotrack"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"
import ChecklistIcon from "@mui/icons-material/Checklist"
import CodeIcon from "@mui/icons-material/Code"
import ColorLensIcon from "@mui/icons-material/ColorLens"
import DoneIcon from "@mui/icons-material/Done"
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered"
import ImageIcon from "@mui/icons-material/Image"
import LinkIcon from "@mui/icons-material/Link"
import PercentIcon from "@mui/icons-material/Percent"
import PhotoSizeSelectLargeIcon from "@mui/icons-material/PhotoSizeSelectLarge"
import RttIcon from "@mui/icons-material/Rtt"
import TagIcon from "@mui/icons-material/Tag"
import TextSnippetIcon from "@mui/icons-material/TextSnippet"
import TheatersIcon from "@mui/icons-material/Theaters"
import TitleIcon from "@mui/icons-material/Title"
import ToggleOffIcon from "@mui/icons-material/ToggleOff"
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline"

const icon = enumItem => {
    switch (enumItem.key) {
        case "audio":
            return AudiotrackIcon
        case "boolean":
            return ToggleOffIcon
        case "code":
            return CodeIcon
        case "color":
            return ColorLensIcon
        case "date":
            return CalendarMonthIcon
        case "dateTime":
            return ViewTimelineIcon
        case "file":
            return AttachFileIcon
        case "image":
            return ImageIcon
        case "integer":
            return TagIcon
        case "link":
            return LinkIcon
        case "longText":
            return TextSnippetIcon
        case "multiChoice":
            return ChecklistIcon
        case "naturalNumber":
            return FormatListNumberedIcon
        case "nullableBoolean":
            return CheckBoxOutlineBlankIcon
        case "percent":
            return PercentIcon
        case "realNumber":
            return TagIcon
        case "richText":
            return RttIcon
        case "singleChoice":
            return DoneIcon
        case "svg":
            return PhotoSizeSelectLargeIcon
        case "text":
            return TitleIcon
        case "time":
            return AccessTimeIcon
        case "video":
            return TheatersIcon
        default:
            return null
    }
}

export default icon
