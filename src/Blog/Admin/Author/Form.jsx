import {
    LongText,
    Slug,
} from "Form"
import { NaturalPersonForm } from "Contacts"

const augmentInputs = entity => <>
    <Slug />
    <LongText
        property="Bio"
        placeholder="BlogBio"
    />
</>

const AuthorForm = () => {
    return <NaturalPersonForm
        entityType="Author"
        augmentInputs={augmentInputs}
    />
}

export default AuthorForm
