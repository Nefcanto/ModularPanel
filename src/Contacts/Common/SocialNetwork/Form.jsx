import {
    Code,
    DialogForm,
    Key,
    Slug,
    Title,
} from "Form"

const inputs = entity => <>
    <Key />
    <Slug />
    <Title />
    <Code
        placeholder="InfraSvg"
        property="Svg"
    />
</>

const SocialNetworkForm = () => {
    return <DialogForm
        humanReadableEntityType="ContactsSocialNetwork"
        entityType="SocialNetwork"
        inputs={inputs}
    />
}

export default SocialNetworkForm
