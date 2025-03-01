import { useState } from "react"
import {
    BrowseContext,
    DialogContext,
} from "Contexts"
import BrowserDialog from "../Components/Browse/BrowserDialog"

const Browse = ({
    entityType,
    isTree,
    list,
    onChange,
    open,
    setOpen,
    ...rest
}) => {

    const [selectedEntity, setSelectedEntity] = useState(null)

    return <DialogContext.Provider
        value={{
            open,
            setOpen
        }}
    >
        <BrowseContext.Provider
            value={{
                close: () => setOpen(false),
                entityType,
                isTree,
                list,
                onSelected: entity => {
                    if (onChange instanceof Function) {
                        onChange(entity)
                    }
                },
                selectedEntity,
                setSelectedEntity,
                small: true,
                ...rest
            }}
        >
            <BrowserDialog />
        </BrowseContext.Provider>
    </DialogContext.Provider>
}

export default Browse
