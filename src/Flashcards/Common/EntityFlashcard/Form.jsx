import { parseQuery } from "App"
import {
    DialogForm,
    LongText,
    Text,
} from "Form"
import { EntityTypeField } from "ModulesCommon"

const EntityFlashcardForm = ({ entity }) => {

    const { entityType, entityGuid } = parseQuery()

    const inputs = entity => <>
        {
            !entityType && <EntityTypeField />
        }
        {
            !entityGuid && <Text
                property="EntityGuid"
                placeholder="InfraEntity"
            />
        }
        <Text
            property="Front"
            placeholder="FlashcardsFront"
            required
        />
        <LongText
            property="Back"
            placeholder="FlashcardsBack"
            required
        />
    </>

    return <DialogForm
        entityType="EntityFlashcard"
        humanReadableEntityType="FlashcardsEntityFlashcard"
        inputs={inputs}
    />
}

export default EntityFlashcardForm
