import { LabelValue } from "Panel"
import { ValueWithTitle } from "List"
import { CategoryChips } from "NewTaxonomy"
import { UserChips } from "Accounts"

const TaskCard = entity => <div>
    <LabelValue
        label="Title"
        value={
            <ValueWithTitle
                value={entity.title}
                title={entity.description}
            />}
    />
    <div className="text-xs flex flex-col gap-2 mt-2">
        <CategoryChips entity={entity} />
        <UserChips
            entity={entity}
        />
    </div>
</div>

export default TaskCard
