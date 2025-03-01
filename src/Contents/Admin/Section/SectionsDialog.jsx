import { url } from "App"
import {
    Checks,
    DialogForm,
} from "Form"

const SectionsDialog = ({
    close,
    entity,
    layout,
    page,
    reloadEntity,
    ...rest
}) => {

    const inputs = <>
        <Checks
            checkedItemsUrl={`/section/assigned?layout=${layout || ""}&page=${page || ""}`}
            choose={entity => entity.key}
            itemsUrl={`/section/all`}
            property="Sections"
            show={entity => entity.name}
        />
    </>

    const apiUrl = url({
        path: "/section/assign",
        query: {
            layout: layout || "",
            page: page || ""
        }
    })

    return <DialogForm
        {...rest}
        entityType="Section"
        inputs={inputs}
        submitTo={apiUrl}
        title="ContentsManageSections"
    />
}

export default SectionsDialog
