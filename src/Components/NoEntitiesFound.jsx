import app from "App"

const NoEntitiesFound = ({
    className,
    ctaText,
    description,
    icon,
    title,
}) => {
    return <div
        className={`py-10 text-2xl font-bold text-gray-600 dark:text-gray-200 ${className || ""}`}
    >
        {
            app.t("InfraNoItemsFound")
        }
    </div>
}

export default NoEntitiesFound
