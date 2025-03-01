import { forwardRef } from "react"
import { Transforms } from "slate"
import { useSlate } from "slate-react"
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule"
import HolismIcon from "../../../HolismIcon"

const HorizontalRuleButton = forwardRef(({
    active,
    reversed,
}, ref) => {

    const editor = useSlate()
    const handleButtonClick = (e) => {
        e.preventDefault()
        const hr = { type: "horizontal-rule", children: [{ text: "" }] }
        Transforms.insertNodes(editor, hr)
    }

    return (
        <div
            className="relative inline"
            onClick={handleButtonClick}
            title="HR"
        >
            <span
                className={"cursor-pointer ms-5 " + (reversed ? (active ? "text-white" : "text-gray-400") : (active ? "text-zinc-900" : "text-gray-300"))}
            >
                <HolismIcon icon={HorizontalRuleIcon} />
            </span>
        </div>
    )
})

export default HorizontalRuleButton
