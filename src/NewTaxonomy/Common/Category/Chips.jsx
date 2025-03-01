const CategoryChips = ({ entity }) => {
    return <div className="flex gap-2">
        {
            entity.relatedItems?.categories?.map(category => <span
                key={category.id}
                className="px-2 py-0.5 border rounded-sm"
            >
                {category.title}
            </span>
            )
        }
    </div>
}

export default CategoryChips
