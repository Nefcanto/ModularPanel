import { t } from "App"

const Group = ({
    title,
    children
}) => {
    return <div className="">
        <h1>{t(title)}</h1>
        <div>{children}</div>
    </div>
}

export default Group
