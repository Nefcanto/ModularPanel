import Icon from "@mui/material/Icon"
import SvgIcon from "@mui/material/SvgIcon"
import { merge } from "App"

const HolismIcon = ({
    className,
    onClick,
    icon,
    progress,
}) => {
    const styles = merge(onClick instanceof Function ? "cursor-pointer" : "", className)
    switch (typeof icon) {
        case "object":
            const iconType = typeof icon?.type
            if (
                iconType === "function"
                ||
                (
                    iconType === "object"
                    &&
                    typeof icon.type?.render === "function"
                )
            ) {
                let props = {}
                if (progress) {
                    props = { color: "disabled" }
                }
                const PassedIcon = icon
                return <PassedIcon
                    className={styles}
                    {...props}
                    onClick={onClick}
                />
            }
            if (icon.props) {
                return icon
            }
            return <>{icon}</>
        case "function":
            return icon()
        case "string":
            if (icon.indexOf("<svg") > -1) {
                return <span
                    className={styles}
                    onClick={onClick}
                >
                    <SvgIcon>
                        {icon}
                    </SvgIcon>
                </span>
            }
            return <Icon
                className={styles}
                onClick={onClick}
            >
                {icon}
            </Icon>
        default:
            return <span
                className={styles}
                onClick={onClick}
            >
                NoIcon
            </span>
    }
}

export default HolismIcon
