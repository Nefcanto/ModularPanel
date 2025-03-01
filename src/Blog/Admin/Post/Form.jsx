import {
    DialogForm,
    LongText,
    Slug,
    Title,
} from "Form"
import AuthorField from "../Author/Field"

const inputs = <>
    <Title />
    <Slug />
    <LongText
        placeholder="InfraSummary"
        property="Summary"
    />
    <AuthorField />
</>

const PostForm = <DialogForm
    entityType="BlogPost"
    help="PostForm"
    humanReadableEntityType="BlogPost"
    inputs={inputs}
/>

export default PostForm
