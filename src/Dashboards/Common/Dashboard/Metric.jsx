const Metric = ({ block }) => {

    const content = block.relatedItems.content

    return <div className="text-3xl font-bold text-slate-800 dark:text-slate-200">{content}</div>
}

export default Metric
