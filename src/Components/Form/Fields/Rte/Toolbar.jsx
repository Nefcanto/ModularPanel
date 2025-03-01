import { forwardRef } from "react"
import Menu from "./Menu"

const Toolbar = forwardRef((
    {
        className,
        ...props
    }, ref) => (
    <Menu
        {...props}
        ref={ref}
        className="pb-[17px] py-[18px] my-0 -mx-[20px] border-b-2 mb-[20px] sticky top-0 bg-white dark:bg-zinc-600 z-40"
    />
))

export default Toolbar
