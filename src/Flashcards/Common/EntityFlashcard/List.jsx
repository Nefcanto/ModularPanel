import { parseQuery } from "App"
import {
    List,
    Text,
} from "List"
import {
    EntityTypeFilter,
    EntityTypeProperty,
    ModuleFilter,
    ModuleProperty,
} from "ModulesCommon"
import EntityFlashcardForm from "./Form"

const filters = ({
    entityGuid,
    entityType,
    module,
}) => <>
        {
            !module && <ModuleFilter />
        }
        {
            !entityType && <EntityTypeFilter />
        }
        {
            !entityGuid &&
            <Text
                property="EntityGuid"
                placeholder="InfraEntity"
            />
        }
        <Text
            property="Front"
            placeholder="FlashcardsFront"
        />
        <Text
            property="Back"
            placeholder="FlashcardsBack"
        />
    </>

const headers = ({
    entityGuid,
    entityType,
    module
}) => <>
        {
            !module && <th>ModulesModule</th>
        }
        {
            !entityType && <th>ModulesEntityType</th>
        }
        {
            !entityGuid && <th>InfraEntity</th>
        }
        <th>FlashcardsFront</th>
        <th>FlashcardsBack</th>
    </>

const row = ({
    entityGuid,
    entityType,
    module
}) => entity => <>
    {
        !module && <td>
            <ModuleProperty />
        </td>
    }
    {
        !entityType &&
        <td>
            <EntityTypeProperty />
        </td>
    }
    {
        !entity &&
        <td>
            Entity
        </td>
    }
    <td>{entity.flashcardsFlashcardFront}</td>
    <td>{entity.flashcardsFlashcardBack}</td>
</>

const EntityFlashcards = () => {

    const {
        entityGuid,
        entityType,
        module,
    } = parseQuery()

    return <List
        title="FlashcardsEntityFlashcards"
        entityType="EntityFlashcard"
        filters={filters({
            entityGuid,
            entityType,
            module,
        })}
        headers={headers({
            entityGuid,
            entityType,
            module,
        })}
        row={row({
            entityGuid,
            entityType,
            module,
        })}
        create={EntityFlashcardForm}
        hasEdit
        hasDelete
    />
}

export default EntityFlashcards
