const SimpleText = ({
    children,
    className,
}) => {
    return <span className={`text-slate-600 dark:text-slate-200 ${className || ""}`}>{children}</span>
}

export default SimpleText
