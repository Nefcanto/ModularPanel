import CodeIcon from "@mui/icons-material/Code"
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted"
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough"
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined"
import Looks3Icon from "@mui/icons-material/Looks3"
import Looks4Icon from "@mui/icons-material/Looks4"
import LooksOneIcon from "@mui/icons-material/LooksOne"
import LooksTwoIcon from "@mui/icons-material/LooksTwo"
import app from "App"
import MarkButton from "./MarkButton"
import BlockButton from "./BlockButton"
import ImageButton from "./ImageButton"
import AddComponentButton from "./AddComponentButton"
import AddRawHtml from "./AddRawHtml"
import GenerateData from "./GenerateData"
import TableSelector from "./TableSelector"
import TableContextMenu from "./TableContextMenu"
import Toolbar from "./Toolbar"
import isBlockActive from "./IsBlockActive"
import LinkButton from "./LinkButton"
import HorizontalRuleButton from "./HorizontalRuleButton"

const ComplexToolbar = ({
    editor,
    ...rest
}) => {

    const checkContentPolicy = window.checkContentPolicy || (() => true)

    return <Toolbar>
        {
            checkContentPolicy({
                key: "bold",
                ...rest
            }) && <MarkButton
                format="bold"
                icon={FormatBoldIcon}
                title="Bold"
            />
        }
        {
            checkContentPolicy({
                key: "italic",
                ...rest
            }) && <MarkButton
                format="italic"
                icon={FormatItalicIcon}
                title="Italic"
            />
        }
        {
            checkContentPolicy({
                key: "underline",
                ...rest
            }) && <MarkButton
                format="underline"
                icon={FormatUnderlinedIcon}
                title="UnderLine"
            />
        }
        {
            checkContentPolicy({
                key: "strikethrough",
                ...rest
            }) && <MarkButton
                format="strikethrough"
                icon={FormatStrikethroughIcon}
                title="Strikethrough"
            />
        }
        {
            checkContentPolicy({
                key: "code",
                ...rest
            }) && <MarkButton
                format="code"
                icon={CodeIcon}
                title="Code"
            />
        }
        {
            checkContentPolicy({
                key: "headingOne",
                ...rest
            }) && <BlockButton
                format="heading-one"
                icon={LooksOneIcon}
                title="Heading level 1"
            />
        }
        {
            checkContentPolicy({
                key: "headingTwo",
                ...rest
            }) && <BlockButton
                format="heading-two"
                icon={LooksTwoIcon}
                title="Heading level 2"
            />
        }
        {
            checkContentPolicy({
                key: "headingThree",
                ...rest
            }) && <BlockButton
                format="heading-three"
                icon={Looks3Icon}
                title="Heading level 3"
            />
        }
        {
            checkContentPolicy({
                key: "headingFour",
                ...rest
            }) && <BlockButton
                format="heading-four"
                icon={Looks4Icon}
                title="Heading level 4"
            />
        }
        {
            checkContentPolicy({
                key: "horizontalLine",
                ...rest
            }) && <HorizontalRuleButton />
        }
        {
            checkContentPolicy({
                key: "blockQuotation",
                ...rest
            }) && <BlockButton
                format="block-quote"
                icon={FormatQuoteIcon}
                title="Block quotation"
            />
        }
        {
            checkContentPolicy({
                key: "numberedList",
                ...rest
            }) && <BlockButton
                format="numbered-list"
                icon={FormatListNumberedIcon}
                title="Numbered List"
            />
        }
        {
            checkContentPolicy({
                key: "unnumberedList",
                ...rest
            }) && <BlockButton
                format="bulleted-list"
                icon={FormatListBulletedIcon}
                title="Bulleted List"
            />
        }
        {
            checkContentPolicy({
                key: "image",
                ...rest
            }) && <ImageButton
                title="Add Image"
            />
        }
        {
            checkContentPolicy({
                key: "link",
                ...rest
            }) && <LinkButton
                active={isBlockActive(editor, "link")}
                editor={editor}
                title="Add Link"
            />
        }
        {/* <NewLinkButton
            active={isBlockActive(editor, "link")}
            editor={editor}
            title="Add Link"
        /> */}
        {
            checkContentPolicy({
                key: "component",
                ...rest
            }) && <AddComponentButton
                title="Add Component"
            />
        }
        {
            checkContentPolicy({
                key: "table",
                ...rest
            }) && <TableSelector editor={editor} />
        }
        {
            checkContentPolicy({
                key: "table",
                ...rest
            }) && <TableContextMenu editor={editor} />
        }
        {
            checkContentPolicy({
                key: "html",
                ...rest
            }) && <AddRawHtml />
        }
        {
            app.isDevOrSuperAdmin() &&
            <GenerateData
                title="Generate sample content"
            />
        }
    </Toolbar>
}

export default ComplexToolbar
