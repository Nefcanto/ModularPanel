import { useNavigate } from "react-router"

const Link = ({
    children,
    className,
    goTo,
}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(goTo)
    }

    return <span
        onClick={handleClick}
        className={`cursor-pointer block ${className || ""}`}
    >
        {children}
    </span>
}

export default Link
