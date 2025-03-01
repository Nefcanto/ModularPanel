import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted"
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered"
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined"
import MarkButton from "./MarkButton"
import BlockButton from "./BlockButton"
import Toolbar from "./Toolbar"

const SimpleToolbar = ({ editor }) => {
    return <Toolbar>
        <MarkButton
            format="bold"
            icon={FormatBoldIcon}
            title="Bold"
        />
        <MarkButton
            format="italic"
            icon={FormatItalicIcon}
            title="Italic"
        />
        <MarkButton
            format="underline"
            icon={FormatUnderlinedIcon}
            title="UnderLine"
        />
        <BlockButton
            format="numbered-list"
            icon={FormatListNumberedIcon}
            title="Numbered List"
        />
        <BlockButton
            format="bulleted-list"
            icon={FormatListBulletedIcon}
            title="Bulleted List"
        />
    </Toolbar>
}

export default SimpleToolbar
