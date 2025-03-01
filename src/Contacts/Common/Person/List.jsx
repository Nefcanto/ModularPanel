import ImportContactsIcon from "@mui/icons-material/ImportContacts"
import { post } from "App"
import {
    Image,
    List,
    ListAction,
} from "List"
import PersonForm from "./Form"

const listActions = () => {
    const lookForDefaults = ({
        error,
        reloadList,
        setProgress,
    }) => {
        setProgress(true)
        post("/contact/updateAllDefaults")
            .then(data => {
                setProgress(false)
                reloadList()
            }, e => {
                setProgress(false)
                error(e)
            })
    }

    return <>
        <ListAction
            title="ContactsUpdateAllDefaults"
            icon={ImportContactsIcon}
            onClick={lookForDefaults}
        />
    </>

}

const card = entity => <>
    <Image />
    <div>{entity.displayName}</div>
</>

const Persons = ({
    entityType,
    ...rest
}) => {
    return <List
        card={card}
        create={PersonForm}
        entityType={entityType ?? "Person"}
        listActions={listActions}
        title="ContactsPersons"
        {...rest}
    />
}

export default Persons
