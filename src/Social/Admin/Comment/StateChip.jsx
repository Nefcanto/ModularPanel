import { Chip } from "List"

const textProvider = entity => {
    let text = "New Comment"
    if (entity.state) {
        text = entity.state
    }
    return text
}

const styleProvider = entity => {
    if (!entity.state) {
        return "bg-slate-200 dark:bg-slate-300 dark:text-black"
    }
    switch (entity.state?.toLowerCase()) {
        case "approved":
            return "bg-green-200 dark:bg-green-400 dark:text-black"
        case "rejected":
            return "bg-red-200 dark:bg-red-300 dark:text-black"
    }
}

const StateChip = entity => <td>
    <Chip
        className={styleProvider(entity)}
        text={textProvider(entity)}
    />
</td>

export default StateChip
