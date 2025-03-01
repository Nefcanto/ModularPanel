import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import CheckIcon from "@mui/icons-material/Check"
import { t } from "App"
import {
    useEnum,
    useFilter,
} from "Hooks"
import Filter from "./Filters/Filter"
import Progress from "../../Progress"
import Chip from "../../Chip"
import HolismIcon from "../../HolismIcon"

const Enum = ({
    badge,
    entityType,
    includedItems,
    onChange,
    placeholder,
    property,
    show,
    styleProvider,
}) => {

    const {
        enumItems,
        progress,
    } = useEnum({ entityType })
    const {
        entity,
        id,
        initialFilter,
        isChanged,
        isDirty,
        isReset,
        label,
        setEntity,
        setIsDirty,
    } = useFilter({
        choose: i => i,
        placeholder,
        property,
        show: i => i,
        type: "enum",
    })

    if (includedItems && Array.isArray(includedItems)) {
        includedItems = includedItems.map(i => i.toLowerCase())
    }

    const extraProps = {

    }
    if (badge) {
        extraProps.fullRow = true
        extraProps.hideLabel = true
    }

    return <Filter
        id={id}
        label={label}
        {...extraProps}
    >
        {
            badge
                ?
                progress
                    ?
                    <Progress />
                    :
                    <div className="flex flex-row gap-x-3 gap-y-2 flex-wrap">
                        {
                            enumItems.map(entity => {
                                if (includedItems && !includedItems.includes(entity.key.toLowerCase())) {
                                    return
                                }
                                return <div
                                    className="inline-block"
                                    key={entity.id}
                                    onClick={() => {
                                        if (!isDirty) {
                                            setIsDirty(true)
                                        }
                                        setEntity(entity.key)
                                    }}
                                >
                                    <Chip
                                        className={styleProvider(entity.key) + " select-none transition-all cursor-pointer "}
                                        text={entity?.translation}
                                    />
                                </div>
                            })
                        }
                    </div>
                :
                <Select
                    fullWidth
                    label={t(label)}
                    onChange={event => {
                        setEntity(event.target.value)
                        if (onChange instanceof Function) {
                            onChange(event.target.value)
                        }
                    }}
                    onClick={() => {
                        if (!isDirty) {
                            setIsDirty(true)
                        }
                    }}
                    onKeyDown={() => {
                        if (!isDirty) {
                            setIsDirty(true)
                        }
                    }}
                    size="small"
                    value={
                        isReset
                            ?
                            ""
                            :
                            isDirty
                                ?
                                entity || ""
                                :
                                initialFilter?.value || ""
                    }
                >
                    {
                        progress
                            ?
                            <Progress />
                            :
                            (
                                enumItems?.map(entity =>
                                    <MenuItem
                                        key={entity.id}
                                        value={entity.key}
                                    >
                                        {
                                            show
                                                ?
                                                show(entity)
                                                :
                                                entity.translation
                                        }
                                    </MenuItem>)
                            )
                    }
                </Select>
        }
    </Filter>
}

export default Enum
