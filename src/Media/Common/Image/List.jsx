import CheckIcon from "@mui/icons-material/Check"
import { post } from "App"
import {
    Boolean,
    BooleanProperty,
    EntityAction,
    List,
} from "List"
import ImageForm from "./Form"
import EditTitleForm from "./EditTitle"
import card from "./Card"

const filters = <>
    <Boolean
        label="MediaIsDefault"
        property="IsDefault"
    />
</>

const entityActions = entity => {

    const setAsDefault = ({
        error,
        reload,
        setProgress,
        success,
    }) => {
        setProgress(true)
        post(`/image/setAsDefault/${entity.id}`)
            .then(data => {
                setProgress(false)
                success("InfraDone")
                reload()
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <>
        {
            !entity.isDefault && <EntityAction
                icon={CheckIcon}
                onClick={setAsDefault}
                title="MediaSetAsDefault"
            />
        }
    </>
}

const Images = () => {
    return <List
        card={card}
        create={ImageForm}
        edit={EditTitleForm}
        entityActions={entityActions}
        entityType="Image"
        filters={filters}
        hasDelete
        multicolumn
        title="MediaImages"
    />
}

export default Images
