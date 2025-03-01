import { BooleanProperty } from "List"

const card = entity => {
    return <div className="w-full h-full relative">
        {
            entity.title &&
            <div className="grid place-items-center bg-white dark:bg-stone-900 absolute top-0 p-2 opacity-70">
                {entity.title}
            </div>
        }
        <img
            className="w-full h-full object-cover"
            src={entity.relatedItems.url}
        />
        <div className="w-8 h-8 grid place-items-center bg-white dark:bg-slate-900 absolute bottom-0 start-0 opacity-70">
            <BooleanProperty value={entity.isDefault} />
        </div>
    </div>
}

export default card
