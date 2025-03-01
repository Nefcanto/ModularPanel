import { t } from "App"
import HolismIcon from "../HolismIcon"

const Title = ({
    className,
    icon,
    text,
}) => {
    return <div className={`flex flex-row gap-2 justify-between mb-10 ${className || ""}`}>
        <span className="font-bold text-xl border-b-4 border-gray-400 w-fit">
            {t(text)}
        </span>
        <HolismIcon
            className="w-10 h-10 fill-slate-600"
            icon={icon}
        />
    </div>
}

export default Title
